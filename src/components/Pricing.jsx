import React from "react";

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "$19",
      features: [
        "10 AI Generations",
        "Basic Support",
        "Access to Templates",
        "Standard Speed",
        "Community Access",
      ],
    },
    {
      name: "Pro",
      price: "$49",
      features: [
        "Unlimited AI Generations",
        "Priority Support",
        "All Templates Access",
        "Faster Processing",
        "API Access",
      ],
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "$99",
      features: [
        "Unlimited Access",
        "Dedicated Manager",
        "Custom Solutions",
        "Highest Speed",
        "24/7 Premium Support",
      ],
    },
  ];

  return (
    <section style={{ padding: "70px 20px", textAlign: "center", background: "#f8f9ff" }}>
      <h2 style={{ fontSize: "2.2rem", marginBottom: "10px" }}>Pricing Plans</h2>
      <p style={{ color: "#555", marginBottom: "40px" }}>
        Choose the plan that fits your needs
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        {plans.map((plan, index) => (
          <div
            key={index}
            style={{
              width: "280px",
              padding: "30px",
              borderRadius: "15px",
              background: plan.highlight ? "#6C4CF5" : "white",
              color: plan.highlight ? "white" : "black",
              boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
              transform: plan.highlight ? "scale(1.05)" : "scale(1)",
              transition: "0.3s",
            }}
          >
            <h3 style={{ marginBottom: "10px" }}>{plan.name}</h3>
            <h1 style={{ marginBottom: "20px" }}>{plan.price}</h1>

            <ul style={{ listStyle: "none", padding: 0, marginBottom: "20px", textAlign: "left" }}>
              {plan.features.map((f, i) => (
                <li key={i} style={{ marginBottom: "8px" }}>
                  ✔ {f}
                </li>
              ))}
            </ul>

            <button
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "none",
                background: plan.highlight ? "white" : "#6C4CF5",
                color: plan.highlight ? "#6C4CF5" : "white",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}