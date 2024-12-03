import React from "react";

const NewsLaterBox = () => {
  return (
    <div className="text-center">
      <p className="text-gray-800 mt-2">Subscribe Now & get 20% off</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum
        dolor sit amet consectetur adipisicing elit
      </p>
      <form className="flex justify-center mt-4 pb-4">
        <input
          type="email"
          placeholder="Enter your email address"
          className="border border-gray-400 p-2"
          required
        />
        <button className="bg-red-600 text-white p-2 border">Subscribe</button>
      </form>
    </div>
  );
};

export default NewsLaterBox;
