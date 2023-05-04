import Head from "next/head";
import ExtraPlatter from "../components/Menu/extraPlatter";
import MenuList from "../components/menuList";
import styles from "./menu.module.css";
import productListMapping from "@/utils/jsonMapping";

export default function Menu() {
  let productList = productListMapping();

  return (
    <>
      <Head>
        <title>Menu Page</title>
      </Head>
      <main>
        {/*<h1>*/}
        {/*  UNSER MENÜ*/}
        {/*</h1>*/}
        <h5>Product List Example</h5>
        <ul>
          {productList.map((product, index) => (
            <li key={index}>{product}</li>
          ))}
        </ul>
        <MenuList />
        <ExtraPlatter />
      </main>
    </>
  );
}
