import { BranchesCard } from "../BranchesCard/BranchesCard";

export function BranchesGrid() {
  const branches = [
    {
      id: 1,
      name: "Kyiv Central Hub",
      city: "Kyiv, Ukraine",
      phone: "+380 67 555 22 11",
      status: "active",
      deliveries: 23,
      region: "Central",
      image: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1",
    },
    {
      id: 2,
      name: "Lviv Logistics Center",
      city: "Lviv, Ukraine",
      phone: "+380 67 888 33 44",
      status: "maintenance",
      deliveries: 7,
      region: "West",
      image: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba",
    },
    {
      id: 3,
      name: "Odesa Distribution",
      city: "Odesa, Ukraine",
      phone: "+380 67 123 45 67",
      status: "offline",
      deliveries: 0,
      region: "South",
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    },
  ];

  return (
    <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 p-5">
      {branches.map((branch) => (
        <BranchesCard key={branch.id} {...branch} />
      ))}
    </section>
  );
}
