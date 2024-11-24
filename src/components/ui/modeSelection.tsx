// Import the BiSearchAlt icon from the react-icons library

import { BiSearchAlt } from "react-icons/bi";
import { useState } from "react";
import Search from "../modes/search";
import GameList from "./gameList";
import Start from "../modes/start";

// Define the ModeSelection component

export default function ModeSelection() {
  // State to track the active category
  const [activeButton, setActiveButton] = useState("START");

  // Array of categories for better scalability
  const categories = [
    {
      id: "SEARCH",
      icon: <BiSearchAlt className="mx-auto w-8 h-8" />,
      label: "SEARCH",
    },
    {
      id: "START",
      icon: (
        <img
          src="\svgIcons\fire-svgrepo-com 1.svg"
          alt="start"
          className="w-8 h-8 mx-auto"
        />
      ),
      label: "START",
    },
    {
      id: "NEW",
      icon: (
        <img src="\svgIcons\NEW.svg" alt="new" className="w-8 h-8 mx-auto" />
      ),
      label: "NEW",
    },
    {
      id: "SLOTS",
      icon: (
        <img
          src="\svgIcons\casino-dealer-illustration-2-svgrepo-com 1.svg"
          alt="slots"
          className="w-8 h-8 mx-auto"
        />
      ),
      label: "SLOTS",
    },
    {
      id: "LIVE",
      icon: (
        <img
          src="\svgIcons\casino-dealer-illustration-2-svgrepo-com 1.svg"
          alt="live"
          className="w-8 h-8 mx-auto"
        />
      ),
      label: "LIVE",
    },
    {
      id: "JACKPOTS",
      icon: (
        <img
          src="\svgIcons\jackpots.svg"
          alt="jackpots"
          className="w-8 h-8 mx-auto"
        />
      ),
      label: "JACKPOTS",
    },
  ];
  return (
    // Main container for the categories with styling applied

    <>
      <div className="categories-container items-center mx-auto justify-start gap-20 mt-5">
        {categories.map((category) => (
          <div key={category.id} className="category">
            <button
              className={`font-medium ${
                activeButton === category.id
                  ? "underline underline-offset-4 decoration-2 decoration-sky-500 text-sky-500"
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
      <div className="w-full mt-5 py-2">
        {activeButton === "START" && <Start />}
        {activeButton === "SEARCH" && <Search />}
      </div>
    </>
  );
}
