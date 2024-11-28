import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContex";

const LatestProduct = () => {
  const products = useContext(ShopContext);
  console.log(products);
  return <div></div>;
};

export default LatestProduct;
