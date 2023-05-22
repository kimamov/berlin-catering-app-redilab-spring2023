import Cartcomponent from '../components/Cart/Cart';
import { createContext, useReducer } from 'react';
export const CartContext=createContext({items:[]});
//CartContext takes an array of items as the default value.
export const CartProvider=({children})=>{
    const[state,dispatch]=useReducer(Reducer,{items:[]});
    //addToCart function appends the new product to the existing products and returns the updated products in the payload object of the dispatch function.
    const addToCart=(product)=>{
        console.log(product);
        const updatedCart=[...state.items,product];
        dispatch(
            {
                type:"ADD",
                payload:{
                    items:updatedCart,
                }
            }
        )
        console.log(state.items);
    }
    const removeFromCart=(id)=>{
        const updatedCart=state.items.filter(
            (currentProduct)=>currentProduct.id!==id
        );
        dispatch(
            {
                type:"DEL",
                payload:{
                    items:updatedCart
                }
            }
        )
    }
    const value={
        items:state.items,
        addToCart,
        removeFromCart
    }
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
const Reducer=(state,action)=>{
    const{type,payload}=action;
    switch(type){
        case "ADD":
                return{
                    ...state,
                    items:payload.items,
                };
        case "DEL":
            return{
                ...state,
                items:payload.items,
            };
default:
    throw new Error("Error case");
    }

}