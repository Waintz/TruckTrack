import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ReduxProvider } from "./providers";

export const metadata: Metadata = {
  title: {
    template: "%s - TruckTrack",
    default: "TruckTrack",
  },
  description: "Track your truck's journey",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="font-sans antialiased custom-scroll">
        <ReduxProvider>{children}</ReduxProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
