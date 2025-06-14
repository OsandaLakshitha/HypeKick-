import React from "react";
import HeroSection from "../components/HeroSection";
import Navigation from "../components/Navigation";
import { PricingCard } from "../components/PricingCard";
import Card from "../components/Card";
import FeaturedProducts from "../components/FeaturedProducts";
import CallToActionSection from "../components/CallToActionSection";
import Footer from "../components/Footer";
import InfiniteMenu from "../components/InfiniteMenu";

const items = [
  {
    image: 'https://images.unsplash.com/photo-1617611413968-537a2ba4986d?q=300&w=300&fit=crop',
    link: 'https://google.com/',
    title: 'Nike',
    description: ''
  },
  {
    image: 'https://images.unsplash.com/photo-1602504968646-5e26fd0725d4?q=300&w=300&fit=crop',
    link: 'https://google.com/',
    title: 'Puma',
    description: ''
  },
  {
    image: 'https://images.unsplash.com/photo-1505874462322-dfcf87f819a9?q=300&w=300&fit=crop',
    link: 'https://google.com/',
    title: 'Adidas',
    description: ''
  },
  {
    image: 'https://images.unsplash.com/photo-1501951653466-8df816debe46?q=300&w=300&fit=crop',
    link: 'https://google.com/',
    title: 'Kodak',
    description: ''
  }
];

const Home = () => {
  return (
    <main className="relative w-full min-h-screen scrollbar-hide">
      <Navigation />
      <HeroSection />
      <FeaturedProducts />
      <CallToActionSection />
      <div className="bg-black">
      <h2 className="text-center text-5xl md:text-6xl font-lobster text-white py-4">
        Our Sponsors
      </h2>
      <div style={{ height: '600px', position: 'relative' }}>
        <InfiniteMenu items={items}/>
      </div>
    </div>
      <Footer />
    </main>
  );
};

export default Home;