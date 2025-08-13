export const dynamic = "force-static";


import PrivacyPolicy from "@/components/containers/privacyPolicy/PrivacyPolicy";
import { UserAgreement } from "@/components/containers/userAgreement/UserAgreement";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Truck Track",
  description: "Privacy Policy",
};

export default function Home() {
  return (
    <main className="container mx-auto p-4 mt-10">
      <PrivacyPolicy />
    </main>
  );
}
