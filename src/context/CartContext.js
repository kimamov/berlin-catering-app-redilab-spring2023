import Cartcomponent from '../components/Cart/Cart';
import { createContext, useReducer } from 'react';
export const CartContext=createContext({items:[],count:0});
//CartContext takes an array of items as the default value.
export const CartProvider=({children})=>{
    const[state,dispatch]=useReducer(Reducer,{items:[],count:0,totalPrice:0,});
    const SumOfItems=(cartitems)=>{
        let sum=cartitems.reduce((total,product)=>total+product.quantity,0);
        console.log("state.count"+state.count);
        return sum; 
    }
  
    //addToCart function appends the new product to the existing products and returns the updated products in the payload object of the dispatch function.
    const addToCart=(product)=>{
        console.log(product);
        const updatedCart=[...state.items,product];
        dispatch(
            {
                type:"ADD",
                payload:{
                    items:updatedCart,
                    sum:SumOfItems(updatedCart)
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
                    items:updatedCart,
                    sum:SumOfItems(updatedCart)
                }
            }
        )
    }
    const increaseItem=(id,value)=>{
        (state.items.find(currentProduct=>currentProduct.id==id)).quantity++;
       dispatch(
        {
            type:"INCREASE",
            payload:{
                items:state.items,
                sum: SumOfItems(state.items)
            }
        }

       )   
    }
    const decreaseItem=(id,value)=>{
        state.items.find(currentProduct=>currentProduct.id==id).quantity--;
       
       dispatch(
        {
            type:"DECREASE",
            payload:{
                items:state.items,
                sum:SumOfItems(state.items)
            }
        }
       )
    }
    const value={
        items:state.items,
        addToCart,
        removeFromCart,
        increaseItem,
        decreaseItem,
        SumOfItems,
        count:state.count
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
                    count:payload.sum
                };
        case "DEL":
            return{
                ...state,
                items:payload.items,
                count:payload.sum
            };
            case "INCREASE":
                 console.log("increase"+payload.sum);
                 console.log({
                    ...state,
                    items:payload.items,
                    count:payload.sum
                })
                return{
                    ...state,
                    items:payload.items,
                    count:payload.sum
                };
            case "DECREASE":
                return{
                    ...state,
                    items:payload.items,
                    count:payload.sum
                };
default:
    throw new Error("Error case");
    }

}