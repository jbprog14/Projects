import GameList from "../components/ui/gameList";
import Hero from "../components/ui/hero";
import ModeSelection from "../components/ui/modeSelection";
import Navbar from "../components/ui/navbar";
import { useState } from "react";

export default function Home() {
  const [activeSelection, setActiveSelection] = useState<string>("");
  return (
    <main className="">
      <Navbar />
      <div className="px-20 min-w-[700px]">
        <Hero />
        <ModeSelection />
        <GameList />
      </div>
    </main>
  );
}
