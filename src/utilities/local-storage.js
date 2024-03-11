const getStoredCart =() =>{
    const getStoredCartString =localStorage.getItem('cart');
    if(getStoredCartString){
        return JSON.parse(getStoredCartString)
    }
    return [];
}

const saveCartToLS = cart => {
    const cartStringified =JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
    addToLS(bottle.id);
}


const addToLS =id => {
    const cart = getStoredCart();
    cart.push(id);
    // save to local strorage  
    saveCartToLS(cart);

}
export {addToLS , getStoredCart}