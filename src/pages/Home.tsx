import GameList from "../components/ui/gameList";
import Hero from "../components/ui/hero";
import ModeSelection from "../components/ui/modeSelection";
import Navbar from "../components/ui/navbar";
import Footer from "../components/ui/footer";
import { useState } from "react";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <div className="px-20 min-w-[700px]">
        <Hero />
        <ModeSelection />
        <Footer />
      </div>
    </main>
  );
}
