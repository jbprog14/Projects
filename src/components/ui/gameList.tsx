// Import the array of game data and the Game type from the games module
import { games } from "../../data/games";
import { Game } from "../../data/games";

// Define the GameList component as the default export
export default function GameList() {
  return (
    // Create a container div with a grid layout
    <div className="grid grid-cols-3 justify-center gap-5 mt-5">
      {/* Loop through the games array and render each game */}

      {games.map((game: Game) => (
        // Create a wrapper div for each game image, using a unique key for React to identify this element

        <div key={game.id} className="mx-auto">
          {/* Render the game image with styling and hover effect */}

          <img
            src={game.img} // Set the source of the image dynamically from the game's `img` property
            alt={game.name} // Set the alternative text dynamically from the game's `name` property for accessibility
            className="hover:scale-110 transition duration-300" // Add a hover effect to enlarge the image with smooth animation
          />
        </div>
      ))}
    </div>
  );
}
