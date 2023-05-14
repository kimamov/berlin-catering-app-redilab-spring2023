import {
  getPackageDetails,
  getPackageNameList,
} from "../../components/packages";

import styles from "../name.module.css";

export async function getStaticPaths() {
  const paths = await getPackageNameList();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const packageData = await getPackageDetails(params.name);
  return {
    props: {
      packageData,
    },
  };
}

export default function Post({ packageData }) {
  return (
    <div className={styles.productList}>
      <h2 className={styles.productListHeader}>Product List</h2>

      <ul className={styles.productListGrid}>
        {packageData.ingredients
          .filter((str) => str !== "")
          .map((product, index) => (
            <li key={index}>
              {product.charAt(0).toUpperCase() + product.slice(1)}
            </li>
          ))}
      </ul>
    </div>
  );
}
