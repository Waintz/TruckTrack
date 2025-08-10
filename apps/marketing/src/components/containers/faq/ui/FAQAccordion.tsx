import { FaqQuestions } from "@/constants/texts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../accordion/accordion";

interface Props {
  FAQ_QUESTIONS: FaqQuestions[];
}

export function FAQAccordion({ FAQ_QUESTIONS }: Props) {
  return (
    <Accordion type="single" collapsible>
      {FAQ_QUESTIONS.map((item, index) => {
        return (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger className="font-semibold text-[15px]">
              {item.question}
            </AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
