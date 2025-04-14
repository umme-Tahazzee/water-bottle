import './Cart.css'

const Cart = ({cart}) => {
 console.log(cart);
 
  return (
    <div>
     <h4>  Cart : {cart.length}</h4>
     <div className="cart-container">
         {cart.map(bottle=> <img src={bottle.img} alt="" /> )}
     </div>
    </div>
  )
}

export default Cart