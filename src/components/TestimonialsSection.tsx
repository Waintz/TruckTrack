import clsx from "clsx";

interface Testimonial {
  name: string;
  company: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Александр Романов",
    company: "ООО «ГрузТранс»",
    text: "TruckTrack полностью изменил наш подход к логистике. Теперь мы видим все перемещения фур в реальном времени, и это значительно снизило количество звонков от клиентов.",
  },
  {
    name: "Мария Литвинова",
    company: "ИП «ЛитКарго»",
    text: "Очень удобно! Наши заказчики сами отслеживают доставку и загрузку — больше нет необходимости держать отдельного менеджера под отчёты.",
  },
  {
    name: "Игорь Савчук",
    company: "ТК «ПрофЛогистика»",
    text: "Отличный инструмент. Особенно ценим прозрачность — теперь каждый этап доставки виден как нам, так и партнёрам. Надёжность на высоте.",
  },
  {
    name: "Екатерина Смирнова",
    company: "CargoFast",
    text: "После внедрения TruckTrack количество спорных ситуаций с клиентами упало почти до нуля. Все видят статусы, всё фиксируется. Рекомендуем!",
  },
];

export function TestimonialsSection({ className }: { className?: string }) {
  return (
    <section className={clsx("max-w-5xl mx-auto px-4 mt-20", className)}>
      <h2 className="text-3xl font-extrabold text-center mb-12">
        Отзывы наших клиентов
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        {testimonials.map(({ name, company, text }, idx) => (
          <article
            key={idx}
            className="border border-gray-300 rounded-lg p-6 shadow-sm bg-white flex flex-col"
          >
            <p className="text-gray-700 mb-6 flex-grow leading-relaxed">
              {text}
            </p>
            <footer className="mt-auto">
              <p className="font-semibold text-[#4A6CF7]">{name}</p>
              <p className="text-gray-500 text-sm">{company}</p>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}
