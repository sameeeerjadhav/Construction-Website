"use client";

import { useEffect, useRef, useState, type HTMLAttributes, type ReactNode } from "react";

export function Reveal({
  children,
  className = "",
  stagger = false,
  ...rest
}: HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  stagger?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { threshold: 0.16, rootMargin: "0px 0px -6% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const kind = stagger ? "reveal-stagger" : "reveal";
  return (
    <div ref={ref} className={`${kind}${visible ? " is-in" : ""} ${className}`.trim()} {...rest}>
      {children}
    </div>
  );
}
