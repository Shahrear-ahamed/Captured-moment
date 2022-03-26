import { useEffect, useState } from "react";
import React from "react";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import "./Shop.css";

const Shop = () => {
  const [cameras, setCameras] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("productDb.json")
      .then((res) => res.json())
      .then((data) => setCameras(data));
  }, []);

  // add to cart add in cart section
  const addToCart = (clickedProduct) => {
    const exist = cart.find(
      (singleProduct) => singleProduct.id === clickedProduct.id
    );

    const selecedProduct = [...cart, clickedProduct];
    if (!exist) {
      if (cart.length !== 4) {
        setCart(selecedProduct);
      } else {
        alert("you reached your limit");
      }
    }
  };

  // clear add items
  const clearItems = () => setCart([]);

  return (
    <div className="shop-container grid-style">
      <div className="single-product grid-style">
        {cameras.map((camera) => (
          <Product key={camera.id} camera={camera} addToCart={addToCart} />
        ))}
      </div>
      <Cart
        selectItems={cart}
        clearItems={clearItems}
      />
    </div>
  );
};

export default Shop;
