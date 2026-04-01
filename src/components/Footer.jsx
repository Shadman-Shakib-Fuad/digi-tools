const Footer = () => {
  return (
    <footer style={{
      background: "#0f172a",
      color: "white",
      padding: "80px 40px"
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
        gap: "40px"
      }}>

        {}
        <div>
          <h2 style={{ fontSize: "28px" }}>DigiTools</h2>
          <p style={{ marginTop: "15px", color: "#cbd5f5" }}>
            Powerful digital tools to boost your productivity and workflow. Build, design, and grow faster with DigiTools.
          </p>
        </div>

        {}
        <div>
          <h4 style={{ marginBottom: "15px" }}>Product</h4>
          <p>Features</p>
          <p>Pricing</p>
          <p>Templates</p>
          <p>Integrations</p>
        </div>

        {}
        <div>
          <h4 style={{ marginBottom: "15px" }}>Company</h4>
          <p>About</p>
          <p>Blog</p>
          <p>Career</p>
          <p>Press</p>
        </div>

        {}
        <div>
          <h4 style={{ marginBottom: "15px" }}>Resources</h4>
          <p>Documentation</p>
          <p>Help Center</p>
          <p>Community</p>
          <p>Contact</p>
        </div>

        {}
        <div>
          <h4 style={{ marginBottom: "15px" }}>Social Links</h4>
          <p>📘 Facebook</p>
          <p>▶ YouTube</p>
          <p>📸 Instagram</p>
          <p>🐦 Twitter</p>
        </div>
      </div>

      {}
      <hr style={{ margin: "50px 0", borderColor: "#334155" }} />

      {}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap"
      }}>
        <p>© 2026 DigiTools. All rights reserved.</p>

        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <p style={{ cursor: "pointer" }}>Privacy Policy</p>
          <p style={{ cursor: "pointer" }}>Terms & Conditions</p>
          <p style={{ cursor: "pointer" }}>Contact</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;