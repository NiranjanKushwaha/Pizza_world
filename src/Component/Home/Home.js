import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import "./Home.css";


const Home = () => {
  const url = "https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68";
  const [materData, setMaterData] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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


  const selectToppings = () => {
    setShow(true);
  }

  return (<>
    <div className="pizza-container d-flex justify-content-around flex-wrap">
      {materData && materData.map((el, index) => {
        return (
          <div class="card pizza_card" key={index}>
            <img src={el?.img_url} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{el?.name}</h5>
              <div className="description">
                <p class="card-text">{el?.description}</p>
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
              <button className="btn btn_pizza_select" variant="dark" onClick={selectToppings}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
              </button>
            </div>
          </div>
        )
      })}

    </div>

    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        I will not close if you click outside me. Don't even try to press
        escape key.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary">Understood</Button>
      </Modal.Footer>
    </Modal>

  </>);
};

export default Home;
