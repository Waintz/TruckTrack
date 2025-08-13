'use client';

import { USER_AGREEMENT, USER_AGREEMENT_TITLE } from "@/constants/texts";
import React from "react";

export function UserAgreement() {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-10 text-gray-900">
        <h1 className="text-3xl font-bold text-center mb-10">
          {USER_AGREEMENT_TITLE}
        </h1>

        {USER_AGREEMENT.map((section, idx) => (
          <div key={idx} className="mb-8">
            <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
            {section.content.map((paragraph, i) => (
              <p key={i} className="mb-2 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
