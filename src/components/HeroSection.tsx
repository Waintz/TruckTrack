import clsx from "clsx";
import { CTAButtons } from "./CTAButtons";
import HighlightsList from "./HighlightsList";
import { PageHeader } from "./PageHeader";
import { TimeSaving } from "./TimeSaving";
import { ConnectButton } from "./ConnectButton";
import { HeroIllustration } from "./HeroIllustration";
import { SocialIcons } from "./SocialIcons";

export const HeroSection = ({ className }: { className?: string }) => {
  return (
    <section className="lg:flex lg:items-center justify-around xl:px-10">
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
      {/* поправить семантику */}
      <div className="flex items-center gap-2">
        <figure className="hidden lg:block">
          <HeroIllustration className="w-140" />
        </figure>
        <SocialIcons
          width={20}
          height={20}
          className="xl:flex hidden flex-col gap-2"
        />
      </div>
    </section>
  );
};
