import { TruckLoadView } from "./TruckLoadView";

interface Props {
  className?: string;
}

export function TruckLoadContainer({ className }: Props) {
  return <TruckLoadView className={className} />;
}
