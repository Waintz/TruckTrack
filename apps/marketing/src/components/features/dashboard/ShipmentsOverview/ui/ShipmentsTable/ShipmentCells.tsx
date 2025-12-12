import { DelayBadge } from "@/components/elements/DelayBadge";
import { calculateDelay } from "@/utils/calculateDelay";
import { getTruckStatus } from "@/utils/getTruckStatus";
import { formatMinutesToHHMM } from "@/utils/formatMinutesToHHMM";
import { formatIsoToDateTime } from "@/utils/formatIsoToDateTime";
import { ITruckShipmentsAdditionalInformation } from "@/types/truck";
import { ShipmentCell } from "./ShipmentCell";

interface ArrivalTableCellsProps {
  row: ITruckShipmentsAdditionalInformation;
}

export function ShipmentCells({ row }: ArrivalTableCellsProps) {
  const delay = calculateDelay(row.arriveDate);
  const truckStatus = getTruckStatus(
    row.departureDate,
    row.arriveDate,
    row.hasTruckArrived
  );
  const formattedDelay =
    delay !== null ? formatMinutesToHHMM({ time: delay.delayMinutes }) : "-";

  return (
    <>
      <ShipmentCell>
        {row.departureLocation} - {row.arriveLocation}
      </ShipmentCell>
      <ShipmentCell>{row.shipmentNumber}</ShipmentCell>
      <ShipmentCell>{row.truckId}</ShipmentCell>
      <ShipmentCell>{row.totalWeight}</ShipmentCell>
      <ShipmentCell>
        <DelayBadge delay={delay?.delayMinutes || 0} text={`${truckStatus}`} />
      </ShipmentCell>
      <ShipmentCell>
        {formatIsoToDateTime({
          time: row.departureDate,
          options: { day: true, hours: true, minutes: true, month: true },
        })}
      </ShipmentCell>
      <ShipmentCell>
        {formatIsoToDateTime({
          time: row.arriveDate,
          options: { day: true, hours: true, minutes: true, month: true },
        })}
      </ShipmentCell>
      <ShipmentCell>{formattedDelay}</ShipmentCell>
    </>
  );
}
