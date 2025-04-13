import React, { useEffect, useState } from 'react'
import Bottle from '../Bottle/Bottle';
import './Bottles.css'


const Bottles = () => {

 const [bottles, setBottles] = useState([]); //set initailly empty
 const [cart, setCart] = useState([])

 useEffect(()=>{
    fetch('bottles.json')
    .then(res=>res.json())
    .then(data=>setBottles(data))
    .catch(err => console.error('Error fetching bottles:', err));
 }
  ,[])

  const handleAddToCart = bottle => {
    const newCart = [...cart, bottle ]  
    setCart(newCart)   
  }
 
  

  return (
    <div>
     <div>
      <h2>Bottles Available: {bottles.length} </h2>
      <h4>Cart: {cart.length} </h4>
     <div className='Bottles-container'>
     {
        bottles.map(bottle=> <Bottle
        key={bottle.id}
        bottle={bottle}
        handleAddToCart={()=>handleAddToCart(bottle)}
        /> )
      }
     </div>
     </div>
    </div>
  )
}

export default Bottles