import React from "react";
import HeroSection from "../components/HeroSection";
import Navigation from "../components/Navigation";
import { PricingCard } from "../components/PricingCard";
import Card from "../components/Card";
import FeaturedProducts from "../components/FeaturedProducts";
import CallToActionSection from "../components/CallToActionSection";

const Home = () => {
  return (
    <main className="relative w-full min-h-screen scrollbar-hide">
      <Navigation />
      <HeroSection />
      <FeaturedProducts />
      <CallToActionSection />
    </main>
  );
};

export default Home;