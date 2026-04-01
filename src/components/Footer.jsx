import React from "react";

export default function Footer() {
  return (
    <footer style={{ background: "#1f2937", color: "white", padding: "40px 20px" }}>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", maxWidth: "1200px", margin: "0 auto" }}>
        
        <div style={{ flex: "1 1 200px", marginBottom: "20px" }}>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "15px" }}>DigiTools</h3>
          <p>All your digital tools in one place. Simplify your workflow and stay productive.</p>
        </div>

        <div style={{ flex: "1 1 200px", marginBottom: "20px" }}>
          <h4 style={{ fontSize: "1.2rem", marginBottom: "15px" }}>Quick Links</h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li><a href="#products" style={{ color: "white", textDecoration: "none" }}>Products</a></li>
            <li><a href="#steps" style={{ color: "white", textDecoration: "none" }}>Get Started</a></li>
            <li><a href="#pricing" style={{ color: "white", textDecoration: "none" }}>Pricing</a></li>
            <li><a href="#contact" style={{ color: "white", textDecoration: "none" }}>Contact</a></li>
          </ul>
        </div>

        <div style={{ flex: "1 1 200px", marginBottom: "20px" }}>
          <h4 style={{ fontSize: "1.2rem", marginBottom: "15px" }}>Contact</h4>
          <p>Email: support@digitools.com</p>
          <p>Phone: +880 1234 567890</p>
          <p>Address: 123 Digital Street, Dhaka, Bangladesh</p>
        </div>

        <div style={{ flex: "1 1 200px", marginBottom: "20px" }}>
          <h4 style={{ fontSize: "1.2rem", marginBottom: "15px" }}>Follow Us</h4>
          <div style={{ display: "flex", gap: "10px" }}>
            <a href="#" style={{ color: "white", fontSize: "1.5rem" }}>🐦</a>
            <a href="#" style={{ color: "white", fontSize: "1.5rem" }}>📘</a>
            <a href="#" style={{ color: "white", fontSize: "1.5rem" }}>📸</a>
          </div>
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: "30px", fontSize: "0.9rem", color: "#cbd5e1" }}>
        &copy; {new Date().getFullYear()} DigiTools. All rights reserved.
      </div>
    </footer>
  );
}