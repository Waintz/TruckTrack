import { ITestimonial } from "@/constants/texts";

interface Props {
  TESTIMONIALS: ITestimonial[];
}

export function TestimonialsList({ TESTIMONIALS }: Props) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {TESTIMONIALS.map(({ name, company, text }, idx) => (
        <article
          key={idx}
          className="border border-gray-300 rounded-lg p-6 shadow-sm bg-white flex flex-col"
        >
          <p className="text-gray-700 mb-6 flex-grow leading-relaxed">{text}</p>
          <footer className="mt-auto">
            <p className="font-semibold text-[#4A6CF7]">{name}</p>
            <p className="text-gray-500 text-sm">{company}</p>
          </footer>
        </article>
      ))}
    </div>
  );
}
