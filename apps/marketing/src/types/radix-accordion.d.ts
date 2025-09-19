import "react";
import * as Accordion from "@radix-ui/react-accordion";

declare module "@radix-ui/react-accordion" {
  interface AccordionSingleProps {
    children?: React.ReactNode;
    className?: string;
  }

  interface AccordionMultipleProps {
    children?: React.ReactNode;
    className?: string;
  }

  interface AccordionItemProps {
    children?: React.ReactNode;
    className?: string;
  }

  interface AccordionTriggerProps {
    children?: React.ReactNode;
    className?: string;
  }

  interface AccordionContentProps {
    children?: React.ReactNode;
    className?: string;
  }
}
