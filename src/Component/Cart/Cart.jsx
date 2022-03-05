import React, { useContext, useEffect } from "react";
import "./cart.css";
import { GlobalDataContext } from "../globalContext/GlobalContext";

const Cart = () => {
  const globalDataContext = useContext(GlobalDataContext);
  useEffect(() => {
    console.log(globalDataContext.selectedPizzaData);
  }, []);
  return <div>Cart</div>;
};

export default Cart;
