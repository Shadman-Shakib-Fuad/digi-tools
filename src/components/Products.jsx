import ProductCard from "./ProductCard";

import design from "../assets/images/products/design-tool.png";
import operation from "../assets/images/products/operation.png";
import portfolio from "../assets/images/products/portfolio.png";
import rocket from "../assets/images/products/rocket.png";
import social from "../assets/images/products/social-media.png";
import writing from "../assets/images/products/writing.png";

const Products = ({ addToCart, setView }) => {
  const data = [
    { title: "AI Writing Pro", desc: "AI powered writing tool", price: 29, img: writing },
    { title: "Design Toolkit", desc: "Premium design assets", price: 49, img: design },
    { title: "Portfolio Builder", desc: "Create stunning portfolios", price: 19, img: portfolio },
    { title: "Startup Booster", desc: "Grow your startup", price: 79, img: rocket },
    { title: "Social Media Kit", desc: "Boost your social presence", price: 39, img: social },
    { title: "Operations Suite", desc: "Manage workflow easily", price: 59, img: operation }
  ];

  return (
    <section className="container" style={{padding:"80px 0"}}>
      <h2 style={{textAlign:"center"}}>Premium Digital Products</h2>
      <p style={{textAlign:"center", color:"#64748b"}}>
        Explore powerful tools for your workflow
      </p>

      {}
      <div style={{
        display:"flex",
        justifyContent:"center",
        gap:"20px",
        margin:"20px 0"
      }}>
        <button className="btn btn-primary">Products</button>
        <button className="btn btn-outline" onClick={() => setView("cart")}>
          Cart
        </button>
      </div>

      {}
      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(3,1fr)",
        gap:"25px"
      }}>
        {data.map((item, index) => (
          <ProductCard key={index} item={item} addToCart={addToCart} />
        ))}
      </div>
    </section>
  );
};

export default Products;