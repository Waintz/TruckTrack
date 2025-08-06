"use client";

import { Partners } from "@/constants/partners";
import { useState } from "react";

const PARTNERS_PER_PAGE = 6;

export default function usePartnersController(partners: Partners[]) {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const totalPages = Math.ceil(partners.length / PARTNERS_PER_PAGE);

  const handleLeft = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const handleRight = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const partnerChunks = Array.from({ length: totalPages }, (_, i) =>
    partners.slice(i * PARTNERS_PER_PAGE, (i + 1) * PARTNERS_PER_PAGE)
  );

  const stateLeftArrow = currentPage > 0;
  const stateRightArrow = currentPage < totalPages - 1;

  return {
    currentPage,
    handleLeft,
    handleRight,
    partnerChunks,
    stateLeftArrow,
    stateRightArrow,
  };
}
