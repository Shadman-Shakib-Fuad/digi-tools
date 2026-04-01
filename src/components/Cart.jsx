const Cart = ({ cart, clearCart, setView }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="container" style={{ padding: "80px 0" }}>
      <h2>Your Cart</h2>

      <div style={{ margin: "20px 0" }}>
        <button className="btn btn-outline" onClick={() => setView("products")}>
          Back to Products
        </button>
      </div>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="card" style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "15px" }}>
            <img src={item.img} style={{ width: "60px" }} />
            <div>
              <h3>{item.title}</h3>
              <p>${item.price}</p>
            </div>
          </div>
        ))
      )}

      <h3 style={{ marginTop: "20px" }}>Total: ${total}</h3>

      {cart.length > 0 && (
        <button className="btn btn-primary" style={{ marginTop: "15px" }} onClick={clearCart}>
          Clear Cart
        </button>
      )}
    </section>
  );
};

export default Cart;