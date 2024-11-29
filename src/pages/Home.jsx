import React from "react";
import Hero from "../components/Hero";
import LatestProduct from "../components/LatestProduct";
import BestSeller from "../components/BestSeller";
import OurPolicy from "../components/OurPolicy";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row border border-gray-400">
        <Hero />
      </div>
      <LatestProduct />
      <BestSeller />
      <OurPolicy />
    </div>
  );
};

export default Home;
