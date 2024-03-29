import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
const Bottles = () => {
const[bottles,setBottles] = useState([]);
const [cart, setCart] = useState([]);

useEffect(() =>{
fetch('bottles.json')
.then(res => res.json())
.then(data => setBottles(data))
},[])

// load cart from local storage
useEffect(()  =>{
    console.log(bottles.length)
const storedCart = getStoredCart();
console.log(storedCart);
} ,[] )


const handleAddToCart =bottle =>{
    const newCart = [...cart, bottle];
    setCart(newCart);
}
    return (
        <div>
            <h2>Bottles Available:{bottles.length}</h2>
            <h3>Cart:{cart.length}</h3>
           <div className="bottle-container">
           {
                bottles.map(bottle => <Bottle
                     key={bottle.id}
                      bottle ={bottle}
                      handleAddToCart={handleAddToCart}
                      ></Bottle> )
            }
           </div>
        </div>
    );
};

export default Bottles;