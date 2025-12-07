import { Lock } from "lucide-react";

export default function Page() {
  return (
    <div className="flex items-center mx-auto w-full h-full text-center flex-col justify-center gap-4 text-gray-500">
      <Lock size={90} />
      <p className="text-2xl">Эта страница временно недоступна.</p>
    </div>
  );
}
