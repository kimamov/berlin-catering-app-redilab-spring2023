import { useState } from "react"
import Button from "./Button";
import { CartContext } from "@/context/CartContext";
import { useContext } from "react";
import styles from './Quantity.module.css';
export default function Quantity({id,setAddtoCart})
{
    const{items,increaseItem,decreaseItem,removeFromCart}=useContext(CartContext);
    const[value,setValue]=useState(1);
    const handleDecrement=()=>{
        setValue(prevvalue=>prevvalue-1)  
            if(value>1)
            {
                decreaseItem(id)
            } 
            else 
            { 
                setAddtoCart(false);
                removeFromCart(id);
            }
    
    };
    const handleIncrement=()=>{
        setValue(prevvalue=>prevvalue+1)
       increaseItem(id);
    };
    return(
        <div className={styles.button}>
                <button onClick={handleDecrement}>-</button><span className={styles.cartvalue}>{value}</span><button onClick={handleIncrement}>+</button>   
        </div>
    )
}