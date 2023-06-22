import React, { useContext } from 'react';
import styles from './CartItem.module.css'
import { CartContext } from '@/context/CartContext';

const CartItem = ({ cartItems }) => {
  const { removeFromCart } = useContext(CartContext);
  const handleDelete = () => removeFromCart(cartItems.id);

  return (
    <li className={styles.itemContainer}>
      <div className={styles.cartItem}>
        <img className={styles.itemImg} src={cartItems.URL.src} alt="thumbnail" />
        <div className={styles.metadata}>
          <h2 className={styles.title}>{cartItems.title}</h2>
          {/* <h4 className={styles.price}>{cartItems.price}€</h4> */}
          <h4 className={styles.quantity}>Quantity: {cartItems.quantity}</h4>
        </div>
        <button className={styles.deleteBtn} onClick={handleDelete}>X</button>
      </div>
    </li>
  );
};

export default CartItem;