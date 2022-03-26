import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuffle, faTrash } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Cart.css";

const Cart = ({ selectItems, clearItems }) => {
  return (
    <div className="cart-container">
      <h2 className="cart-title">Selected Items</h2>
      {selectItems.map((item) => (
        <div key={item.id} className="items-details">
          <img src={item.img} alt="" />
          <h5>{item.name}</h5>
          <FontAwesomeIcon icon={faTrash} />
        </div>
      ))}

      <div className="cart-btn-container">
        <button>
          Choose best for me <FontAwesomeIcon icon={faShuffle} />
        </button>
        <button onClick={clearItems}>
          Clear all choices <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
};

export default Cart;
