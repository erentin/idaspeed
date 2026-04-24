import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Geo helper: lat/lng -> point on sphere
const geoToVec3 = (lat: number, lng: number, r: number) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta)
  );
};

// Greater-circle arc between two lat/lng points
const arcPoints = (a: THREE.Vector3, b: THREE.Vector3, segments = 64) => {
  const pts: THREE.Vector3[] = [];
  const angle = a.angleTo(b);
  const axis = new THREE.Vector3().crossVectors(a, b).normalize();
  const arcHeight = 0.35 * a.length();
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const q = new THREE.Quaternion().setFromAxisAngle(axis, angle * t);
    const p = a.clone().applyQuaternion(q);
    // lift up into arc
    const lift = Math.sin(Math.PI * t) * arcHeight;
    p.setLength(a.length() + lift);
    pts.push(p);
  }
  return pts;
};

const CITIES = [
  { name: 'Sofia',     lat: 42.6977, lng: 23.3219, primary: true },
  { name: 'Istanbul',  lat: 41.0082, lng: 28.9784, primary: true },
  { name: 'London',    lat: 51.5074, lng: -0.1278, primary: true },
  { name: 'Frankfurt', lat: 50.1109, lng: 8.6821 },
  { name: 'Milano',    lat: 45.4642, lng: 9.1900 },
  { name: 'Paris',     lat: 48.8566, lng: 2.3522 },
  { name: 'Berlin',    lat: 52.5200, lng: 13.4050 },
  { name: 'Vienna',    lat: 48.2082, lng: 16.3738 },
  { name: 'Stockholm', lat: 59.3293, lng: 18.0686 },
  { name: 'Bucharest', lat: 44.4268, lng: 26.1025 },
  { name: 'Belgrade',  lat: 44.7866, lng: 20.4489 },
  { name: 'Bursa',     lat: 40.1828, lng: 29.0665 },
  { name: 'Ankara',    lat: 39.9334, lng: 32.8597 },
  { name: 'Manchester',lat: 53.4808, lng: -2.2426 },
  // Nordics & Baltics & CEE — added coverage
  { name: 'Helsinki',  lat: 60.1699, lng: 24.9384 },
  { name: 'Tallinn',   lat: 59.4370, lng: 24.7536 },
  { name: 'Riga',      lat: 56.9496, lng: 24.1052 },
  { name: 'Vilnius',   lat: 54.6872, lng: 25.2797 },
  { name: 'Warsaw',    lat: 52.2297, lng: 21.0122 },
  { name: 'Prague',    lat: 50.0755, lng: 14.4378 },
  { name: 'Bratislava',lat: 48.1486, lng: 17.1077 },
];

const ROUTES: Array<[string, string]> = [
  ['Sofia', 'Istanbul'],
  ['London', 'Sofia'],
  ['London', 'Istanbul'],
  ['Manchester', 'Sofia'],
  ['Paris', 'Istanbul'],
  ['Frankfurt', 'Sofia'],
  ['Milano', 'Sofia'],
  ['Berlin', 'Sofia'],
  ['Vienna', 'Sofia'],
  ['Stockholm', 'Sofia'],
  ['Bucharest', 'Istanbul'],
  ['Belgrade', 'Sofia'],
  ['Sofia', 'Bursa'],
  ['Sofia', 'Ankara'],
  // New Nordic/Baltic/CEE corridors
  ['Helsinki', 'Sofia'],
  ['Tallinn', 'Sofia'],
  ['Riga', 'Sofia'],
  ['Vilnius', 'Sofia'],
  ['Warsaw', 'Istanbul'],
  ['Prague', 'Istanbul'],
  ['Bratislava', 'Istanbul'],
];

const Globe3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 5.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    const GOLD = new THREE.Color(0xEE333F); /* brand red accent */
    const NAVY = new THREE.Color(0x1A3E62);
    const CREAM = new THREE.Color(0xF5F1E8);

    // Core sphere (deep navy, slightly translucent)
    const core = new THREE.Mesh(
      new THREE.SphereGeometry(1.6, 64, 64),
      new THREE.MeshBasicMaterial({ color: NAVY, transparent: true, opacity: 0.55 })
    );
    globeGroup.add(core);

    // Wireframe sphere
    const wire = new THREE.Mesh(
      new THREE.SphereGeometry(1.601, 36, 24),
      new THREE.MeshBasicMaterial({ color: CREAM, wireframe: true, transparent: true, opacity: 0.08 })
    );
    globeGroup.add(wire);

    // Atmosphere (backface glow shell)
    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(1.75, 64, 64),
      new THREE.ShaderMaterial({
        transparent: true,
        side: THREE.BackSide,
        uniforms: { uColor: { value: GOLD } },
        vertexShader: `
          varying vec3 vNormal;
          void main(){ vNormal = normalize(normalMatrix * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }
        `,
        fragmentShader: `
          varying vec3 vNormal;
          uniform vec3 uColor;
          void main(){
            float intensity = pow(0.72 - dot(vNormal, vec3(0.0,0.0,1.0)), 3.0);
            gl_FragColor = vec4(uColor, 1.0) * intensity;
          }
        `,
      })
    );
    globeGroup.add(atmosphere);

    // City nodes
    const cityMap = new Map<string, THREE.Vector3>();
    CITIES.forEach((c) => {
      const p = geoToVec3(c.lat, c.lng, 1.6);
      cityMap.set(c.name, p);
      const size = c.primary ? 0.028 : 0.018;
      const dot = new THREE.Mesh(
        new THREE.SphereGeometry(size, 16, 16),
        new THREE.MeshBasicMaterial({ color: GOLD })
      );
      dot.position.copy(p);
      globeGroup.add(dot);

      if (c.primary) {
        const ring = new THREE.Mesh(
          new THREE.RingGeometry(size * 1.8, size * 2.3, 32),
          new THREE.MeshBasicMaterial({ color: GOLD, transparent: true, opacity: 0.5, side: THREE.DoubleSide })
        );
        ring.position.copy(p);
        ring.lookAt(new THREE.Vector3(0, 0, 0));
        ring.userData.pulseBase = size * 1.8;
        globeGroup.add(ring);
      }
    });

    // Arc lines with animated dashed segments
    const arcMeshes: THREE.Line[] = [];
    const arcDashes: THREE.Line[] = [];
    ROUTES.forEach(([a, b]) => {
      const pa = cityMap.get(a);
      const pb = cityMap.get(b);
      if (!pa || !pb) return;
      const pts = arcPoints(pa, pb, 96);
      const geom = new THREE.BufferGeometry().setFromPoints(pts);
      const line = new THREE.Line(
        geom,
        new THREE.LineBasicMaterial({ color: GOLD, transparent: true, opacity: 0.35 })
      );
      globeGroup.add(line);
      arcMeshes.push(line);

      // moving glow dash along arc (a short tube slice)
      const dashGeom = new THREE.BufferGeometry().setFromPoints(pts.slice(0, 10));
      const dashMat = new THREE.LineBasicMaterial({ color: CREAM, transparent: true, opacity: 0.95 });
      const dash = new THREE.Line(dashGeom, dashMat);
      dash.userData.points = pts;
      dash.userData.offset = Math.random();
      globeGroup.add(dash);
      arcDashes.push(dash);
    });

    // Background star particles
    const starCount = 800;
    const starGeom = new THREE.BufferGeometry();
    const starPos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      const r = 18 + Math.random() * 12;
      const t = Math.random() * Math.PI * 2;
      const u = (Math.random() - 0.5) * Math.PI;
      starPos[i * 3] = Math.cos(u) * Math.cos(t) * r;
      starPos[i * 3 + 1] = Math.sin(u) * r;
      starPos[i * 3 + 2] = Math.cos(u) * Math.sin(t) * r;
    }
    starGeom.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    const stars = new THREE.Points(
      starGeom,
      new THREE.PointsMaterial({ color: 0xffffff, size: 0.05, transparent: true, opacity: 0.45 })
    );
    scene.add(stars);

    // Tilt + initial rotation
    globeGroup.rotation.x = -0.25;
    globeGroup.rotation.y = -1.2;

    // Mouse parallax
    let targetX = 0;
    let targetY = 0;
    const onPointerMove = (e: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 0.5;
      targetY = -y * 0.3;
    };
    window.addEventListener('pointermove', onPointerMove);

    // Resize
    const onResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    // Animation loop
    let raf = 0;
    const clock = new THREE.Clock();
    const animate = () => {
      const t = clock.getElapsedTime();
      globeGroup.rotation.y += 0.0018;
      globeGroup.rotation.x += (targetY - globeGroup.rotation.x - 0.25) * 0.03;
      globeGroup.rotation.z += (targetX * 0.2 - globeGroup.rotation.z) * 0.03;
      stars.rotation.y += 0.0003;

      // pulse primary rings
      globeGroup.children.forEach((obj: THREE.Object3D) => {
        if ((obj as any).userData?.pulseBase) {
          const m = obj as THREE.Mesh;
          const base = (m.userData.pulseBase as number);
          const s = 1 + Math.sin(t * 2) * 0.25;
          m.scale.set(s, s, s);
          (m.material as THREE.MeshBasicMaterial).opacity = 0.55 - Math.sin(t * 2) * 0.25;
          // suppress unused warning
          void base;
        }
      });

      // move dash glows along arcs
      arcDashes.forEach((dash) => {
        const pts: THREE.Vector3[] = dash.userData.points;
        const offset = dash.userData.offset as number;
        const len = pts.length;
        const segLen = 10;
        const start = Math.floor(((t * 0.12 + offset) % 1) * (len - segLen));
        const slice = pts.slice(start, start + segLen);
        dash.geometry.setFromPoints(slice);
      });

      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('resize', onResize);
      if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement);
      renderer.dispose();
      scene.traverse((o: THREE.Object3D) => {
        const any = o as any;
        if (any.geometry) any.geometry.dispose?.();
        if (any.material) {
          if (Array.isArray(any.material)) any.material.forEach((m: any) => m.dispose?.());
          else any.material.dispose?.();
        }
      });
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default Globe3D;
