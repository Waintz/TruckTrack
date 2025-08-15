import { HeaderDashboard } from "@/components/containers/HeaderDashboard/HeaderDashboard";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-[#f9f9fc]">
      <HeaderDashboard />
      {children}
    </main>
  );
}
