interface IStatTileProps {
  Icon: React.ReactNode;
  title: string;
  subtitle: React.ReactNode;
}

export function StatTile({ Icon, subtitle, title }: IStatTileProps) {
  return (
    <div className="p-4 bg-gray-50 rounded-xl flex flex-col">
      <div className="flex items-center space-x-2 text-gray-700">
        {Icon}
        <span className="font-medium overflow-hidden overflow-ellipsis whitespace-nowrap flex-1">
          {title}
        </span>
      </div>
      <p className="text-xs text-gray-500 overflow-hidden overflow-ellipsis whitespace-nowrap">
        {subtitle}
      </p>
    </div>
  );
}
