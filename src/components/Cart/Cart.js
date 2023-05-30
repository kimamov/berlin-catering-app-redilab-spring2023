import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import { useEffect } from "react";
export default function Cart() {
  const { items,count } = useContext(CartContext);
  console.log("here in cart page" + items[0]);

  return (
    <>
      <p>You have chosen {count} items</p>
      {console.log(items)}{" "}
    </>
  );
}
