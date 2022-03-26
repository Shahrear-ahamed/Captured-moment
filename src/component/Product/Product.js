import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Products = ({ camera, addToCart }) => {
  const {img, name, category, price} = camera;
  return (
    <div className="product-cart">
      <div className="details-section">
        <img src={img} alt="" />
        <h3>{name}</h3>
        <div className="btn-container d-flex">
          <p>Category: {category}</p>
          <h4>{price}</h4>
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
