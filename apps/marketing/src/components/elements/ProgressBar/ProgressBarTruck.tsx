import { getStrokeColor } from "@/utils/getStrokeColor";
import Image from "next/image";

export const ProgressBarTruck = ({
  dailyProgress = 100,
  width = 200,
  height = 100,
}) => {
  const strokeColor = getStrokeColor({
    percent: dailyProgress,
    fillingMode: "normal",
    mode: "normal",
  });

  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const strokeColorTransparent = hexToRgba(strokeColor, 0.9);

  return (
    <div className="relative inline-block max-w-full">
      <Image
        src="/truck/Truck.png"
        width={width}
        height={height}
        alt="truck"
        style={{ height: "auto", width: "100%", opacity: "0.5" }}
      />

      <div
        className="absolute top-[1%] bg-ghost-white border-2 left-[30.8%]"
        style={{ width: "68.5%", height: "69.2%", opacity: 0.8 }}
      >
        <div
          style={{
            width: `${dailyProgress}%`,
            height: "100%",
            transition: "all 0.3s ease-in-out",
            background: `repeating-linear-gradient(
          135deg,
          ${strokeColor},
          ${strokeColor} 20px,
          ${strokeColorTransparent} 20px,
          ${strokeColorTransparent} 50px
        )`,
          }}
        ></div>
      </div>
    </div>
  );
};
