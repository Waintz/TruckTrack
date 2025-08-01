// components/ApprovalCard.tsx
interface IApprovalCardProps {
  title: string;
  percent: string;
  description: string;
}

export function ApprovalCard({ title, percent, description }: IApprovalCardProps) {
  return (
    <div className="min-w-[250px] border border-gray-300 rounded-lg p-6 shadow-sm bg-white flex-shrink-0">
      <h4 className="font-semibold text-lg mb-2">{title}</h4>
      <p className="text-2xl font-bold text-[#4A6CF7] mb-1">{percent}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
