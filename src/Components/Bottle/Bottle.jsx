import './Bottle.css'

const Bottle = ({ bottle,  handleAddToCart }) => {
 const { name, img, price } = bottle;

 return (
  <div className="bottle">
   <h5>Bottle name : {name} </h5>
   <div>
    <img
     src={img} alt=""  />
   </div>
   <p>Price: {price} </p>
   <button onClick={ handleAddToCart}>Purchase</button>
  </div>
 )
}

export default Bottle