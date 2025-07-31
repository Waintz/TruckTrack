import clsx from "clsx";

export function HowItWorksSection({ className }: { className?: string }) {
  const steps = [
    {
      number: "01",
      title: "Оставляете заявку",
      desc: "Заполните короткую форму — это займёт не больше минуты.",
    },
    {
      number: "02",
      title: "Мы проверяем данные",
      desc: "Менеджер свяжется с вами для уточнения деталей.",
    },
    {
      number: "03",
      title: "Создаём личный кабинет",
      desc: "Вы получите доступ к системе и сможете начать работу.",
    },
    {
      number: "04",
      title: "Контроль фур в реальном времени",
      desc: "Вся логистика и статусы заказов — у вас под рукой.",
    },
  ];

  return (
    <section className={clsx("mt-20 px-4 max-w-3xl mx-auto", className)}>
      <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
        Лёгкий процесс подключения к TruckTrack
      </h2>
      <ul className="flex flex-col gap-8">
        {steps.map((step) => (
          <li key={step.number} className="flex items-start gap-4">
            <div className="w-12 h-12 flex-shrink-0 rounded-full bg-[#4A6CF7] text-white font-semibold flex items-center justify-center">
              {step.number}
            </div>
            <div>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
