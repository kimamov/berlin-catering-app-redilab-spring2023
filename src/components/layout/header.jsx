import Image from 'next/image';
import logoNafas from '../../assets/Logo_Nafas.jpg';
import instagramIcon from '../../assets/instagram.svg';
import cartIcon from '../../assets/icons8-lieblingswagen-80_yellow.png';
import Cart from '../Cart/Cart';
import styles from './header.module.css';
import { useContext } from 'react';
import { CartContext } from '@/context/CartContext';
import Link from 'next/link';
export default function Header() {
  const{items,count}=useContext(CartContext);
  return (
    <header>
      <nav className={styles.navigation}>
        <Link href="/" className={styles.logoLink}>
          <Image src={logoNafas} alt='Nafas Logo' width='95'/>
        </Link>
        <ul className={styles.navLinksList}>
          <li className={styles.igContainer}>
            <a href="https://www.instagram.com/nafas.muenchen/" target="_blank">
              <Image className={styles.instagram} src={instagramIcon} alt='Instagram Icon'/>
            </a>
          </li>
          {/* <li className={styles.navLinkItem}>
            <Link href="/events" className={styles.navLink}>VERANSTALTUNGEN</Link>
          </li> */}
          <li className={styles.navLinkItem}>
            <Link href="/contactus" className={styles.navLink}>KONTAKT</Link>
          </li>
          <li className={styles.navLinkItem}>
            <Link href="/menu" className={styles.navLink}>SPEISEKARTE</Link>
          </li>
          <li>
            <Link href="/cart"> 
            <Image className={styles.cartImage} src={cartIcon} width={50} alt='Cart Icon'/>
            <span className={styles.count}>{count} </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
