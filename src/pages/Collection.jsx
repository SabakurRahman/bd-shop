import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContex";
import ProductItem from "../components/ProductItem";
import Title from "../components/Title";

const Collection = () => {
  const { products } = useContext(ShopContext);

  console.log("collectionPage", products);

  return (
    <div className="flex flex-col sm:flex-row">
      <div className="min-w-60">
        <div className="border border-gray-300 pl-5 py-3">
          <p className="mb-3 text-sm font-semibold">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input type="checkbox" value={"Men"} /> Men
            </p>
            <p className="flex gap-2">
              <input type="checkbox" value={"Women"} /> Women
            </p>
            <p className="flex gap-2">
              <input type="checkbox" value={"Kids"} /> Kids
            </p>
          </div>
        </div>
        <div className="border border-gray-300 pl-5 py-3 my-10">
          <p className="mb-3 text-sm font-semibold">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input type="checkbox" value={"Topware"} /> Topware
            </p>
            <p className="flex gap-2">
              <input type="checkbox" value={"Bottomware"} /> Bottomware
            </p>
            <p className="flex gap-2">
              <input type="checkbox" value={"Winterware"} />
              Winterware
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className=" px-5 py-2 text-3xl">
          <Title text1="All" text2="COLLECTIONS" />
        </div>

        <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mx-5">
          {products.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
