import React from "react";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      Home
      <Hero />
    </div>
  );
};

export default Home;
