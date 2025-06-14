import React from "react";
import HeroSection from "../components/HeroSection";
import Navigation from "../components/Navigation";
import { PricingCard } from "../components/PricingCard";
import Card from "../components/Card";
import FeaturedProducts from "../components/FeaturedProducts";

const Home = () => {
  return (
    <main className="relative w-full min-h-screen scrollbar-hide">
      <Navigation />
      <HeroSection />
      <FeaturedProducts />
    </main>
  );
};

export default Home;