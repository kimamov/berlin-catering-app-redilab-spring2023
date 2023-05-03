import Image from 'next/image';
import logoNafas from '../../assets/Logo_Nafas.jpg';
import instagramIcon from '../../assets/instagram.svg';
import cartIcon from '../../assets/icons8-lieblingswagen-80_yellow.png';

import styles from './header.module.css';

export default function Header() {
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
            <Image src={cartIcon} width={50} alt='Cart Icon'/>
            {/*<a href="https://www.instagram.com/nafas.muenchen/" target="_blank">*/}
            {/*  <Image src={instagramIcon} alt='Instagram Icon'/>*/}
            {/*</a>*/}
          </li>
        </ul>
      </nav>
    </header>
  );
}
