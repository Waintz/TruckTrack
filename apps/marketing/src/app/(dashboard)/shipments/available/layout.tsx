import { SpotlightProvider } from "@/providers/SpotlightContext";

export default function TruckPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SpotlightProvider>{children}</SpotlightProvider>;
}
