"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { cn } from "@/components/lib/utils"

// ---------- Root ----------
type AccordionProps =
  | (React.ComponentProps<typeof AccordionPrimitive.Root> & { type: "single" })
  | (React.ComponentProps<typeof AccordionPrimitive.Root> & { type: "multiple" })

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>((props, ref) => {
  return <AccordionPrimitive.Root ref={ref} data-slot="accordion" {...props} />
})
Accordion.displayName = "Accordion"

// ---------- Item ----------
type AccordionItemProps = React.ComponentProps<typeof AccordionPrimitive.Item> & {
  className?: string
}

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, ...props }, ref) => (
    <AccordionPrimitive.Item
      ref={ref}
      data-slot="accordion-item"
      className={cn("border-b last:border-b-0", className)}
      {...props}
    />
  )
)
AccordionItem.displayName = "AccordionItem"

// ---------- Trigger ----------
type AccordionTriggerProps = React.ComponentProps<typeof AccordionPrimitive.Trigger> & {
  className?: string
  children?: React.ReactNode
}

const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        data-slot="accordion-trigger"
        className={cn(
          "group focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>div]:rotate-135",
          className
        )}
        {...props}
      >
        {children}
        <div className="bg-blue border-1 border-blue group-data-[state=open]:bg-white w-5 h-5 rounded-[50%] relative pointer-events-none translate-y-0.5 transition-transform duration-200">
          <div className="absolute top-[4px] left-[8px] w-[2px] h-[10px] bg-white group-data-[state=open]:bg-blue"></div>
          <div className="absolute top-[4px] left-[8px] w-[2px] h-[10px] bg-white rotate-90 group-data-[state=open]:bg-blue"></div>
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
)
AccordionTrigger.displayName = "AccordionTrigger"

// ---------- Content ----------
type AccordionContentProps = React.ComponentProps<typeof AccordionPrimitive.Content> & {
  className?: string
  children?: React.ReactNode
}

const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
      ref={ref}
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
)
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
