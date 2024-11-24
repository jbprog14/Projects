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
    provider: "Playtech", // Game provider
  },
  {
    id: 2,
    name: "Sugar Rush",
    img: "/gameIcons/Group 70.webp",
    category: "START",
    provider: "Pragmatic",
    isFavorite: true,
  },
  {
    id: 3,
    name: "Shaolin Crew",
    img: "/gameIcons/Group 75.webp",
    category: "START",
    provider: "Expanse",
  },
  {
    id: 4,
    name: "Box of Egypt",
    img: "/gameIcons/Group 83.webp",
    category: "SLOTS",
    provider: "Expanse",
  },
  {
    id: 5,
    name: "Pirates Power",
    img: "/gameIcons/Group 84.webp",
    category: "START",
    provider: "Expanse",
  },
  {
    id: 6,
    name: "Crocodile Blitz",
    img: "/gameIcons/Group 85.webp",
    category: "START",
    provider: "Playtech",
    isFavorite: true,
  },
  {
    id: 7,
    name: "Anaconda Wild 2",
    img: "/gameIcons/Group 86.webp",
    category: "JACKPOT",
    provider: "Playtech",
  },
  {
    id: 8,
    name: "Maya Jackpot",
    img: "/gameIcons/Group 87.webp",
    category: "JACKPOTS",
    provider: "Skywind",
  },
  {
    id: 9,
    name: "Beach Life",
    img: "/gameIcons/Group 88.webp",
    category: "START",
    provider: "Playtech",
    isFavorite: true,
  },
  {
    id: 10,
    name: "Azteca",
    img: "/gameIcons/Group 94.webp",
    category: "START",
    provider: "Playtech",
  },
];

// List of Providers

export interface Providers {
  id: number;
  provider: string;
  logo: string;
  totalGames: number;
}

export const provider: Providers[] = [
  {
    id: 1,
    provider: "Playson",
    logo: "/logos/PS.webp",
    totalGames: 107,
  },
  {
    id: 2,
    provider: "Red Tiger",
    logo: "/logos/REDTIGER.webp",
    totalGames: 57,
  },
  {
    id: 3,
    provider: "PlayTech",
    logo: "/logos/PT.webp",
    totalGames: 13,
  },
  {
    id: 4,
    provider: "Play n' Go",
    logo: "/logos/PNG.webp",
    totalGames: 98,
  },
  {
    id: 5,
    provider: "M Play",
    logo: "/logos/MPLAY.webp",
    totalGames: 11,
  },
];
