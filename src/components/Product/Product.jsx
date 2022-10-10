import React, { useState } from "react";
import "./Product.css";

const Product = ({ addProductToCard, product }) => {
  //botar setCurrentSale no botao de adc

  return (
    <li className="cardTodo">
      {/* {console.log(product)} */}
      <div className="divImgCard">
        <img className="imgCard" alt="burguer" src={product.img} />
      </div>
      <div className="divDescCard">
        <h4 className="heading3 tituloCard">{product.name}</h4>
        <span className="headlineRegular categoriaCard">
          {product.category}
        </span>
        <p className="priceTag precoCard">$ {product.price}</p>
        <button
          className="btnVerde botaoAdc"
          id={product.id}
          onClick={(e) => addProductToCard(product)}
        >
          Add product
        </button>
      </div>
    </li>
  );
};

export default Product;
