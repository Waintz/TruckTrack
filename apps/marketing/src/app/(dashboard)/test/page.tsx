import { ICompanyInformation } from "@/components/features/dashboard/DashboardClients/types/company";
import { CompanyInformation } from "@/components/features/dashboard/DashboardClients/ui/CompanyInformation/CompanyInformation";

const company: ICompanyInformation = {
  id: "cmp_001",
  name: "ООО Альтаир Групп",
  description:
    "Компания, занимающаяся поставками промышленного оборудования и сервисным обслуживанием.",
  website: "https://altair-group.example.com",
  address: "г. Киев, ул. Промышленная, 12",
  phone: "+38 (044) 123-45-67",
  email: "info@altair-group.example.com",
  logoUrl: "http://192.168.240.1:3000/test/logo-clients.png",
  taxId: "1234567890",
  foundedYear: 2014,
  isActive: true,
};

export default function Page() {
  return <CompanyInformation {...company} />;
}
