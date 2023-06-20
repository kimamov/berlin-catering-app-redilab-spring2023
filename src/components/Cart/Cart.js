import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import CartItem from './CartItem';
import styles from './Cart.module.css';

export default function Cart() {
  const { items, count, totalPrice } = useContext(CartContext);
  console.log("here in cart page" + items[0]);

  return (
    <>
      {console.log(items)}{" "}
      <ul className={styles.listContainer}>
        {items.map(cartItems => (
        <CartItem key={cartItems.id} cartItems={cartItems} />))}
      </ul>
      <p>You have chosen {count} items</p>
      <p>Total Price: {totalPrice}€</p>
    </>
  );
}
