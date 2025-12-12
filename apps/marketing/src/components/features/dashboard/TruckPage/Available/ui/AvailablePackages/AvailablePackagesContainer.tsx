import { AvailablePackagesView } from "./AvailablePackagesView";

interface Props {
  className?: string;
}

export function AvailablePackagesContainer({ className }: Props) {
  return <AvailablePackagesView className={className} />;
}
