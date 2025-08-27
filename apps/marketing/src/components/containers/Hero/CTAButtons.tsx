import { ConnectButton } from "../../elements/buttons/ConnectButton";
import { RequestCallButton } from "../../elements/buttons/RequestCallButton";

export function CTAButtons() {
  return (
    <div className="max-w-3xl flex flex-col gap-6 mt-5">
      <ConnectButton/>
      <RequestCallButton className="h-14" />
    </div>
  );
}
