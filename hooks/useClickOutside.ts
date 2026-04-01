import { useEffect } from "react";

type Handler = (event: Event) => void;

export function useClickOutside<T extends HTMLElement>(
  ref: React.RefObject<T>,
  handler: Handler
) {
  useEffect(() => {
    const listener = (event: Event) => {
      const el = ref.current;

      // Do nothing if clicking inside the element
      if (!el || el.contains(event.target as Node)) return;

      handler(event);
    };

    // Use pointer events for better mobile support
    document.addEventListener("pointerdown", listener);

    return () => {
      document.removeEventListener("pointerdown", listener);
    };
  }, [ref, handler]);
}