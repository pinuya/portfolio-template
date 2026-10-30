import { useRef } from "react";

import {
  useThreeScene,
  type SceneSetup,
} from "~/components/three/use-three-scene";
import { cn } from "~/lib/utils";

const ORBIT_POINTS = 260;

const setup: SceneSetup = ({ three, scene, pointer, color }) => {
  const group = new three.Group();
  scene.add(group);

  const shapeGeometry = new three.WireframeGeometry(
    new three.IcosahedronGeometry(1.6, 1),
  );
  const shapeMaterial = new three.LineBasicMaterial({
    color,
    transparent: true,
    opacity: 0.55,
  });
  const shape = new three.LineSegments(shapeGeometry, shapeMaterial);
  group.add(shape);

  const orbitPositions = new Float32Array(ORBIT_POINTS * 3);
  for (let i = 0; i < ORBIT_POINTS; i++) {
    const angle = (i / ORBIT_POINTS) * Math.PI * 2;
    const radius = 2.6 + Math.sin(i * 12.9898) * 0.25;
    orbitPositions[i * 3] = Math.cos(angle) * radius;
    orbitPositions[i * 3 + 1] = Math.sin(i * 78.233) * 0.12;
    orbitPositions[i * 3 + 2] = Math.sin(angle) * radius;
  }
  const orbitGeometry = new three.BufferGeometry();
  orbitGeometry.setAttribute(
    "position",
    new three.BufferAttribute(orbitPositions, 3),
  );
  const orbitMaterial = new three.PointsMaterial({
    color,
    size: 0.035,
    transparent: true,
    opacity: 0.8,
    depthWrite: false,
  });
  const orbit = new three.Points(orbitGeometry, orbitMaterial);
  orbit.rotation.x = 0.45;
  orbit.rotation.z = -0.2;
  group.add(orbit);

  const tilt = new three.Vector2();

  return {
    update(time, delta) {
      shape.rotation.x += delta * 0.15;
      shape.rotation.y += delta * 0.22;
      shape.scale.setScalar(1 + Math.sin(time * 1.2) * 0.04);
      orbit.rotation.y += delta * 0.12;

      tilt.x += (pointer.y * 0.35 - tilt.x) * 0.04;
      tilt.y += (pointer.x * 0.5 - tilt.y) * 0.04;
      group.rotation.x = tilt.x;
      group.rotation.y = tilt.y;
    },
    onThemeChange() {
      shapeMaterial.color.copy(color);
      orbitMaterial.color.copy(color);
    },
    dispose() {
      shapeGeometry.dispose();
      shapeMaterial.dispose();
      orbitGeometry.dispose();
      orbitMaterial.dispose();
    },
  };
};

export function ContactScene({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  useThreeScene(containerRef, setup, { cameraZ: 7 });

  return (
    <div
      ref={containerRef}
      aria-hidden
      className={cn("pointer-events-none absolute inset-0", className)}
    />
  );
}
