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
  const{items}=useContext(CartContext);
  return (
    <header>
      <nav className={styles.navigation}>
        <a href="/" className={styles.logoLink}>
          <Image src={logoNafas} alt='Nafas Logo' width='95'/>
        </a>
        <ul className={styles.navLinksList}>
          <li className={styles.navLinkItem}>
            <a href="/events" className={styles.navLink}>VERANSTALTUNGEN</a>
          </li>
          <li className={styles.navLinkItem}>
            <a href="/menu" className={styles.navLink}>MENU</a>
          </li>
          <li>
            <Link href="/cart"> 
            <Image src={cartIcon} width={50} alt='Cart Icon'/>
{items.length}
            </Link>
            {/*<a href="https://www.instagram.com/nafas.muenchen/" target="_blank">*/}
            {/*  <Image src={instagramIcon} alt='Instagram Icon'/>*/}
            {/*</a>*/}
          </li>
        </ul>
      </nav>
    </header>
  );
}
