import { getStrokeColor } from "@/utils/getStrokeColor";

type TruckDetailsCardHeader = {
  loadPercentage: number;
  date: React.ReactNode;
  title: React.ReactNode;
};

export function TruckDetailsCardHeader({
  date,
  loadPercentage,
  title,
}: TruckDetailsCardHeader) {
  const strokeColor = getStrokeColor({
    percent: loadPercentage,
    fillingMode: "normal",
    mode: "normal",
  });

  return (
    <header className="flex justify-between items-center">
      <div className="xsm:flex items-center gap-5">
        <h1 className="font-bold text-lg">{title}</h1>
        <span className="opacity-50 text-sm">{date}</span>
      </div>
      <div>
        <span
          style={{
            color: strokeColor,
          }}
          className="font-bold"
        >
          {loadPercentage.toFixed(1)}%
        </span>
      </div>
    </header>
  );
}
