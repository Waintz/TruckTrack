import { NAVIGATION_DASHBOARD } from "@/config/pages.config";
import { SidebarFooter } from "./ui/SidebarFooter";
import { SidebarHeader } from "./ui/SidebarHeader";
import { SidebarNav } from "./ui/SidebarNav";
import clsx from "clsx";
import { SidebarToggleButton } from "./ui/SidebarToggleButton";

interface DashboardSidebarViewProps {
  isOpen: boolean;
  className?: string;
  setIsOpen: () => void;
}

export function DashboardSidebarView({
  isOpen,
  setIsOpen,
  className,
}: DashboardSidebarViewProps) {
  return (
    <div className="relative">
      <aside
        className={clsx(
          "flex flex-col justify-between overflow-hidden transition-[width] duration-300 ease-in-out bg-white h-screen",
          className,
          isOpen ? "w-67" : "w-0",
          "sticky top-0 h-screen"
        )}
      >
        {isOpen && (
          <>
            <section>
              <SidebarHeader />
              <nav>
                <SidebarNav navigationDashboard={NAVIGATION_DASHBOARD} />
              </nav>
            </section>
            <SidebarFooter />
          </>
        )}
      </aside>

      <SidebarToggleButton
        className={className}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  );
}
