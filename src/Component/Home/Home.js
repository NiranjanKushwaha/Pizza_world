import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./Home.css";

const Home = () => {
  const url = "https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68";
  const [materData, setMaterData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let res = await axios(url);
      console.log(res);
      if (res && res?.status === 200 && res.data && res.data.length) {
        setMaterData(res.data);
      }
    }

    getData();
  });
  return (<>
    <div className="pizza-container d-flex justify-content-around flex-wrap">
      {materData && materData.map((el, index) => {
        return (
          <div class="card pizza_card" key={index}>
            <img src={el?.img_url} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <NavLink class="btn btn-primary" to="/">Go somewhere</NavLink>
            </div>
          </div>
        )
      })}

    </div>
  </>);
};

export default Home;
