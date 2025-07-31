import clsx from "clsx";
import Image from "next/image";

type TeamMember = {
  name: string;
  role: string;
  image: string; // Путь к изображению или импорт
};

const team: TeamMember[] = [
  {
    name: "Владислав З.",
    role: "Основатель / Frontend Developer",
    image: "/team/vlad.png",
  },
  {
    name: "Мария П.",
    role: "UI/UX Designer",
    image: "/team/maria.png",
  },
  {
    name: "Игорь К.",
    role: "Backend Developer",
    image: "/team/igor.png",
  },
  {
    name: "Алина С.",
    role: "Project Manager",
    image: "/team/alina.png",
  },
];

export function TeamSection({ className }: { className?: string }) {
  return (
    <section className={clsx("mt-20 px-4 max-w-6xl mx-auto", className)}>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Наша команда
      </h2>
      <ul className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
        {team.map((member, index) => (
          <li key={index} className="text-center">
            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-[#4A6CF7] mb-4">
              <Image
                src={member.image}
                alt={member.name}
                width={96}
                height={96}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="font-semibold text-lg">{member.name}</h3>
            <p className="text-sm text-gray-500">{member.role}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
