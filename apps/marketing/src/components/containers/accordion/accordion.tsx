"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { cn } from "@/components/lib/utils"

// ===== Accordion =====
const Accordion = React.forwardRef<
  HTMLDivElement,
  (AccordionPrimitive.AccordionSingleProps | AccordionPrimitive.AccordionMultipleProps) & {
    children?: React.ReactNode
    className?: string
  }
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Root ref={ref} className={cn("w-full", className)} {...props}>
    {children}
  </AccordionPrimitive.Root>
))
Accordion.displayName = "Accordion"

// ===== AccordionItem =====
const AccordionItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof AccordionPrimitive.Item> & { children?: React.ReactNode; className?: string }
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("border-b last:border-b-0", className)} {...props}>
    {children}
  </AccordionPrimitive.Item>
))
AccordionItem.displayName = "AccordionItem"

// ===== AccordionTrigger =====
const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof AccordionPrimitive.Trigger> & { children?: React.ReactNode }
>(({ children, ...props }, ref) => (
  <AccordionPrimitive.Header>
    <AccordionPrimitive.Trigger ref={ref} {...props}>
      {children}
      <div className="bg-blue border-1 border-blue group-data-[state=open]:bg-white w-5 h-5 rounded-full relative pointer-events-none translate-y-0.5 transition-transform duration-200">
        <div className="absolute top-[4px] left-[8px] w-[2px] h-[10px] bg-white group-data-[state=open]:bg-blue"></div>
        <div className="absolute top-[4px] left-[8px] w-[2px] h-[10px] bg-white rotate-90 group-data-[state=open]:bg-blue"></div>
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = "AccordionTrigger"

// ===== AccordionContent =====
const AccordionContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof AccordionPrimitive.Content> & { children?: React.ReactNode }
>(({ children, ...props }, ref) => (
  <AccordionPrimitive.Content ref={ref} {...props}>
    {children}
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
