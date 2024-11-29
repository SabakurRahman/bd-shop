import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContex";

const ProductItem = ({ id, image, name, price }) => {
  console.log("asasd55", name);
  const { curreency } = useContext(ShopContext);
  return (
    <Link to={`/product/${id}`} className="text-gray-700 cursor-pointer">
      <div className="overflow-hidden">
        <img
          src={image[0]}
          alt={name}
          className="hover:scale-110 transition ease-out"
        />
        <p className="pt-3 pb-2 text-sm">{name}</p>
        <p className="text-sm font-medium">
          {curreency}
          {price}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
