const Cart = ({ cart }) => {
  const total = cart.reduce((acc,item)=>acc+item.price,0);
  return (
    <section className="container" style={{padding:"80px 0"}}>
      <h2 style={{textAlign:"center"}}>Your Cart</h2>
      {cart.length===0 ? <p style={{textAlign:"center"}}>Cart is empty</p> :
        <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"25px", marginTop:"20px"}}>
          {cart.map((item,index)=>
            <div key={index} className="card" style={{textAlign:"center"}}>
              <img src={item.img} style={{width:"60px"}}/>
              <h3>{item.title}</h3>
              <p>${item.price}</p>
            </div>
          )}
        </div>
      }
      <h3 style={{textAlign:"center", marginTop:"30px"}}>Total: ${total}</h3>
    </section>
  );
};

export default Cart;