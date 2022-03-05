import React, { useContext, useEffect } from "react";
import "./cart.css";
import { GlobalDataContext } from "../globalContext/GlobalContext";

const Cart = () => {
  const globalDataContext = useContext(GlobalDataContext);
  useEffect(() => {
    console.log(globalDataContext.selectedPizzaData);
  }, []);

  // {
  //   isRadio: null,
  //   toppingItem: [],
  //   pizzaName: '',
  //   img: '',
  //   selectedToppings: []
  // }
  return (
    <>
      <div className="pizza-container d-flex justify-content-around flex-wrap">
        {globalDataContext.selectedPizzaData &&
          globalDataContext.selectedPizzaData.map((el, index) => {
            return (
              <div className="card pizza_card" key={index}>
                <div className="img_container">
                  <img
                    src={el?.img}
                    className="card-img-top img-fluid"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{el?.pizzaName}</h5>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Cart;
