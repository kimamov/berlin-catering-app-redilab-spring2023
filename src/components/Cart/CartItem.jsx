import React, { useContext, useState } from 'react';
import styles from './CartItem.module.css'
import { CartContext } from '@/context/CartContext';

const CartItem = ({ cartItems }) => {
  const { removeFromCart, decreaseItem, increaseItem } = useContext(CartContext);
  const handleDelete = () => removeFromCart(cartItems.id);

  const[q, setQ] = useState(cartItems.quantity);
  const handleDecrease = () => {
    setQ(prev => prev - 1)
      if (q > 1)
      { decreaseItem(cartItems.id) }
      else
      { removeFromCart(cartItems.id) }
    };
  const handleIncrease = () => {
      setQ(prev => prev + 1);
      increaseItem(cartItems.id);
    };

  return (
    <li className={styles.itemContainer}>
      <div className={styles.cartItem}>
        <img className={styles.itemImg} src={cartItems.URL.src} alt="thumbnail" />
        <h2 className={styles.title}>{cartItems.title}</h2>
        {/* <h4 className={styles.price}>{cartItems.price}€</h4> */}
        <div className={styles.quantityContainer}> 
          <button className={styles.quantityBtn} onClick={handleDecrease}>-</button>
          <span className={styles.quantity}>{q}</span>
          <button className={styles.quantityBtn} onClick={handleIncrease}>+</button>
        </div>
        <button className={styles.deleteBtn} onClick={handleDelete}>X</button>
      </div>
    </li>
  );
};

export default CartItem;