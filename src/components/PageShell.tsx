import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { SiteHeader } from "./SiteHeader";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader variant="bar" />
      <main>{children}</main>
      <Footer />
    </>
  );
}
