"use client";

import { useEnquire } from "./enquire";

export function EnquireButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { openEnquire } = useEnquire();
  return (
    <button type="button" className={className} onClick={openEnquire}>
      {children}
    </button>
  );
}
