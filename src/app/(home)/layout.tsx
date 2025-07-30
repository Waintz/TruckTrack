import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header/header";



export const metadata: Metadata = {
  title: "Truck Track",
  description: "Track your truck's journey",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`font-sans antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
