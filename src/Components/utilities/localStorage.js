//local storags save 
const getStoreCart = () => {
   const storedCartString =  localStorage.getItem('cart')
   if(storedCartString){
     return JSON.parse(storedCartString)
   }
   return [];
}


const saveCartToLS = cart => {
  const cartSringified = JSON.stringify(cart)
  localStorage.setItem('cart', cartSringified)
}

const addToLS = id => {
  const cart = getStoreCart();
  cart.push(id)
  //save to local storage
  saveCartToLS(cart)
}

const removeFromLS = id => {
    const cart = getStoreCart();
    //removing all id
    const remaining = cart.filter(idx => idx !== id )
    saveCartToLS(remaining)
}

export {addToLS, getStoreCart, removeFromLS}