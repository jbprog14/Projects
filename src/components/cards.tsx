import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { provider } from "../data/games";

export default function Cards() {
  // State to track the starting index of visible cards
  const [startIndex, setStartIndex] = useState(0);

  // Number of cards to display at a time
  const visibleCount = 3;

  // Calculate the visible cards based on startIndex
  const visibleProviders = provider.slice(
    startIndex,
    startIndex + visibleCount
  );

  // Function to handle "Next" button click
  const handleNext = () => {
    // Ensure we don't go out of bounds
    if (startIndex + visibleCount < provider.length) {
      setStartIndex(startIndex + 1);
    }
  };

  // Function to handle "Previous" button click
  const handlePrev = () => {
    // Ensure we don't go below 0
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div>
      {/* Header with Title and Navigation Buttons */}
      <div className="flex justify-between items-center mt-10">
        <h1 className="text-xl text-gray-500 font-medium">Game Provider</h1>
        <div className="flex items-center">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            disabled={startIndex === 0} // Disable when at the start
            className={`w-10 h-10 text-gray-500 ${
              startIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:text-black"
            }`}
          >
            <IoIosArrowBack className="text-2xl" />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={startIndex + visibleCount >= provider.length} // Disable when at the end
            className={`w-10 h-10 text-gray-500 ${
              startIndex + visibleCount >= provider.length
                ? "opacity-50 cursor-not-allowed"
                : "hover:text-black"
            }`}
          >
            <IoIosArrowForward className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Carousel Cards */}
      <div className="w-full py-5 flex space-x-4 overflow-hidden">
        {visibleProviders.map((providers) => (
          <div
            key={providers.id}
            className="bg-gray-400/50 text-center rounded-lg w-1/3 flex-shrink-0"
          >
            <div>
              <img
                src={providers.logo}
                alt={providers.provider}
                className="mx-auto h-18"
              />
            </div>
            <div className="bg-gray-100/30 p-2">
              <h1 className="text-gray-500 text-xl font-medium">
                {providers.provider}
              </h1>
              <h2 className="text-gray-400 font-medium">
                {providers.totalGames} juegos
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
