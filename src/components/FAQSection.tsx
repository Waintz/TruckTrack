import { FAQ_QUESTIONS, FAQ_TITLE } from "@/constants/texts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

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
            <h1 className="font-bold text-[22px]">{FAQ_TITLE}</h1>
          </header>
        </section>
      )}
      <section className="mt-2">
        <Accordion type="single" collapsible>
          {FAQ_QUESTIONS.map((item, index) => {
            return (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </section>
    </section>
  );
};
