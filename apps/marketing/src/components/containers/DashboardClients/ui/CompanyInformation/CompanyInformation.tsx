import { Surface } from "@/components/shared/Surface";
import clsx from "clsx";
import type { ICompanyInformation } from "../../types/company";
import Image from "next/image";
import { StatTile } from "@/components/ui/StatTile";
import {
  ClipboardCheck,
  MapPin,
  Phone,
  Mail,
  Globe,
  Calendar,
  Hash,
  Activity,
} from "lucide-react";
import Link from "next/link";

interface Props {
  className?: string;
}

export function CompanyInformation({
  className,
  address,
  email,
  id,
  isActive,
  name,
  phone,
  description,
  foundedYear,
  logoUrl,
  taxId,
  website,
}: Props & ICompanyInformation) {
  return (
    <Surface
      as={"section"}
      className={clsx(className, "w-full sticky top-0 left-0")}
    >
      <header className="text-center flex flex-col items-center gap-3 p-6 border-b border-gray-200 bg-gray-50/50">
        <div className="relative">
          <Image
            src={logoUrl}
            alt={`${name} logo`}
            width={100}
            height={100}
            className="rounded-full border border-gray-100 shadow-sm object-cover"
          />
          <div
            className={clsx(
              "absolute bottom-0 right-0 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full border shadow-sm",
              isActive
                ? "bg-green-100 text-green-700 border-green-200"
                : "bg-red-100 text-red-700 border-red-200"
            )}
          >
            {isActive ? "Active" : "Inactive"}
          </div>
        </div>

        <div className="space-y-1">
          <h2 className="text-2xl font-semibold text-gray-900">{name}</h2>
          <p className="opacity-60 text-sm leading-relaxed max-w-[250px] mx-auto">
            {description}
          </p>
        </div>
      </header>

      <main className="py-5">
        <div className="flex flex-col gap-4 px-5">
          <StatTile
            Icon={<Hash className="w-4 h-4 text-gray-400" />}
            title="System ID"
            subtitle={<span className="font-mono text-xs">{id}</span>}
          />

          <div className="h-px bg-gray-100 my-1" />
          <StatTile
            Icon={<Phone className="w-4 h-4 text-green-500" />}
            title="Phone"
            subtitle={
              <a
                href={`tel:${phone}`}
                className="hover:text-green-600 transition-colors"
              >
                {phone}
              </a>
            }
          />

          {email && (
            <StatTile
              Icon={<Mail className="w-4 h-4 text-orange-400" />}
              title="Email"
              subtitle={
                <a
                  href={`mailto:${email}`}
                  className="hover:text-orange-600 transition-colors break-all"
                >
                  {email}
                </a>
              }
            />
          )}

          {website && (
            <StatTile
              Icon={<Globe className="w-4 h-4 text-blue-500" />}
              title="Website"
              subtitle={
                <Link
                  href={
                    website.startsWith("http") ? website : `https://${website}`
                  }
                  target="_blank"
                  className="text-blue-600 hover:underline truncate block max-w-[200px]"
                >
                  {website}
                </Link>
              }
            />
          )}

          <div className="h-px bg-gray-100 my-1" />

          <StatTile
            Icon={<MapPin className="w-4 h-4 text-red-500" />}
            title="Address"
            subtitle={address}
          />

          <StatTile
            Icon={<ClipboardCheck className="w-4 h-4 text-purple-500" />}
            title="INN (Tax ID)"
            subtitle={taxId}
          />

          {foundedYear && (
            <StatTile
              Icon={<Calendar className="w-4 h-4 text-teal-500" />}
              title="Founded"
              subtitle={foundedYear.toString()}
            />
          )}
        </div>
      </main>
    </Surface>
  );
}
