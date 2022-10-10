import React from "react";
import CartTotal from "../CartTotal/CartTotal";
import { useState } from "react";
import CartProduct from "../CartProduct/CartProduct";
import "./cart.css";

const Cart = ({ currentSale, precos, setCurrentSale }) => {
  function removeAll() {
    setCurrentSale([]);
  }

  //botar setCartTotal no botao de remover
  return (
    <div className="carrinhoCompras">
      <div className="tituloCarrinho">
        <h3 className="heading3">Shop Cart</h3>
      </div>
      {currentSale.length !== 0 ? (
        <div>
          <div className="boxCarts">
            {currentSale.map((compraAtual, compraAtualId) => {
              return (
                <CartProduct
                  compraAtual={compraAtual}
                  currentSale={currentSale}
                  key={compraAtualId}
                  setCurrentSale={setCurrentSale}
                />
              );
            })}
          </div>
          <CartTotal precos={precos} />
          <button className="btnCinza" onClick={removeAll}>
            Remove all
          </button>
        </div>
      ) : (
        <div className="empty">
          <h3 className="heading3">Empty cart</h3>
          <span className="body emptySpan">Add items</span>
        </div>
      )}
    </div>
  );
};

export default Cart;
