const Pricing = () => {
  const plans = [
    { title: "Basic", price: 19, features: ["10 AI Generations", "Basic Support"] },
    { title: "Pro", price: 49, features: ["Unlimited AI Generations", "Priority Support"] },
    { title: "Enterprise", price: 99, features: ["Unlimited Access", "Dedicated Manager"] },
  ];

  return (
    <section className="container" style={{ padding: "50px 0", textAlign: "center" }}>
      <h2>Pricing Plans</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "30px" }}>
        {plans.map((plan, index) => (
          <div key={index} className="card" style={{ padding: "20px", width: "200px" }}>
            <h3>{plan.title}</h3>
            <h2>${plan.price}</h2>
            <ul style={{ textAlign: "left" }}>
              {plan.features.map((f, i) => <li key={i}>✔ {f}</li>)}
            </ul>
            <button className="btn btn-primary" style={{ marginTop: "10px", width: "100%" }}>Choose Plan</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;