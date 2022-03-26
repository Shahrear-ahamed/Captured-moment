import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./CartItem.css"

const CartItem = ({ item, deleteSingleProduct }) => {
  const {img, name, id} = item;
  return (
    <div className="items-details">
      <div className="items-info">
        <img src={img} alt="" />
        <h4>{name}</h4>
      </div>
      <button className="delete-btn" onClick={() => deleteSingleProduct(id)}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};

export default CartItem;
