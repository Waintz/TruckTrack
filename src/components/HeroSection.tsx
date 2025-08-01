import clsx from "clsx";
import { CTAButtons } from "./CTAButtons";
import HighlightsList from "./HighlightsList";
import { PageHeader } from "./PageHeader";
import { TimeSaving } from "./TimeSaving";
import { ConnectButton } from "./ConnectButton";
import { HeroIllustration } from "./HeroIllustration";

export const HeroSection = ({ className }: { className?: string }) => (
  <section className="lg:flex lg:items-center justify-around">
    <section className={clsx("", className)}>
      <div className="flex items-center">
        <div className="">
          <section>
            <PageHeader />
          </section>
          <section className="mt-4">
            <TimeSaving />
          </section>
          <section className="hidden lg:block">
            <ConnectButton />
          </section>
          <section className="mt-10">
            <HighlightsList />
          </section>
        </div>
        <figure className="hidden md:block lg:hidden">
          <HeroIllustration />
        </figure>
      </div>
      <section className="block lg:hidden mt-14">
        <CTAButtons />
      </section>
    </section>
    <figure className="hidden lg:block">
      <HeroIllustration />
    </figure>
  </section>
);
