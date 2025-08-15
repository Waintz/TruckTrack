import { Footer } from "@/components/containers/footer/footer";
import { HeaderMain } from "@/components/containers/HeaderMain/HeaderMain";
import { ScrollProvider } from "@/providers/ScrollContext";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <ScrollProvider>
      <HeaderMain />
      {children}
      <Footer />
    </ScrollProvider>
  );
}
