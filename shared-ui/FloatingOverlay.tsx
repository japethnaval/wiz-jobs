"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";

export type FloatingRect = {
  top: number;
  left: number;
  width: number;
  height: number;
};

const FloatingContext = createContext<{ rect: FloatingRect | null } | null>(null);

export function FloatingOverlayProvider({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [rect, setRect] = useState<FloatingRect | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const update = () => {
      const r = ref.current!.getBoundingClientRect();
      setRect({
        top: r.top,
        left: r.left,
        width: r.width,
        height: r.height,
      });
    };

    update();

    const resizeObserver = new ResizeObserver(update);
    resizeObserver.observe(ref.current);

    window.addEventListener("scroll", update, true);
    window.addEventListener("resize", update);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("scroll", update, true);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <FloatingContext.Provider value={{ rect }}>
      <div ref={ref} className="relative">
        {children}
      </div>
    </FloatingContext.Provider>
  );
}

export function FloatingOverlayLayer({
  children,
}: {
  children: (rect: FloatingRect) => ReactNode;
}) {
  const ctx = useContext(FloatingContext);
  const [mounted, setMounted] = useState(false);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  if (!mounted || !ctx?.rect) return null;

  return createPortal(
    <div className="fixed inset-0 pointer-events-none z-[999]">
      {children(ctx.rect)}
    </div>,
    document.body,
  );
}

export type FloatingOverlayPosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "center";

export function getBadgePositionStyles(
  position: FloatingOverlayPosition,
  rect: FloatingRect,
) {
  const base = { position: "absolute" as const };

  switch (position) {
    case "top-left":
      return {
        ...base,
        top: rect.top,
        left: rect.left,
        transform: "translate(-5%, -40%)",
      };
    case "top-right":
      return {
        ...base,
        top: rect.top,
        left: rect.left + rect.width,
        transform: "translate(-100%, -40%)",
      };
    case "bottom-left":
      return {
        ...base,
        top: rect.top + rect.height,
        left: rect.left,
        transform: "translate(-5%, -100%)",
      };
    case "bottom-right":
      return {
        ...base,
        top: rect.top + rect.height,
        left: rect.left + rect.width,
        transform: "translate(-100%, -100%)",
      };
    case "center":
      return {
        ...base,
        top: rect.top + rect.height / 2,
        left: rect.left + rect.width / 2,
        transform: "translate(-50%, -50%)",
      };
  }
}

