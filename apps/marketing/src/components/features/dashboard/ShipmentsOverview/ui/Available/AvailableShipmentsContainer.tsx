import { AvailableShipmentsView } from "./AvailableShipmentsView";

export function AvailableShipmentsContainer({
  className,
}: {
  className?: string;
}) {
  return (
    <>
      <AvailableShipmentsView className={className} />
    </>
  );
}
