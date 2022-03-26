import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuffle, faTrash } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Cart.css";
import CartItem from "../CartItem/CartItem";

const Cart = ({ selectItems, clearItems , randomProduct}) => {

    return (
      <div className="cart-container">
        <h2 className="cart-title">Selected Items {selectItems.length}</h2>
        {selectItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}

        <div className="cart-btn-container">
          <button onClick={() => randomProduct(selectItems)}>
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
