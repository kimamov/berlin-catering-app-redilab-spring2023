import { useContext } from "react";
import Cartcomponent from "../components/Cart/Cart";
import ClientContactInfo from "@/components/ClientContactInfo";
import { CartContext } from "@/context/CartContext";
export default function Cart() {
  const { items } = useContext(CartContext);

  return (
    <div>
      <Cartcomponent />
      {items.length > 0 && <ClientContactInfo />}
    </div>
  );
}
