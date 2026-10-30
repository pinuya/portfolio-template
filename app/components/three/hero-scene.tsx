import { useRef } from "react";

import { useThreeScene, type SceneSetup } from "~/components/three/use-three-scene";
import { cn } from "~/lib/utils";

const COLUMNS = 140;
const ROWS = 70;
const SPACING = 0.18;

const vertexShader = `
  uniform float uTime;
  uniform vec2 uPointer;
  uniform float uPixelRatio;
  varying float vElevation;
  varying float vDepth;

  void main() {
    vec3 p = position;

    float wave =
      sin(p.x * 0.6 + uTime * 0.6) * 0.35 +
      sin(p.z * 0.8 + uTime * 0.45) * 0.25 +
      sin((p.x + p.z) * 0.35 + uTime * 0.3) * 0.3;

    float dist = distance(p.xz, uPointer * vec2(7.0, 3.5));
    wave += smoothstep(3.0, 0.0, dist) * 0.6;

    p.y += wave;
    vElevation = wave;

    vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
    vDepth = -mvPosition.z;
    gl_Position = projectionMatrix * mvPosition;
    gl_PointSize = (2.6 + wave * 1.2) * uPixelRatio * (6.0 / vDepth);
  }
`;

const fragmentShader = `
  uniform vec3 uColor;
  uniform float uOpacity;
  varying float vElevation;
  varying float vDepth;

  void main() {
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;
    float alpha = smoothstep(0.5, 0.1, d);

    float crest = 0.45 + clamp(vElevation, 0.0, 1.0) * 0.55;
    float fog = smoothstep(16.0, 4.0, vDepth);

    gl_FragColor = vec4(uColor, alpha * crest * fog * uOpacity);
  }
`;

const setup: SceneSetup = ({ three, scene, camera, pointer, color }) => {
  const positions = new Float32Array(COLUMNS * ROWS * 3);
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLUMNS; col++) {
      const i = (row * COLUMNS + col) * 3;
      positions[i] = (col - COLUMNS / 2) * SPACING;
      positions[i + 1] = 0;
      positions[i + 2] = (row - ROWS / 2) * SPACING;
    }
  }

  const geometry = new three.BufferGeometry();
  geometry.setAttribute("position", new three.BufferAttribute(positions, 3));

  const isDark = () => document.documentElement.classList.contains("dark");

  const material = new three.ShaderMaterial({
    vertexShader,
    fragmentShader,
    transparent: true,
    depthWrite: false,
    uniforms: {
      uTime: { value: 0 },
      uPointer: { value: new three.Vector2() },
      uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
      uColor: { value: color },
      uOpacity: { value: isDark() ? 0.9 : 0.7 },
    },
  });

  const points = new three.Points(geometry, material);
  points.position.y = -1.6;
  scene.add(points);

  camera.position.set(0, 1.4, 6);
  camera.lookAt(0, -0.8, 0);

  const smooth = new three.Vector2();

  return {
    update(time) {
      smooth.x += (pointer.x - smooth.x) * 0.05;
      smooth.y += (pointer.y - smooth.y) * 0.05;

      material.uniforms.uTime.value = time;
      material.uniforms.uPointer.value.set(smooth.x, -smooth.y);

      camera.position.x = smooth.x * 0.6;
      camera.position.y = 1.4 + smooth.y * 0.3;
      camera.lookAt(0, -0.8, 0);
    },
    onThemeChange() {
      material.uniforms.uOpacity.value = isDark() ? 0.9 : 0.7;
    },
    dispose() {
      geometry.dispose();
      material.dispose();
    },
  };
};

export function HeroScene({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  useThreeScene(containerRef, setup, { fov: 55 });

  return (
    <div
      ref={containerRef}
      aria-hidden
      className={cn("pointer-events-none absolute inset-0", className)}
    />
  );
}
