import { useState } from "react"
import { CartContext } from "@/context/CartContext";
import { useContext } from "react";
import styles from './Button.module.css';
export default function Button({dish})
{

    const{items,addToCart,removeFromCart}=useContext(CartContext);

    const[Cart,setAddtoCart]=useState(false);
    const handleAddClick=()=>{
        setAddtoCart(true)
        addToCart(dish)
    }
    const handleRemoveClick=()=>{
setAddtoCart(false)
removeFromCart(dish.id)
    }
    return(
        <>
        {
            Cart ?<button className={styles.button} onClick={handleRemoveClick}>Remove from Cart</button> :<button className={styles.button} onClick={handleAddClick}>Add to Cart</button>
        }
        </>
       
    )
}