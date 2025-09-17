import { DashboardSidebarContainer } from "@/components/containers/DashboardSidebar/DashboardSidebarContainer";
import { HeaderDashboard } from "@/components/containers/HeaderDashboard/HeaderDashboard";
import clsx from "clsx";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-ghost-white text-dark-blue min-h-screen flex flex-col ">
      <HeaderDashboard className="block 2xl:hidden" />
      <div className="flex flex-1">
        <DashboardSidebarContainer
          className={clsx("hidden 2xl:flex")}
        />
        <section className="flex-1">{children}</section>
      </div>
    </main>
  );
}
