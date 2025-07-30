import { CTAButtons } from "./CTAButtons";
import HighlightsList from "./HighlightsList";
import { PageHeader } from "./PageHeader";
import { TimeSaving } from "./TimeSaving";

export const HeroSection = () => (
  <section>
    <section>
      <PageHeader />
    </section>
    <section className="mt-4">
      <TimeSaving />
    </section>
    <section className="mt-4">
      <HighlightsList />
    </section>
    <section className="flex flex-col mt-14 gap-2">
      <CTAButtons />
    </section>
  </section>
);
