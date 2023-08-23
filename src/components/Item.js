import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(true)

  const appClass = inCart ? "in-cart" : ""
  const toCart = inCart ? "Remove form cart" : "add to cart"

  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={() => setInCart(!inCart)}>{toCart}</button>
    </li>
  );
}

export default Item;
