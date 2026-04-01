const ProductCard = ({ item, addToCart }) => {
  return (
    <div className="card" style={{position:"relative"}}>

      <span style={{
        position:"absolute",
        top:"10px",
        right:"10px",
        background:"#6C4CF5",
        color:"white",
        padding:"5px 10px",
        borderRadius:"20px",
        fontSize:"12px"
      }}>
        Best Seller
      </span>

      <img src={item.img} style={{width:"60px"}} />

      <h3>{item.title}</h3>
      <p style={{color:"#64748b"}}>{item.desc}</p>

      <h2>${item.price}</h2>

      <ul>
        <li>✔ Unlimited AI Generations</li>
        <li>✔ API Access</li>
        <li>✔ Grammar Checker</li>
      </ul>

      <button
        className="btn btn-primary"
        style={{marginTop:"10px", width:"100%"}}
        onClick={() => addToCart(item)}
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;