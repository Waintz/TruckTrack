import clsx from "clsx";

export function ServiceIntro({ className }: { className?: string }) {
  return (
    <section className={clsx("mt-20 max-w-3xl px-4", className)}>
      <h1 className="font-extrabold text-4xl md:text-5xl relative inline-block mb-6">
        Truck
        <span className="text-[#4A6CF7] relative ml-2">
          Track
          <span className="absolute -bottom-1 left-0 w-full h-1 rounded bg-[#4A6CF7]"></span>
        </span>
      </h1>
      <h3 className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-3xl mb-12">
        Это возможность предложить вашим клиентам прозрачный контроль логистики
        — в реальном времени и без дополнительных затрат. Ваши партнёры и
        заказчики смогут отслеживать перемещение фур, статусы загрузки и
        доставки без переплат и с высокой надёжностью, ведь данные поступают
        напрямую с трекеров и подтверждаются участниками цепочки.
      </h3>

      <div className="flex gap-4 overflow-x-auto whitespace-nowrap pb-2 -mx-4 px-4">
        <div className="min-w-[250px] border border-gray-300 rounded-lg p-6 shadow-sm bg-white flex-shrink-0">
          <h4 className="font-semibold text-lg mb-2">Один партнёр</h4>
          <p className="text-2xl font-bold text-[#4A6CF7] mb-1">10–40%</p>
          <p className="text-gray-600">Процент одобрения заявок</p>
        </div>
        <div className="min-w-[250px] border border-gray-300 rounded-lg p-6 shadow-sm bg-white flex-shrink-0">
          <h4 className="font-semibold text-lg mb-2">Несколько партнёров</h4>
          <p className="text-2xl font-bold text-[#4A6CF7] mb-1">до 85%</p>
          <p className="text-gray-600">Процент одобрения возрастает</p>
        </div>
      </div>
    </section>
  );
}
