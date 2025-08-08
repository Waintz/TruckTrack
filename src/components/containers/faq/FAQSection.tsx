import { FAQ_QUESTIONS, FAQ_TITLE } from "@/constants/texts";
import { FAQAccordion } from "./ui/FAQAccordion";

export const FAQSection = ({
  frequentlyAskedQuestions = true,
  className,
}: {
  frequentlyAskedQuestions?: boolean;
  className?: string;
}) => {
  return (
    <section className={className}>
      {frequentlyAskedQuestions && (
        <section className="mt-10">
          <header>
            <h1 className="font-semibold text-[22px]">{FAQ_TITLE}</h1>
          </header>
        </section>
      )}
      <section className="mt-5">
        <FAQAccordion FAQ_QUESTIONS={FAQ_QUESTIONS} />
      </section>
    </section>
  );
};
