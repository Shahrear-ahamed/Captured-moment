import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Products = ({ camera }) => {
  console.log(camera);
  return (
    <div className="product-cart">
      <img src={camera.img} alt="" />
      <div>
        <h3>{camera.name}</h3>
        <p>Category: {camera.category}</p>
        <div className="btn-container d-flex">
          <button className="cart-btn d-flex">
            <p>Add to Cart</p>
            <FontAwesomeIcon icon={faShoppingCart} />
          </button>
          <h4>{camera.price}</h4>
        </div>
      </div>
    </div>
  );
};

export default Products;
