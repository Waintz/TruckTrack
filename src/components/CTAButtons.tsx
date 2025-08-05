import { ConnectButton } from "./ConnectButton";
import { RequestCallButton } from "./RequestCallButton";

export function CTAButtons() {
  return (
    <div className="max-w-3xl flex flex-col gap-6 mt-5">
      <ConnectButton/>
      <RequestCallButton className="h-14" />
    </div>
  );
}
