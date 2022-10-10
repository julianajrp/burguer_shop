import React from "react";
import Product from "../Product/Product";
import "./Products.css";

const ProductList = ({
  newProducts,
  addProductToCard,
  setCurrentSale,
  currentSale,
  setValue,
}) => {
  // showProducts(){
  //   mostrar produtos
  // }
  function mapFun(product, productId) {
    return (
      <Product
        product={product}
        key={productId}
        setCurrentSale={setCurrentSale}
        currentSale={currentSale}
        setValue={setValue}
        addProductToCard={addProductToCard}
      />
    );
  }
  return <ul className="ulProdutos">{newProducts.map(mapFun)}</ul>;
};

export default ProductList;
