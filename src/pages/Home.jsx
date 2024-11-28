import React from "react";
import Hero from "../components/Hero";
import LatestProduct from "../components/LatestProduct";

const Home = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      <Hero />
      <LatestProduct />
    </div>
  );
};

export default Home;
