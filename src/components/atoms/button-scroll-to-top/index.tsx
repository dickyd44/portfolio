import { ChevronTopIcon } from "@/src/assets/icon/icon-main";
import React from "react";

interface ButtonScrollToTopProps {
  isVisible: boolean;
  scrollToTop: () => void;
}

export function ButtonScrollToTop({
  isVisible,
  scrollToTop,
}: ButtonScrollToTopProps) {
  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 lg:bottom-8 lg:right-8 p-2.5 bg-teal-600 text-white rounded-full shadow-lg hover:bg-teal-700 transition duration-300 z-[9999]"
        >
          <ChevronTopIcon />
        </button>
      )}
    </>
  );
}
