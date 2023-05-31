  import Image from "next/image";
  import packOne from "../assets/Gemischt.jpg";
  import packTwo from "../assets/Gemischt2.jpg";
  import packThree from "../assets/Gemischt3.jpg";
  import foodItemsList from "../../data.json";
  import Button from "./Menu/Button";
  import styles from "./menuList.module.css";
  import Link from 'next/link';

  export default function MenuList() {
    const mainPackages = [
      {
        id:1,URL:packOne,title:"Aladin",price:180,quantity:1
      },
      {
        id:2,URL:packTwo,title:"1001 Nacht",price:350,quantity:1
      },
      {
        id:3,URL:packThree,title:"Sahara",price:280,quantity:1
      }
    ];
   

    const uniquePackages = [
      ...new Set(foodItemsList.map((item) => item.package).flat(1)),
    ].filter((pack) => pack !== "Optional");
    const uniqueCategories = [
      ...new Set(foodItemsList.map((item) => item.category)),
    ].filter((category) => category !== "Extraplatte" && category !== "Dessert");

    const packageItemsGroupedByCategory = (pack, category) => {
      return foodItemsList.filter((item) => {
        return item.package.includes(pack) && item.category === category;
      });
    };

    return (
      <ul className={styles.menuPackages}>
        {uniquePackages.map((pack) => {
          let dish=mainPackages.find(value=>value.title==pack);
          return (
            <li key={pack} className={styles.menuPackageCard}>
              <Image src={dish.URL} alt="Menu Aladin" width="400" />
              <div className={styles.menuPackageInfo}>
                <h2 className={styles.packageHeadline}>
                  <Link href={"/menu/" + pack}>{pack.toUpperCase()}</Link>{" "}
                  <span>{dish.price}€/ 10 PERSONEN</span>
                </h2>
                <ul className={styles.packageItemsList}>
                  {uniqueCategories.map((category) => {
                    return (
                      <li key={category} className={styles.packageItem}>
                        <h3>{category.toUpperCase()}</h3>
                        <ul className={styles.categoryItemsList}>
                          {packageItemsGroupedByCategory(pack, category).map(
                            (item) => (
                              <li key={item.id}>{item.name}</li>
                            )
                          )}
                        </ul>
                      </li>
                    );
                  })}
                </ul>
                <Button dish={dish} className={styles.orderBtn}>zur Bestellung hinzufügen</Button>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
