import React, { useEffect, useState } from 'react'
import Bottle from '../Bottle/Bottle';
import './Bottles.css'
import { addToLS, getStoreCart, removeFromLS } from '../utilities/localStorage';
import Cart from './../Cart/Cart';

const Bottles = () => {
 const [bottles, setBottles] = useState([]); //set initailly empty
 const [cart, setCart] = useState([])
 useEffect(() => {
  fetch('bottles.json')
   .then(res => res.json())
   .then(data => setBottles(data))
   
   
 }
  , [])

  //load Cart From LocalStroge
     useEffect(()=>{  
         if(bottles.length>0){
          const StoreCart = getStoreCart()
        //   console.log(StoreCart, bottles);
         const savedCart = []
          for(const id of StoreCart ){
             console.log(id);
             const bottle = bottles.find(bottle => bottle.id === id)
             if(bottle){
                  savedCart.push(bottle)
             }
             
             console.log('cart is saved', savedCart);
             setCart(savedCart)
          }

         }      
     } ,[bottles])
 
    
// add to cart
 const handleAddToCart = bottle => {
  const newCart = [...cart, bottle]
  setCart(newCart)
  addToLS(bottle.id)
 }

 // remove to cart 
 const handleRemoveFromCart = id => {
   // visual cart remove
   const remainingCart = cart.filter(bottle=>bottle.id !== id)
   setCart(remainingCart)
   // remove from local storage 
   removeFromLS(id)
 }
 



 return (
  <div>
   <div>
    <h2>Bottles Available: {bottles.length} </h2>
     <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} />
    <div className='bottles-container'>
     {
      bottles.map(bottle => <Bottle
       key={bottle.id}
       bottle={bottle}
       handleAddToCart={handleAddToCart}
      />)
     }
    </div>
   </div>
  </div>
 )
}

export default Bottles ;