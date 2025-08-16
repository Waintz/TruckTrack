import Image from "next/image";

interface Props {
  name?: string;
  quantity?: string;
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
}

export function MetricCard({ alt, height = 30, src, width = 30, name, quantity }: Props) {
  return (
    <div className="bg-white px-6 py-4 flex items-center justify-between rounded shadow-sm w-full">
      <div className="flex flex-col gap-1">
        <p className="opacity-50 text-sm sm:text-base">{name}</p>
        <p className="text-xl sm:text-2xl font-bold">{quantity}</p>
      </div>
      <div className="bg-[#f9f9fc] p-3 rounded-full flex items-center justify-center">
        <Image src={src} alt={alt} width={width} height={height} />
      </div>
    </div>
  );
}
