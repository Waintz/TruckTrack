import { POLICY_SECTIONS, POLICY_TITLE } from "@/constants/texts";

export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white p-8 md:p-16 rounded-2xl shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900 text-center">
          {POLICY_TITLE}
        </h1>

        <div className="space-y-8">
          {POLICY_SECTIONS.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
                {section.title}
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-base leading-relaxed">
                {section.content.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
