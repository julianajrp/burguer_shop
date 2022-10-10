import "./App.css";
import { useState, useEffect } from "react";
import ProductsList from "./components/ProductsList/ProductsList";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [products, setProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [search, setSearch] = useState("");

  const newProducts = products.filter((product) => {
    if (search !== "") {
      return (
        product.name.toLowerCase().includes(search?.toLowerCase()) ||
        product.category.toLowerCase().includes(search?.toLowerCase())
      );
    } else {
      return true;
    }
  });

  // const precos1 = currentSale.reduce((a, b) => a + b.price, 0);
  // const precos2 = Number(precos1);
  // let precos = precos2;
  function totalRenew() {
    let precos = currentSale.reduce((a, b) => a + b.price, 0);
    if (precos > 50) {
      console.log(precos);
      precos = precos - 10;
      console.log(precos);
    }
    return precos;
  }

  useEffect(() => {
    fetch(`https://hamburgueria-kenzie-json-serve.herokuapp.com/products`)
      .then((res) => res.json())
      .then((res) => setProducts(res))
      .catch((err) => console.log(err));
  }, []);

  function addProductToCard(currentProduct) {
    const verify = currentSale.findIndex(
      (cartProduct) => cartProduct.id === currentProduct.id
    );
    if (verify !== -1) {
      toast.error("Is not possible to put more from the same item!");
    } else {
      setCurrentSale([...currentSale, currentProduct]);
      toast.success("Item in the cart with sucess!");
    }
  }

  //requisiçao usando o fetch com os products e get products
  return (
    <div className="App">
      <ToastContainer
        position={"top-right"}
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
      />
      <Header products={products} setSearch={setSearch} />
      <div className="bodyPosition">
        <ProductsList
          addProductToCard={addProductToCard}
          newProducts={newProducts}
          setCurrentSale={setCurrentSale}
        />
        <Cart
          currentSale={currentSale}
          precos={totalRenew()}
          setCurrentSale={setCurrentSale}
        />
      </div>
    </div>
  );
}

export default App;

// function handleClick(produtoF){
//   const productVerify = currentSale.find((product) => product.id === produtoF)

//   if( !productVerify ){
//     const productFind = products.find((product) => product.id === produtoF)
//     setCurrentSale([...currentSale, productFind])
//   } else {
//     const cartVerify = products.find((product) => product.id === produtoF)
//      if(cartVerify.id === produtoF){
//        setContador(contador +1)
//        console.log(contador, produtoF)
//      }
//   }

// }
