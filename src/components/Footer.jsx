const Footer = () => {
  return (
    <footer style={{ background: "#1e293b", color: "white", padding: "40px 20px", textAlign: "center" }}>
      <h2>DigiTools</h2>
      <p>© 2026 DigiTools. All Rights Reserved.</p>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "15px" }}>
        <a href="#" style={{ color: "white" }}>Facebook</a>
        <a href="#" style={{ color: "white" }}>Twitter</a>
        <a href="#" style={{ color: "white" }}>Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;