import { createContext } from "react";
import { products } from "../assets/frontend_assets/assets";
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const curreency = "$";
  const delivery_fee = 10;
  const value = {
    products,
    curreency,
    delivery_fee,
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
