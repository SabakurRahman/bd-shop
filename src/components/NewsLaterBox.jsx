import React from "react";

const NewsLaterBox = () => {
  const onSubmitHandaller = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };
  return (
    <div className="text-center mt-5">
      <p className="text-black mt-2">Subscribe Now & get 20% off</p>
      <p className="text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum
        dolor sit amet consectetur adipisicing elit
      </p>
      <form
        onSubmit={onSubmitHandaller}
        className="flex justify-center mt-4 pb-4"
      >
        <input
          type="email"
          placeholder="Enter your email address"
          className="border border-gray-400 p-2 w-1/2"
          required
        />
        <button className="bg-black text-white ml-1 px-6 py-2">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLaterBox;
