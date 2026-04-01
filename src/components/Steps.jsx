const Steps = () => {
  return (
    <section className="container" style={{ padding: "50px 0", textAlign: "center" }}>
      <h2>How It Works</h2>
      <div style={{ display: "flex", justifyContent: "space-around", marginTop: "30px" }}>
        <div>
          <h3>Step 1</h3>
          <p>Choose your product</p>
        </div>
        <div>
          <h3>Step 2</h3>
          <p>Add to Cart</p>
        </div>
        <div>
          <h3>Step 3</h3>
          <p>Checkout & Enjoy</p>
        </div>
      </div>
    </section>
  );
};

export default Steps;