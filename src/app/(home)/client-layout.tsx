"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/containers/header/header";
import { Footer } from "@/components/containers/footer/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { ScrollProvider } from "@/providers/ScrollContext";
import { pagesConfig } from "@/config/pages.config";
import { useMemo } from "react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const currentPage = useMemo(() => {
    return (
      pagesConfig.find(
        (p) =>
          p.path === pathname ||
          (p.path.includes("[id]") &&
            pathname.startsWith(p.path.replace("[id]", "")))
      ) ?? {
        showHeader: true,
        showFooter: true,
      }
    );
  }, [pathname]);

  return (
    <ScrollProvider>
      {currentPage.showHeader && <Header />}
      {children}
      {currentPage.showFooter && <Footer />}
      <SpeedInsights />
      <Analytics />
    </ScrollProvider>
  );
}
