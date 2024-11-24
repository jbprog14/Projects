import { BiSearchAlt } from "react-icons/bi";
import { TbListSearch } from "react-icons/tb";
import { FaStar } from "react-icons/fa";

import { useState } from "react";
import { games } from "../../data/games";
import Cards from "../cards";

export default function Search() {
  const [favoriteGame, setFavoriteGame] = useState(
    games.filter((game) => game.isFavorite)
  );
  return (
    <>
      <div className="flex items-center justify-center my-5">
        <div className="w-full flex items-center border-2 border-blue-500 rounded-lg px-3 py-1.5">
          <BiSearchAlt className="text-gray-500 w-10 h-10" />
          <input
            type="text"
            placeholder="Seach games ..."
            className="w-full ml-2 outline-none border-none focus:ring-2 focus:ring-gray-300 py-2 pl-2 rounded-sm font-semibold text-gray-500"
          />
        </div>

        <button className="border-2 border-gray-400 rounded-lg py-0.5 px-0.5 ml-0.5 hover:-translate-y-0.5 transition duration-300">
          <TbListSearch className="text-gray-500 w-12 h-12" />
        </button>

        {/* Rendered favorite games */}
      </div>

      <h1 className="text-2xl font-thin text-gray-500 my-2">Your favorites</h1>
      <div className="flex space-x-4 items-center my-2 py-3">
        {favoriteGame.map((game) => (
          <div
            key={game.id}
            className="relative hover:scale-110 transition duration-300 "
          >
            {/* Render the game image with styling and hover effect */}

            <img
              src={game.img} // Set the source of the image dynamically from the game's `img` property
              alt={game.name} // Set the alternative text dynamically from the game's `name` property for accessibility
              className="w-48 " // Add a hover effect to enlarge the image with smooth animation
            />

            {/* Star icon  */}
            <div className="absolute top-2 right-2 z-20">
              <FaStar
                className="w-6 h-6"
                fill="yellow"
                strokeWidth="full"
                color="white"
              />
            </div>
          </div>
        ))}
      </div>
      {/* <Carousel /> */}
      <Cards />
    </>
  );
}
