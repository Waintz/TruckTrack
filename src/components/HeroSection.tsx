import clsx from "clsx";
import { CTAButtons } from "./CTAButtons";
import HighlightsList from "./HighlightsList";
import { PageHeader } from "./PageHeader";
import { TimeSaving } from "./TimeSaving";
import { ConnectButton } from "./ConnectButton";

export const HeroSection = ({ className }: { className?: string }) => (
  <section className={clsx("", className)}>
    <section>
      <PageHeader />
    </section>
    <section className="mt-4">
      <TimeSaving />
    </section>
    <section className="hidden lg:block">
      <ConnectButton className="mx-4" />
    </section>
    <section className="mt-10">
      <HighlightsList />
    </section>
    <section className="block lg:hidden mt-14">
      <CTAButtons />
    </section>
  </section>
);
