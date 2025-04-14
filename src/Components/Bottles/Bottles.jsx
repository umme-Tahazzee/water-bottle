import React, { useEffect, useState } from 'react'
import Bottle from '../Bottle/Bottle';
import './Bottles.css'
import { addToLS, getStoreCart } from '../utilities/localStorage';
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

  //loadCartFromLocalStroge
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
 
    
 const handleAddToCart = bottle => {
  const newCart = [...cart, bottle]
  setCart(newCart)
  addToLS(bottle.id)
 }

 return (
  <div>
   <div>
    <h2>Bottles Available: {bottles.length} </h2>
     <Cart cart={cart} />
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