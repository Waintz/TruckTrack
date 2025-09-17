import { ModalLayout } from "@/components/ui/layouts/ModalLayout";

interface Props {
  onClose: () => void;
  viewMode: "card" | null;
}

export function DelayedDeliveryModal({ onClose, viewMode }: Props) {
  return (
    <ModalLayout onClose={onClose}>
      {viewMode === "card" && <div>Card view coming soon...</div>}
    </ModalLayout>
  );
}
