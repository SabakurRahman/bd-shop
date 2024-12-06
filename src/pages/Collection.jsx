import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContex";
import ProductItem from "../components/ProductItem";
import Title from "../components/Title";
import { use } from "react";

const Collection = () => {
  const { products } = useContext(ShopContext);

  console.log(products);

  const [filterproduct, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [type, setType] = useState([]);

  const handleCategory = (e) => {
    if (e.target.checked) {
      setCategory([...category, e.target.value]);
    } else {
      setCategory(category.filter((item) => item !== e.target.value));
    }
  };

  const handleType = (e) => {
    if (e.target.checked) {
      setType([...type, e.target.value]);
    } else {
      setType(type.filter((item) => item !== e.target.value));
    }
  };

  useEffect(() => {
    let filtered = products;

    if (category.length > 0) {
      filtered = filtered.filter((item) => category.includes(item.category));
    }

    if (type.length > 0) {
      filtered = filtered.filter((item) => type.includes(item.subCategory));
    }

    setFilterProduct(filtered);
  }, [category, type, products]);
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="min-w-60">
        <div className="border border-gray-300 pl-5 py-3">
          <p className="mb-3 text-sm font-semibold">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input type="checkbox" value={"Men"} onChange={handleCategory} />{" "}
              Men
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                value={"Women"}
                onChange={handleCategory}
              />{" "}
              Women
            </p>
            <p className="flex gap-2">
              <input type="checkbox" value={"Kids"} onChange={handleCategory} />{" "}
              Kids
            </p>
          </div>
        </div>
        <div className="border border-gray-300 pl-5 py-3 my-10">
          <p className="mb-3 text-sm font-semibold">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input type="checkbox" value={"Topwear"} onChange={handleType} />{" "}
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                value={"Bottomwear"}
                onChange={handleType}
              />{" "}
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                value={"Winterwear"}
                onChange={handleType}
              />
              Winterwear
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className=" px-5 py-2 text-3xl">
          <Title text1="All" text2="COLLECTIONS" />
        </div>

        <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mx-5">
          {filterproduct.map((item, index) => (
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
