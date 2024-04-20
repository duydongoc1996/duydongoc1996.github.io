import React from "react";

export default function BackToTop() {
  return (
    <a href="#home">
      <div class="fixed bottom-1 right-1 z-10 inline-flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-gray-50 text-red-500 shadow-lg hover:bg-red-600 hover:text-gray-50 focus:outline-none sm:h-16 sm:w-16">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m4.5 18.75 7.5-7.5 7.5 7.5"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m4.5 12.75 7.5-7.5 7.5 7.5"
          />
        </svg>
      </div>
    </a>
  );
}
