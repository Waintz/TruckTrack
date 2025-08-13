export const dynamic = "force-static";


import { UserAgreement } from "@/components/containers/userAgreement/UserAgreement";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Truck Track",
  description: "User Agreement",
};

export default function Home() {
  return (
    <main className="container mx-auto p-4 mt-10">
      <UserAgreement />
    </main>
  );
}
