import { Carousel, IconButton } from "@material-tailwind/react";
import React, { useEffect, useRef } from "react";
import albumData from "../assets/data/album.json";

export function AlbumPreview({ previewIndex, onClose }) {
  // Create refs for the next and previous button handlers
  const handleNextRef = useRef();
  const handlePrevRef = useRef();
  const setIndexRef = useRef();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        // Call the next button handler
        handleNextRef.current && handleNextRef.current();
      } else if (event.key === "ArrowLeft") {
        // Call the previous button handler
        handlePrevRef.current && handlePrevRef.current();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    setIndexRef.current && setIndexRef.current(previewIndex);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="fixed  left-0 top-0 z-20 h-full w-full bg-black">
      <div
        className="fixed right-2 top-2 z-50 cursor-pointer rounded-3xl text-gray-50 hover:bg-gray-50 hover:bg-opacity-20 "
        onClick={onClose}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-12 w-12 "
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </div>
      <Carousel
        className="fixed left-0 top-0 z-40"
        prevArrow={({ handlePrev }) => {
          // Store the handler in the ref
          handlePrevRef.current = handlePrev;

          return (
            <IconButton
              variant="text"
              color="red"
              size="lg"
              onClick={handlePrev}
              className="!absolute left-4 top-2/4 -translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </IconButton>
          );
        }}
        nextArrow={({ handleNext }) => {
          // Store the handler in the ref
          handleNextRef.current = handleNext;
          return (
            <IconButton
              variant="text"
              color="red"
              size="lg"
              onClick={handleNext}
              className="!absolute !right-4 top-2/4 -translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </IconButton>
          );
        }}
        navigation={({ setActiveIndex, activeIndex, length }) => {
          setIndexRef.current = setActiveIndex;

          return (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          );
        }}
      >
        {albumData.images.map((image, index) => (
          <img
            src={image}
            alt={"image " + index}
            className="h-full w-full object-contain"
          />
        ))}
      </Carousel>
    </div>
  );
}
