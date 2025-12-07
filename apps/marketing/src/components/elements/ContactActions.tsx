import clsx from "clsx";
import {
  Phone,
  MessageSquare,
  Mail,
  Video,
  type LucideIcon,
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip/tooltip";

export type ContactMethod = "call" | "message" | "email" | "videoCall";

export interface IAction {
  type: ContactMethod;
  isAvailable: boolean;
  onAction?: () => void;
  label?: string;
}

export interface IContactActionsProps {
  actions: IAction[];
}

const iconMap: Record<ContactMethod, LucideIcon> = {
  call: Phone,
  message: MessageSquare,
  email: Mail,
  videoCall: Video,
};

const colorMap: Record<ContactMethod, string> = {
  call: "hover:text-green-600",
  message: "hover:text-blue-600",
  email: "hover:text-red-600",
  videoCall: "hover:text-purple-600",
};

export function ContactActions({
  actions,
  className,
}: IContactActionsProps & { className?: string }) {
  return (
    <TooltipProvider delayDuration={100}>
      <div className="flex items-center space-x-2">
        {actions.map((action) => {
          const Icon = iconMap[action.type];
          const hoverColorClass = colorMap[action.type];

          return (
            <Tooltip key={action.type}>
              <TooltipTrigger asChild>
                <button
                  onClick={action.onAction}
                  disabled={!action.isAvailable}
                  className={clsx(
                    `
                    p-3
                    rounded-full
                    text-gray-600
                    transition-colors
                    duration-150
                    ease-in-out
                    ${hoverColorClass}
                    hover:bg-gray-100
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-blue-500
                    cursor-pointer
                    disabled:opacity-40
                    disabled:cursor-not-allowed
                    disabled:hover:bg-transparent
                    disabled:hover:text-gray-600
                  `,
                    className
                  )}
                >
                  <Icon size={20} aria-hidden="true" />
                </button>
              </TooltipTrigger>
              <TooltipContent side="top" className="text-sm bg-dark-blue font-bold">
                {action.label}
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </TooltipProvider>
  );
}
