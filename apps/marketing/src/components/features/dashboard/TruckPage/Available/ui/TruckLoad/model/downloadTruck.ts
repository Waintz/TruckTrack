interface IDownloadTruck {
  position: "upper" | "middle" | "lower";
  slot: number;
  packageIds: number[];
}

export const downloadTruck = ({
  packageIds,
  position,
  slot,
}: IDownloadTruck) => {};
