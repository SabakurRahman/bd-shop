import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <img src={assets.logo} alt="logo" className="w-36" />
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" />
        </NavLink>
        <NavLink to="/about" className="px-4">
          About
        </NavLink>
        <NavLink to="/collections" className="px-4">
          Collections
        </NavLink>
        <NavLink to="/cart" className="px-4">
          Cart
        </NavLink>
        <NavLink to="/contact" className="px-4">
          Contact
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
