import user from "../assets/images/user.png";
import packageImg from "../assets/images/package.png";
import rocket from "../assets/images/rocket.png";

const Steps = () => {
  return (
    <section className="container" style={{padding:"90px 0"}}>
      <h2 style={{textAlign:"center", fontSize:"38px"}}>Get Started In 3 Steps</h2>
      <p style={{textAlign:"center", color:"#64748b", margin:"15px 0 50px"}}>Simple and quick process to start using our platform and boost productivity.</p>

      <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"30px"}}>
        <div className="card" style={{textAlign:"center", position:"relative"}}>
          <div style={{position:"absolute", top:"15px", right:"15px", background:"#6C4CF5", color:"white", borderRadius:"50%", width:"35px", height:"35px", display:"flex", justifyContent:"center", alignItems:"center"}}>01</div>
          <div style={{width:"80px", height:"80px", margin:"auto", borderRadius:"50%", background:"#ede9fe", display:"flex", alignItems:"center", justifyContent:"center"}}>
            <img src={user} style={{width:"40px"}} />
          </div>
          <h3 style={{marginTop:"15px"}}>Create Account</h3>
          <p style={{color:"#64748b"}}>Quickly sign up and access all premium features instantly.</p>
        </div>

        <div className="card" style={{textAlign:"center", position:"relative"}}>
          <div style={{position:"absolute", top:"15px", right:"15px", background:"#6C4CF5", color:"white", borderRadius:"50%", width:"35px", height:"35px", display:"flex", justifyContent:"center", alignItems:"center"}}>02</div>
          <div style={{width:"80px", height:"80px", margin:"auto", borderRadius:"50%", background:"#ede9fe", display:"flex", alignItems:"center", justifyContent:"center"}}>
            <img src={packageImg} style={{width:"40px"}} />
          </div>
          <h3 style={{marginTop:"15px"}}>Choose Products</h3>
          <p style={{color:"#64748b"}}>Pick the tools that match your needs from our collection.</p>
        </div>

        <div className="card" style={{textAlign:"center", position:"relative"}}>
          <div style={{position:"absolute", top:"15px", right:"15px", background:"#6C4CF5", color:"white", borderRadius:"50%", width:"35px", height:"35px", display:"flex", justifyContent:"center", alignItems:"center"}}>03</div>
          <div style={{width:"80px", height:"80px", margin:"auto", borderRadius:"50%", background:"#ede9fe", display:"flex", alignItems:"center", justifyContent:"center"}}>
            <img src={rocket} style={{width:"40px"}} />
          </div>
          <h3 style={{marginTop:"15px"}}>Start Creating</h3>
          <p style={{color:"#64748b"}}>Start using tools and boost your workflow immediately.</p>
        </div>
      </div>
    </section>
  );
};

export default Steps;