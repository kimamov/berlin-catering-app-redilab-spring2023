import React, { useContext, useState } from 'react';
import styles from './CartItem.module.css'
import { CartContext } from '@/context/CartContext';
import Image from 'next/image';
import trashIcon from '../../assets/trash-can-regular.svg';

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
        <div className={styles.imgContainer}>
          <img className={styles.itemImg} src={cartItems.URL.src} alt="thumbnail" />
        </div>
        <span className={styles.title}>{cartItems.title}</span>
        {/* <h4 className={styles.price}>{cartItems.price}€</h4> */}
        <div className={styles.quantityContainer}> 
          <button className={styles.decreaseBtn} onClick={handleDecrease}>-</button>
          <span className={styles.quantity}>{q}</span>
          <button className={styles.increaseBtn} onClick={handleIncrease}>+</button>
        </div>
        <div className={styles.delContainer}>
          <Image className={styles.deleteBtn} src={trashIcon} alt='delBtn' width={15} onClick={handleDelete} />
          {/* <button className={styles.deleteBtn} onClick={handleDelete}>Entfernen</button> */}
        </div>
      </div>
    </li>
  );
};

export default CartItem;