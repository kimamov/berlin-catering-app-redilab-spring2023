import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import { useEffect } from "react";
export default function Cart()
{
const{items}=useContext(CartContext);
// useEffect(()=>{

// },[]
// )

return(
    <>
{
    console.log(items)
}    </>
)
}