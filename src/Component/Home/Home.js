import React, { useState, useEffect, useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import "./Home.css";
import { GlobalDataContext } from "../globalContext/GlobalContext";
import { injectStyle } from "react-toastify/dist/inject-style";
import { ToastContainer, toast } from "react-toastify";

if (typeof window !== "undefined") {
  injectStyle();
}

const Home = () => {
  const url = "https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68";
  const [materData, setMaterData] = useState([]);
  const [show, setShow] = useState(false);
  const [currentPizzaData, setCurrentPizzaData] = useState({
    isRadio: null,
    toppingItem: [],
    pizzaName: '',
    img: '',
    selectedToppings: []
  });

  const handleClose = () => setShow(false);
  const globalDataContext = useContext(GlobalDataContext);
  useEffect(() => {
    const getData = async () => {
      let res = await axios(url);
      console.log(res);
      if (res && res?.status === 200 && res.data && res.data.length) {
        setMaterData(res.data);
      }
    }

    getData();
  }, []);


  const selectToppings = (item, index) => {
    setCurrentPizzaData({
      isRadio: item?.toppings[0]?.isRadio,
      toppingItem: item?.toppings[0]?.items,
      pizzaName: item?.name,
      img: item?.img_url,
      selectedToppings: []
    })
    setShow(true);
  }

  const handleSelectTopping = (isSingleSelect, e) => {
    if (isSingleSelect) {
      let arr = e.target.value;
      console.log(arr);
      setCurrentPizzaData(prev => {
        return { ...prev, selectedToppings: [e.target.value] }
      })
    }
    else {
      let arr = e.target.value;
      console.log(arr);
    }
  }

  function getToppingDetails() {
    if (currentPizzaData.toppingItem && currentPizzaData.toppingItem.length) {
      if (currentPizzaData.isRadio) {
        return currentPizzaData.toppingItem.map((item, index) => (<span key={index} className="m-1">
          <input type="radio" name="item" className="m-1" value={item.name} onChange={(e) => handleSelectTopping(currentPizzaData.isRadio, e)} />
          <label>{item.name}</label>
        </span>
        )
        );
      }
      else {
        return currentPizzaData.toppingItem.map((item, index) => (<span key={index} className="m-1">
          <input type="checkbox" name="item" className="m-1" value={item.name} onChange={(e) => handleSelectTopping(currentPizzaData.isRadio, e)} />
          <label>{item.name}</label>
        </span>
        )
        );
      }
    }
  }

  const addToCart = () => {
    console.log("added to cart");
    globalDataContext.setSelectedPizzaData(currentPizzaData);
    toast.success("Yep ! your pizza has been added to your cart");
    setShow(false);
  }

  return (<>
    <div className="pizza-container d-flex justify-content-around flex-wrap">
      {materData && materData.map((el, index) => {
        return (
          <div className="card pizza_card" key={index}>
            <div className="img_container">
              <img src={el?.img_url} className="card-img-top img-fluid" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">{el?.name}</h5>
              <div className="description">
                <p className="card-text">{el?.description}</p>
              </div>
              <div className="d-flex justify-content-between">
                <div className="rating">
                  <p>Rating: {el?.rating} </p>
                </div>
                <div className="rating">
                  <p>Price: {el?.price} </p>
                </div>
              </div>
              <p>{el?.isVeg ? "veg" : "non"}</p>
              <button className="btn btn_pizza_select" variant="dark" onClick={() => selectToppings(el, index)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
              </button>
            </div>
          </div>
        )
      })}

    </div>
    <Modal
      size="lg"
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Please Select Toppings</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {getToppingDetails()}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={addToCart}>Add to Cart</Button>
      </Modal.Footer>
    </Modal>

    <ToastContainer position="bottom-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover />

  </>);
};

export default Home;
