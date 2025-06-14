import React from "react";
import Beams from "./Beams"; 
import ShinyText from './ShinyText';

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-white">
      <Beams />
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="absolute z-20 text-center px-6">
        <h1 className="text-7xl font-lobster md:text-8xl text-white drop-shadow-lg">
          HypeKick
        </h1>

        <p className="mt-4 text-lg font-chakra md:text-xl text-gray-200 max-w-xl mx-auto">
          Own the Street. One Step at a Time.
        </p>
        <button className="mt-8 px-6 py-3 bg-white text-black rounded-full text-sm font-semibold uppercase tracking-wide shadow-lg hover:bg-gray-200 transition">
          Explore Collection
        </button>
      </div>
    </section>
  );
};

export default HeroSection;