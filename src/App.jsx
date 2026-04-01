import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function App() {
  const [view, setView] = useState("products");
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <>
      <Navbar setView={setView} />
      <Hero />
      <Stats />
      {view === "products" ? (
        <>
          <Products addToCart={addToCart} setView={setView} />
          <Steps />
          <Pricing />
        </>
      ) : (
        <Cart cart={cart} clearCart={clearCart} setView={setView} />
      )}
      <Footer />
    </>
  );
}

export default App;