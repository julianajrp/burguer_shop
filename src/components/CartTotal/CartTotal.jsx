import React from "react";
import "./CartTotal.css";
const CartTotal = ({ precos }) => {
  return (
    <div className="divTotal">
      <span className="heading4 total">Total</span>
      <span className="priceTag valor"> ${precos.toFixed(2)}</span>
    </div>
  );
};

export default CartTotal;
