import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Products = ({ camera, addToCart }) => {
  return (
    <div className="product-cart">
      <div className="details-section">
        <img src={camera.img} alt="" />
        <h3>{camera.name}</h3>
        <div className="btn-container d-flex">
          <p>Category: {camera.category}</p>
          <h4>{camera.price}</h4>
        </div>
      </div>
      <button className="cart-btn d-flex" onClick={() => addToCart(camera)}>
        <p>Add to Cart</p>
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Products;
