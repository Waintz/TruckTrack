import { ArrivalTableCell } from "./ArrivalTableCell";
import { DelayBadge } from "@/components/elements/DelayBadge";
import { calculateDelay } from "@/utils/calculateDelay";
import { getTruckStatus } from "@/utils/getTruckStatus";
import { formatMinutesToHHMM } from "@/utils/formatMinutesToHHMM";
import { formatIsoToDateTime } from "@/utils/formatIsoToDateTime";
import { ITruckShipmentsAdditionalInformation } from "@/types/truck";

interface ArrivalTableCellsProps {
  row: ITruckShipmentsAdditionalInformation;
}

export function ArrivalTableCells({ row }: ArrivalTableCellsProps) {
  const delay = calculateDelay(row.arrive);
  const truckStatus = getTruckStatus(
    row.departure,
    row.arrive,
    row.hasTruckArrived
  );
  const formattedDelay =
    delay !== null ? formatMinutesToHHMM({ time: delay.delayMinutes }) : "-";

  return (
    <>
      <ArrivalTableCell>{row.destination}</ArrivalTableCell>
      <ArrivalTableCell>{row.shipmentNumber}</ArrivalTableCell>
      <ArrivalTableCell>{row.truckId}</ArrivalTableCell>
      <ArrivalTableCell>{row.totalWeight}</ArrivalTableCell>
      <ArrivalTableCell>
        <DelayBadge delay={delay?.delayMinutes || 0} text={`${truckStatus}`} />
      </ArrivalTableCell>
      <ArrivalTableCell>
        {formatIsoToDateTime({
          time: row.departure,
          options: { day: true, hours: true, minutes: true, month: true },
        })}
      </ArrivalTableCell>
      <ArrivalTableCell>
        {formatIsoToDateTime({
          time: row.arrive,
          options: { day: true, hours: true, minutes: true, month: true },
        })}
      </ArrivalTableCell>
      <ArrivalTableCell>{formattedDelay}</ArrivalTableCell>
    </>
  );
}
