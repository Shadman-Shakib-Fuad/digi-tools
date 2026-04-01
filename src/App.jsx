import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Steps from "./components/Steps";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

function App() {
  const [cart,setCart]=useState([]);
  const [view,setView]=useState("products");

  const addToCart=(item)=>setCart([...cart,item]);

  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <Steps />
      {view==="products" ? <Products addToCart={addToCart} setView={setView}/> : <Cart cart={cart} />}
      <Footer />
    </div>
  );
}

export default App;