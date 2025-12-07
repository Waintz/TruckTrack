import Image from "next/image";
import clsx from "clsx";
import { ClientsInformation } from "../DashboardClientsView";

export function ClientsCard({
  view,
  businessEntityType,
  name,
  surname,
  numberOfOrders,
  avatarUrl,
}: ClientsInformation & { view: "grid" | "list" }) {
  return (
    <div
      className={clsx(
        "relative bg-white border border-gray-100 rounded-2xl shadow-sm transition-all duration-200",
        "hover:shadow-lg hover:-translate-y-0.5",
        view === "list"
          ? "flex items-center justify-between p-4 hover:bg-gray-50"
          : "flex flex-col items-center p-6 text-center"
      )}
    >
      <div
        className={clsx(
          view === "list"
            ? "flex items-center gap-4 flex-1"
            : "flex flex-col items-center gap-3"
        )}
      >
        <div className="relative h-12 w-12 rounded-full overflow-hidden ring-2 ring-gray-100">
          <Image
            src={avatarUrl}
            alt={`${name} ${surname}`}
            fill
            className="object-cover"
          />
        </div>

        <div
          className={clsx(
            "flex flex-col",
            view === "grid" && "items-center justify-center text-center"
          )}
        >
          <h3 className="text-gray-900 font-semibold leading-tight">
            {name} {surname}
          </h3>
          <span className="text-sm text-gray-500">{businessEntityType}</span>
        </div>
      </div>

      {view === "list" ? (
        <div className="ml-4 flex-shrink-0 flex items-center">
          <span
            className={clsx(
              "inline-flex items-center justify-center rounded-full px-3 py-1 text-sm font-medium",
              numberOfOrders > 15
                ? "bg-green-100 text-green-700"
                : numberOfOrders > 7
                ? "bg-blue-100 text-blue-700"
                : "bg-gray-100 text-gray-600"
            )}
          >
            {numberOfOrders} заказ{numberOfOrders === 1 ? "" : "ов"}
          </span>
        </div>
      ) : (
        <div className="mt-3 text-center">
          <span
            className={clsx(
              "inline-flex items-center justify-center rounded-full px-3 py-1 text-sm font-medium",
              numberOfOrders > 15
                ? "bg-green-100 text-green-700"
                : numberOfOrders > 7
                ? "bg-blue-100 text-blue-700"
                : "bg-gray-100 text-gray-600"
            )}
          >
            {numberOfOrders} заказ{numberOfOrders === 1 ? "" : "ов"}
          </span>
        </div>
      )}

      <div className="absolute inset-0 rounded-2xl ring-0 hover:ring-2 hover:ring-blue-200 transition-all duration-200 pointer-events-none"></div>
    </div>
  );
}
