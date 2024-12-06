import React from "react";
import { assets } from "./../assets/frontend_assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="felx flex-col sm:grid grid-cols-3 gap-16 my-28">
      <div className="mr-10">
        <img src={assets.logo} className="w-32 mb-5" />
        <p className="w-full md:2/3 text-gray-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis ipsam
          numquam sed nesciunt cupiditate similique modi esse, ipsa iure debitis
        </p>
      </div>
      <div className="ml-10">
        <h1 className="text-xl font-light">Quick Links</h1>
        <ul className="mt-5">
          <li className="text-gray-600">Home</li>
          <li className="text-gray-600">About</li>
          <li className="text-gray-600">Collections</li>
          <li className="text-gray-600">Contact</li>
          <li className="text-gray-600">Cart</li>
        </ul>
      </div>
      <div className="ml-5">
        <h1 className="text-xl font-light">Contact Us</h1>
        <p className="mt-5 text-gray-600">
          Address: 123, Lorem ipsum dolor sit amet
        </p>
        <p className="text-gray-600">Phone: +91 1234567890</p>
        <p className="text-gray-600 cursor-pointer">
          Email:
          <Link
            to="mailto:sabakur12360@gmail.com"
            className="text-gray-600  ml-1"
          >
            sabakur12360@gmail.com
          </Link>
        </p>
      </div>

      <hr />
      <p className="text-center mt-5 text-gray-600">
        &copy; 2024 All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
