import { ApprovalCard } from "@/components/ui/cards/ApprovalCard";

export function ServiceIntroCards() {
  return (
    <div className="flex gap-4 overflow-x-auto whitespace-nowrap pb-2 -mx-4 px-4">
      <ApprovalCard
        title="Один партнёр"
        percent="10–40%"
        description="Процент одобрения заявок"
      />
      <ApprovalCard
        title="Несколько партнёров"
        percent="до 85%"
        description="Процент одобрения возрастает"
      />
    </div>
  );
}
