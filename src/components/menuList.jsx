import Image from 'next/image';
import packOne from '../assets/Gemischt.jpg';
import packTwo from '../assets/Gemischt2.jpg';
import packThree from '../assets/Gemischt3.jpg';
import foodItemsList from '../../data.json';

import styles from './menuList.module.css';

export default function MenuList() {
    const prices = {
        "Aladin": 180,
        "1001 Nacht": 350,
        "Sahara": 280
    };

    const images = {
        "Aladin": packOne,
        "1001 Nacht": packTwo,
        "Sahara": packThree
    };

    const uniquePackages = [...new Set(foodItemsList.map(item => item.package).flat(1))]
        .filter(pack => pack !== "Optional");
        console.log ("uniquePackages: ", uniquePackages);

    const uniqueCategories = [...new Set(foodItemsList.map(item => item.category))]
        .filter(category => category !== "Extraplatte" && category !== "Dessert");

    const packageItemsGroupedByCategory = (pack, category) => {
        return foodItemsList.filter((item) => {
            return item.package.includes(pack) && item.category === category;
        })
    }

    return (
        <ul className={styles.menuPackages}>
            {uniquePackages.map(pack => {
                return (<li key={pack} className={styles.menuPackageCard}>
                    <Image src={images[`${pack}`]} alt='Menu Aladin' width='400'/>
                    <div className={styles.menuPackageInfo}>
                        <h2 className={styles.packageHeadline}>{pack.toUpperCase()} <span>{prices[`${pack}`]}€ / 10 PERSONEN</span></h2>

                        <ul className={styles.packageItemsList}>
                            {uniqueCategories.map(category => {
                                return (<li key={category} className={styles.packageItem}>
                                    <h3>{category.toUpperCase()}</h3>
                                    <ul className={styles.categoryItemsList}>
                                        {packageItemsGroupedByCategory(pack, category).map(item => <li key={item.id}>{item.name}</li>)}
                                    </ul>
                                </li>)
                            })}
                        </ul>
                    </div>
                </li>)
            })}
        </ul>
    )
}
