import React from "react";
import HeroSection from "../components/HeroSection";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <main className="relative w-full min-h-screen scrollbar-hide">
      <Navigation />
      <HeroSection />
      <HeroSection />
    </main>
  );
};

export default Home;