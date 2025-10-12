import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

interface Props {
  homeText: React.ReactNode;
  popupText: React.ReactNode;
}

export function TooltipHelper({ homeText, popupText }: Props) {
  return (
    <TooltipProvider delayDuration={0} skipDelayDuration={0}>
      <Tooltip >
        <TooltipTrigger>{homeText}</TooltipTrigger>
        <TooltipContent>{popupText}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
