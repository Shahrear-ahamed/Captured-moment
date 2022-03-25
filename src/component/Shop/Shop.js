import { useEffect, useState } from "react";
import React from "react";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import "./Shop.css";

const Shop = () => {
  const [cameras, setCameras] = useState([]);

  useEffect(() => {
    fetch("productDb.json")
      .then((res) => res.json())
      .then((data) => setCameras(data));
  }, []);

  return (
    <div className="shop-container grid-style">
      <div className="single-product grid-style">
        {cameras.map((camera) => (
          <Product key={camera.id} camera={camera} />
        ))}
      </div>
      <Cart />
    </div>
  );
};

export default Shop;
