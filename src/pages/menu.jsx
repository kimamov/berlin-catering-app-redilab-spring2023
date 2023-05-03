import Head from "next/head";
import productListMapping from "@/utils/jsonMapping";

export default function Menu() {
  let productList = productListMapping();

  return (
    <>
      <Head>
        <title>Menu Page</title>
      </Head>
      <main>
        <h1>Menu Page</h1>
        <h5>Product List Example</h5>
        <ul>
          {productList.map((product, index) => (
            <li key={index}>{product}</li>
          ))}
        </ul>
      </main>
    </>
  );
}
