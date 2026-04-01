const Navbar = () => {
  return (
    <nav className="container" style={{
      display:"flex",
      justifyContent:"space-between",
      alignItems:"center",
      padding:"20px 0"
    }}>
      <h2 style={{
        background:"linear-gradient(90deg,#6C4CF5,#A855F7)",
        WebkitBackgroundClip:"text",
        color:"transparent"
      }}>
        DigiTools
      </h2>

      <ul style={{display:"flex", gap:"25px", listStyle:"none"}}>
        <li>Products</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>FAQ</li>
      </ul>

      <div style={{display:"flex", gap:"10px"}}>
        <button className="btn">Login</button>
        <button className="btn">Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;