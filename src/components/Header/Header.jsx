import React, { useState } from "react";
import "./header.css";
// import logo from "../../assets/logo.jpeg";
import burguershop from "../../assets/burguershop.png";

const Header = ({ setSearch }) => {
  const [searchInput, setSearchInput] = useState();

  function onSubmit(event) {
    event.preventDefault();
    setSearch(searchInput);
  }
  // function searchItems(value) {
  //   const filtered = products.filter(
  //     (product) =>
  //       product.name.toLowerCase().includes(value.toLowerCase()) ||
  //       product.category.toLowerCase().includes(value.toLowerCase())
  //   );
  //   setFilteredProducts(filtered);
  // }
  return (
    <nav>
      <img className="logo" alt="burguer" src={burguershop} />
      <form className="divPesquisa" onSubmit={onSubmit}>
        <input
          className="barraPesquisa headline"
          type="text"
          placeholder="Type Search..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          id="inputSearch"
        />
        <button className="btnVerde pesquisa headlineRegular" type="submit">
          Search
        </button>
      </form>
    </nav>
  );
};

export default Header;
