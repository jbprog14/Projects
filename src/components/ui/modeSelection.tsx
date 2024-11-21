// Import the BiSearchAlt icon from the react-icons library
"use client";

import { BiSearchAlt } from "react-icons/bi";
import { useState } from "react";

// Define the ModeSelection component

export default function ModeSelection() {
  // State to track the active category
  const [activeButton, setActiveButton] = useState("Start");

  // Array of categories for better scalability
  const categories = [
    {
      id: "Search",
      icon: <BiSearchAlt className="mx-auto w-8 h-8" />,
      label: "SEARCH",
    },
    {
      id: "Start",
      icon: (
        <img
          src="\svgIcons\fire-svgrepo-com 1.svg"
          alt="start"
          className="w-8 h-8 mx-auto"
        />
      ),
      alt: "start",
      label: "START",
    },
    {
      id: "New",
      icon: (
        <img src="\svgIcons\NEW.svg" alt="new" className="w-8 h-8 mx-auto" />
      ),
      alt: "new",
      label: "NEW",
    },
    {
      id: "Slots",
      icon: (
        <img
          src="\svgIcons\casino-dealer-illustration-2-svgrepo-com 1.svg"
          alt="slots"
          className="w-8 h-8 mx-auto"
        />
      ),
      alt: "Slots",
      label: "SLOTS",
    },
    {
      id: "Live",
      icon: (
        <img
          src="\svgIcons\casino-dealer-illustration-2-svgrepo-com 1.svg"
          alt="live"
          className="w-8 h-8 mx-auto"
        />
      ),
      alt: "live",
      label: "LIVE",
    },
    {
      id: "Jackpots",
      icon: (
        <img
          src="\svgIcons\jackpots.svg"
          alt="jackpots"
          className="w-8 h-8 mx-auto"
        />
      ),
      alt: "jackpots",
      label: "JACKPOTS",
    },
  ];
  return (
    // Main container for the categories with styling applied

    <div className="categories-container items-center mx-auto justify-start gap-20 mt-5">
      {categories.map((category) => (
        <div key={category.id} className="category">
          <button
            className={`font-medium ${
              activeButton === category.id
                ? "underline underline-offset-4 decoration-2 decoration-sky-500"
                : ""
            }`}
            onClick={() => setActiveButton(category.id)}
          >
            {category.icon}
            {category.label}
          </button>
        </div>
      ))}
    </div>
  );
}
