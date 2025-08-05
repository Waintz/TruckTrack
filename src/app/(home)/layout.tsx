import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { ScrollProvider } from "@/providers/ScrollContext";

export const metadata: Metadata = {
  title: "Truck Track",
  description: "Track your truck's journey",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <ScrollProvider>
          <Header />
          {children}
          <Footer />
          <SpeedInsights />
          <Analytics />
        </ScrollProvider>
      </body>
    </html>
  );
}
