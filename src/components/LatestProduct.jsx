import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContex";
import Title from "./Title";

const LatestProduct = () => {
  const products = useContext(ShopContext);
  // console.log(products);
  const latestProduct = products.products.slice(0, 10);
  console.log(latestProduct);
  return (
    <div className="my-10">
      <div className="text-center py-8  text-3xl">
        <Title text1="LATEST" text2="COLLECTIONS" />
      </div>
    </div>
  );
};

export default LatestProduct;
