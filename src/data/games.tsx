// Define an interface to represent the structure of a game object
export interface Game {
  id: number; // Unique identifier for the game
  name: string; // Name of the game
  img: string; // Path to the image representing the game
  category: string; // Category or type of the game
  provider: string; // Name of the provider or developer of the game
  isFavorite?: boolean; // Optional property indicating whether the game is a favorite
}

// Create a list of games using the Game interface
export const games: Game[] = [
  {
    id: 1, // Unique ID for the game
    name: "Bad Wolf", // Game name
    img: "/gameIcons/Group 72.webp", // Path to the game image
    category: "START", // Game category
    provider: "NetEnt", // Game provider
  },
  {
    id: 3,
    name: "Bad Wolf",
    img: "/gameIcons/Group 72.webp",
    category: "START",
    provider: "NetEnt",
  },
  {
    id: 4,
    name: "Bad Wolf",
    img: "/gameIcons/Group 72.webp",
    category: "START",
    provider: "NetEnt",
  },
  {
    id: 5,
    name: "Bad Wolf",
    img: "/gameIcons/Group 72.webp",
    category: "START",
    provider: "NetEnt",
  },
  {
    id: 6,
    name: "Bad Wolf",
    img: "/gameIcons/Group 72.webp",
    category: "START",
    provider: "NetEnt",
  },
  {
    id: 7,
    name: "Bad Wolf",
    img: "/gameIcons/Group 72.webp",
    category: "START",
    provider: "NetEnt",
  },
  {
    id: 8,
    name: "Bad Wolf",
    img: "/gameIcons/Group 72.webp",
    category: "START",
    provider: "NetEnt",
  },
  {
    id: 9,
    name: "Bad Wolf",
    img: "/gameIcons/Group 72.webp",
    category: "START",
    provider: "NetEnt",
  },
  {
    id: 10,
    name: "Bad Wolf",
    img: "/gameIcons/Group 72.webp",
    category: "START",
    provider: "NetEnt",
  },
];
