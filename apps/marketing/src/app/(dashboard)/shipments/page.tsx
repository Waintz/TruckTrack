import { redirect } from "next/navigation";
import { PAGES_CONFIG } from "@/config/pages.config";

export default function ShipmentsPage() {
  redirect(PAGES_CONFIG.SHIPMENTS.children.ARRIVAL.path);
}
