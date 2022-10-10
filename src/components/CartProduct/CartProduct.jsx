import React from "react";
import "./CartProduct.css";

const CartProduct = ({ currentSale, setCurrentSale, compraAtual }) => {
  function removeCard(cardToRemoveId) {
    const newList = currentSale.filter(
      (cards) => cards.id !== parseInt(cardToRemoveId)
    );
    setCurrentSale(newList);
  }

  return (
    <div className="cardCart">
      <div className="juntos">
        <img className="imgCart" alt="burguer" src={compraAtual.img} />
        <div>
          <h4 className="heading4 corProduct">{compraAtual.name}</h4>
          <span className="caption corCategory">{compraAtual.category}</span>
        </div>
      </div>
      <div>
        <span
          className="headlineRegular corRemover"
          id={compraAtual.id}
          onClick={(e) => removeCard(e.target.id)}
        >
          Remove{" "}
        </span>
      </div>
    </div>
  );
};

export default CartProduct; /* id do produto for maior q 1 && exibir */
