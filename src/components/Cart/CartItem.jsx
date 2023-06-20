import React from 'react';
import styles from './CartItem.module.css'

const CartItem = ( {cartItems} ) => {
  return (
    <li className={styles.itemContainer}>
      <div className={styles.cartItem}>
        <img className={styles.itemImg} src={cartItems.URL.src} alt="thumbnail" />
        <div className={styles.metadata}>
          <h3 className={styles.title}>{cartItems.title}</h3>
          <h4 className={styles.price}>{cartItems.price}€</h4>
          <h4 className={styles.quantity}>{cartItems.quantity}</h4>
        </div>
      </div>
    </li>
  );
};

export default CartItem;