import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./CartItem.css"

const CartItem = ({ item }) => {
  return (
    <div className="items-details">
      <div className="items-info">
        <img src={item.img} alt="" />
        <h4>{item.name}</h4>
      </div>
      <button className="delete-btn">
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};

export default CartItem;
