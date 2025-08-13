import { Footer } from "@/components/containers/footer/footer";
import { Header } from "@/components/containers/header/header";
import { ScrollProvider } from "@/providers/ScrollContext";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ScrollProvider>
      <Header />
      {children}
      <Footer />
    </ScrollProvider>
  );
}
