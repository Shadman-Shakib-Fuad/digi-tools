const Stats = () => {
  return (
    <section style={{
      background:"linear-gradient(90deg,#6C4CF5,#A855F7)",
      color:"white",
      padding:"40px 0"
    }}>
      <div className="container" style={{
        display:"flex",
        justifyContent:"space-around"
      }}>
        <div><h2>50K+</h2><p>Users</p></div>
        <div><h2>200+</h2><p>Tools</p></div>
        <div><h2>4.9</h2><p>Rating</p></div>
      </div>
    </section>
  );
};

export default Stats;