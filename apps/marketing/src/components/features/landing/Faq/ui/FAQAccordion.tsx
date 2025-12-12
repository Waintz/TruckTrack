import { FaqQuestions } from "@/constants/texts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../shared/accordion/accordion";

interface Props {
  FAQ_QUESTIONS: FaqQuestions[];
}
export function FAQAccordion({ FAQ_QUESTIONS }: Props) {
  return (
    <Accordion data-slot="accordion" type="single" collapsible={true}>
      {FAQ_QUESTIONS.map((item, index) => (
        <AccordionItem
          className="w-full"
          data-slot="accordion-item"
          value={`item-${index}`}
          key={index}
        >
          <AccordionTrigger
            data-slot="accordion-trigger"
            className="group w-full focus-visible:border-ring focus-visible:ring-ring/50 flex justify-between gap-4 rounded-md py-4 text-left text-sm transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>div]:rotate-135 font-semibold text-[15px]"
          >
            {item.question}
          </AccordionTrigger>
          <AccordionContent
            data-slot="accordion-content"
            className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
          >
            <div className="pt-0 pb-4">
              {item.answer}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
