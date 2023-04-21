import Image from 'next/image';
import logoNafas from '../../assets/Logo_Nafas.jpg';
import instagramIcon from '../../assets/instagram.svg';

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
            <a href="/menu" className={styles.navLink}>MENU</a>
          </li>
          <li>
            <a href="https://www.instagram.com/nafas.muenchen/" target="_blank">
              <Image src={instagramIcon} alt='Instagram Icon'/>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
