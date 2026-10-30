import { useEffect, useRef, type RefObject } from "react";
import type * as THREE from "three";

type ThreeModule = typeof import("three");

export interface SceneContext {
  three: ThreeModule;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  pointer: { x: number; y: number };
  color: THREE.Color;
}

export interface SceneHandlers {
  update: (time: number, delta: number) => void;
  onThemeChange?: () => void;
  dispose?: () => void;
}

export type SceneSetup = (context: SceneContext) => SceneHandlers;

function readCssColor(target: THREE.Color, variable: string) {
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue(variable)
    .trim();
  const [h, s, l] = raw.split(/\s+/).map((part) => parseFloat(part));
  if ([h, s, l].some(Number.isNaN)) return;
  target.setHSL(h / 360, s / 100, l / 100, "srgb");
}

export function useThreeScene(
  containerRef: RefObject<HTMLElement | null>,
  setup: SceneSetup,
  { fov = 50, cameraZ = 6 }: { fov?: number; cameraZ?: number } = {},
) {
  const setupRef = useRef(setup);
  setupRef.current = setup;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let disposed = false;
    let cleanup = () => {};

    import("three").then((three) => {
      if (disposed) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      let renderer: THREE.WebGLRenderer;
      try {
        renderer = new three.WebGLRenderer({ antialias: true, alpha: true });
      } catch {
        return;
      }

      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.domElement.style.display = "block";
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
      container.appendChild(renderer.domElement);

      const scene = new three.Scene();
      const camera = new three.PerspectiveCamera(fov, 1, 0.1, 100);
      camera.position.z = cameraZ;

      const pointer = { x: 0, y: 0 };
      const color = new three.Color();
      readCssColor(color, "--primary");

      const handlers = setupRef.current({
        three,
        scene,
        camera,
        pointer,
        color,
      });

      let visible = true;
      let frame = 0;
      let elapsed = 0;
      let last = performance.now();

      function render() {
        const now = performance.now();
        const delta = Math.min((now - last) / 1000, 0.1);
        last = now;
        elapsed += delta;
        handlers.update(elapsed, delta);
        renderer.render(scene, camera);
      }

      function loop() {
        render();
        frame = requestAnimationFrame(loop);
      }

      function start() {
        if (reduceMotion || frame || !visible || document.hidden) return;
        last = performance.now();
        frame = requestAnimationFrame(loop);
      }

      function stop() {
        cancelAnimationFrame(frame);
        frame = 0;
      }

      function resize() {
        const { clientWidth: width, clientHeight: height } = container!;
        if (!width || !height) return;
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        if (reduceMotion) render();
      }

      function onPointerMove(event: PointerEvent) {
        const rect = container!.getBoundingClientRect();
        pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      }

      function onVisibilityChange() {
        if (document.hidden) stop();
        else start();
      }

      const resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(container);

      const intersectionObserver = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        if (visible) start();
        else stop();
      });
      intersectionObserver.observe(container);

      const themeObserver = new MutationObserver(() => {
        readCssColor(color, "--primary");
        handlers.onThemeChange?.();
        if (reduceMotion) render();
      });
      themeObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      });

      window.addEventListener("pointermove", onPointerMove, { passive: true });
      document.addEventListener("visibilitychange", onVisibilityChange);

      resize();
      if (reduceMotion) render();
      else start();

      cleanup = () => {
        stop();
        resizeObserver.disconnect();
        intersectionObserver.disconnect();
        themeObserver.disconnect();
        window.removeEventListener("pointermove", onPointerMove);
        document.removeEventListener("visibilitychange", onVisibilityChange);
        handlers.dispose?.();
        renderer.dispose();
        renderer.domElement.remove();
      };
    });

    return () => {
      disposed = true;
      cleanup();
    };
  }, [containerRef, fov, cameraZ]);
}
