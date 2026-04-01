import hero from "../assets/images/banner.png";

const Hero = () => {
  return (
    <section className="container" style={{
      display:"flex",
      alignItems:"center",
      justifyContent:"space-between",
      padding:"60px 0"
    }}>
      
      <div>
        <h1 style={{fontSize:"50px"}}>
          Supercharge Your <br/> Digital Workflow
        </h1>

        <p style={{margin:"20px 0", color:"#64748b"}}>
          Access premium AI tools and assets in one place.
        </p>

        <div style={{display:"flex", gap:"10px"}}>
          <button className="btn btn-primary">Explore</button>
          <button className="btn btn-outline">Demo</button>
        </div>
      </div>

      <img src={hero} style={{width:"400px"}} />
    </section>
  );
};

export default Hero;