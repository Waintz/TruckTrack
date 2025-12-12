import { Footer } from "@/components/features/landing/Footer/Footer";
import { HeaderMain } from "@/components/features/landing/Header/HeaderMain";
import { ScrollProvider } from "@/providers/ScrollContext";

export default function PolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ScrollProvider>
      <HeaderMain />
      {children}
      <Footer />
    </ScrollProvider>
  );
}
