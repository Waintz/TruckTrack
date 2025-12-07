"use client";

import { Surface } from "@/components/shared/Surface";
import clsx from "clsx";
import { AvailablePackagesHeader } from "./ui/AvailablePackagesHeader";
import { AvailablePackagesTable } from "./ui/packages/table/AvailablePackagesTable";
import { AvailablePackagesCards } from "./ui/packages/card/AvailablePackagesCards";
import { IParcel } from "@/types/truck";
import { DownloadTruckButton } from "../DownloadTruckButton";
import { useAppSelector } from "@/store/redux/redux";
import { selectSelectedPackages } from "./model";

interface Props {
  className?: string;
}

export function AvailablePackagesView({ className }: Props) {
  const selectedPackages = useAppSelector(selectSelectedPackages);

  const packages: IParcel[] = [
    {
      id: 1,
      parcelNumber: "CN12382138",
      valueWeight: 10,
      admissionDate: new Date().toISOString(),
    },
    {
      id: 2,
      parcelNumber: "CN48219374",
      valueWeight: 5,
      admissionDate: new Date().toISOString(),
    },
    {
      id: 3,
      parcelNumber: "CN91237461",
      valueWeight: 8,
      admissionDate: new Date().toISOString(),
    },
    {
      id: 4,
      parcelNumber: "CN23874655",
      valueWeight: 12,
      admissionDate: new Date().toISOString(),
    },
    {
      id: 5,
      parcelNumber: "CN98237412",
      valueWeight: 3,
      admissionDate: new Date().toISOString(),
    },
    {
      id: 6,
      parcelNumber: "CN18273645",
      valueWeight: 15,
      admissionDate: new Date().toISOString(),
    },
    {
      id: 7,
      parcelNumber: "CN37482910",
      valueWeight: 7,
      admissionDate: new Date().toISOString(),
    },
    {
      id: 8,
      parcelNumber: "CN74839201",
      valueWeight: 9,
      admissionDate: new Date().toISOString(),
    },
    {
      id: 9,
      parcelNumber: "CN26384910",
      valueWeight: 11,
      admissionDate: new Date().toISOString(),
    },
    {
      id: 10,
      parcelNumber: "CN48392018",
      valueWeight: 4,
      admissionDate: new Date().toISOString(),
    },
    {
      id: 11,
      parcelNumber: "CN39281746",
      valueWeight: 6,
      admissionDate: new Date().toISOString(),
    },
    {
      id: 12,
      parcelNumber: "CN83749201",
      valueWeight: 2,
      admissionDate: new Date().toISOString(),
    },
    {
      id: 13,
      parcelNumber: "CN23947183",
      valueWeight: 14,
      admissionDate: new Date().toISOString(),
    },
    {
      id: 14,
      parcelNumber: "CN93847210",
      valueWeight: 9,
      admissionDate: new Date().toISOString(),
    },
    {
      id: 15,
      parcelNumber: "CN12837465",
      valueWeight: 8,
      admissionDate: new Date().toISOString(),
    },
    {
      id: 16,
      parcelNumber: "CN58392047",
      valueWeight: 5,
      admissionDate: new Date().toISOString(),
    },
    {
      id: 17,
      parcelNumber: "CN18392017",
      valueWeight: 13,
      admissionDate: new Date().toISOString(),
    },
    {
      id: 18,
      parcelNumber: "CN73920183",
      valueWeight: 10,
      admissionDate: new Date().toISOString(),
    },
    {
      id: 19,
      parcelNumber: "CN49381723",
      valueWeight: 6,
      admissionDate: new Date().toISOString(),
    },
    {
      id: 20,
      parcelNumber: "CN28493017",
      valueWeight: 7,
      admissionDate: new Date().toISOString(),
    },
    {
      id: 21,
      parcelNumber: "CN98374210",
      valueWeight: 11,
      admissionDate: new Date().toISOString(),
    },
    {
      id: 22,
      parcelNumber: "CN18204736",
      valueWeight: 4,
      admissionDate: new Date().toISOString(),
    },
    {
      id: 23,
      parcelNumber: "CN38291074",
      valueWeight: 2,
      admissionDate: new Date().toISOString(),
    },
    {
      id: 24,
      parcelNumber: "CN73928410",
      valueWeight: 9,
      admissionDate: new Date().toISOString(),
    },
    {
      id: 25,
      parcelNumber: "CN49302817",
      valueWeight: 15,
      admissionDate: new Date().toISOString(),
    },
    {
      id: 26,
      parcelNumber: "CN27384910",
      valueWeight: 3,
      admissionDate: new Date().toISOString(),
    },
    {
      id: 27,
      parcelNumber: "CN38492017",
      valueWeight: 5,
      admissionDate: new Date().toISOString(),
    },
    {
      id: 28,
      parcelNumber: "CN18293047",
      valueWeight: 12,
      admissionDate: new Date().toISOString(),
    },
    {
      id: 29,
      parcelNumber: "CN98471230",
      valueWeight: 6,
      admissionDate: new Date().toISOString(),
    },
    {
      id: 30,
      parcelNumber: "CN38492011",
      valueWeight: 8,
      admissionDate: new Date().toISOString(),
    },
    {
      id: 31,
      parcelNumber: "CN58203910",
      valueWeight: 10,
      admissionDate: new Date().toISOString(),
    },
  ];

  return (
    <Surface
      className={clsx(
        "w-full flex flex-col py-7 px-6 sm:p-10 gap-8",
        className
      )}
    >
      <AvailablePackagesHeader />
      <div>
        <AvailablePackagesTable
          packages={packages}
          className="hidden sm:grid"
        />
        <AvailablePackagesCards
          className="inline sm:hidden"
          packages={packages}
        />
      </div>
      <DownloadTruckButton
        className="fixed bottom-10 right-10 md:hidden"
        isActive={selectedPackages.length > 0}
      />
    </Surface>
  );
}
