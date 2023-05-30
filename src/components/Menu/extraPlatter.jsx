import Image from 'next/image';
import griessundmascarponerolle from '../../images/Griess-und-Mascarpone-Rolle.jpg';
import kaeseobstplatte from '../../images/Kaese-Obst-Platte.jpg';
import milchreosmitorangenpudding from '../../images/Milchreis-mit-Orangen-Pudding.jpg';
import minipancakemitmacarpone from '../../images/Mini-Pancake-mit-Macarpone-und-Pistazien.jpg';
import sandwichplattevegetarisch from '../../images/Sandwich-Platte-vegetarisch.jpg';
import sandwichplatte from '../../images/Sandwich-Platte.jpg';
import styles from './extraPlatter.module.css';
import { useState } from 'react';
import { CartContext } from '@/context/CartContext';
import { useContext } from 'react';
import { useEffect } from 'react';
import Button from './Button';
import Quantity from './Quantity';
const extraplatters=[
{
    id:4,URL:sandwichplattevegetarisch ,title:"Sandwich Platte Vegetarisch",price:"10",quantity:1
},
{
    id:5,URL:sandwichplatte, title:"Sandwich Platte",price:"12",quantity:1
},
{
    id:6,URL:kaeseobstplatte, title:"Kaese Platte mit Obst und Nussen",price:"12",quantity:1
 
}
]
const desserts=[
    {
        id:7,URL:griessundmascarponerolle ,title:"Griess und Mascarponerolle",price:"18",quantity:1
    },
    {
        id:8,URL:minipancakemitmacarpone ,title:"Mini pancake mit Macarpone",price:"18",quantity:1
    },
{
    id:9,URL:milchreosmitorangenpudding,title:"Milchreis mit Orangen pudding",price:"15",quantity:1
}
]
export default function ExtraPlatter()
{
    const[cart,setcart]=useState(false);
    const{items,addToCart,removeFromCart}=useContext(CartContext);
    const[quantity,setQuantity]=useState(1);
    return (
    <div className={styles.cover}>
        <h3 className={styles.title}>Extra Platten (für 10 Personen mit Preisaufschlag)</h3>
        <div className={styles.extraplatter}>
       {
        extraplatters.map((dish)=>{
            return(
                <div className={styles.dish} key={dish.id}>
                <Image className={styles.Image} src={dish.URL} alt={dish.title} width={200} height={200}/>
                <span>{dish.title} </span>
                <span>{dish.price}€</span> 
                <Button dish={dish}/>
                </div>
            )   })  
       }
        </div>
        <h3 className={styles.title}>Dessert (für 10 Personen mit Preisaufschlag)</h3>
        <div className={styles.extraplatter}>
        {
           desserts.map((dish)=>{
            return(
                <div className={styles.dish} key={dish.id}>
                <Image className={styles.Image} src={dish.URL} alt={dish.title} width={200} height={200}/>
                <span>{dish.title}</span><span>{dish.price}€</span>
                    <Button dish={dish}/>
                </div>
            )
        }) 
        }
        </div>
        </div>  
    )     
}