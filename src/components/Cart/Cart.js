import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import CartItem from './CartItem';
import styles from './Cart.module.css';

export default function Cart() {
  const { items, count } = useContext(CartContext);

  return (
    <>
      {console.log(items)}{" "}
      <ul className={styles.listContainer}>
        {items.map(cartItems => (
        <CartItem
          key={cartItems.id}
          cartItems={cartItems} />))}
      </ul>
      <p>You have chosen {count} items 😋</p>
    </>
  );
}
