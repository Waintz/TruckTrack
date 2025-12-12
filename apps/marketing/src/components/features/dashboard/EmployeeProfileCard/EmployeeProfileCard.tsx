import { ContactActions } from "@/components/elements/ContactActions";
import Image from "next/image";

export function EmployeeProfileCard({
  name,
  uid,
  avatar
}: {
  name: string;
  uid: string;
  avatar: string
}) {
  return (
    <article className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">
      <article className="flex flex-col md:flex-row items-center gap-2 md:gap-5">
        <section className="rounded-full w-34 h-34 overflow-hidden border-2 ">
          <Image
            src={avatar}
            alt="Driver Avatar"
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />
        </section>
        <section className="text-center">
          <h2 className="font-bold text-2xl text-center">{name}</h2>
          <p className="opacity-60">Personal ID: {uid}</p>
        </section>
      </article>
      <ContactActions
        actions={[
          {
            type: "call",
            isAvailable: true,
            label: "Позвонить водителю",
          },
          {
            type: "message",
            isAvailable: true,
            label: "Написать сообщение",
          },
          {
            type: "email",
            isAvailable: false,
            label: "Email (недоступно)",
          },
        ]}
      />
    </article>
  );
}
