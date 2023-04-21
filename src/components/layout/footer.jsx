import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
  const footerLinks = [
    { name: "Impressum", url:"/impressum" },
    { name: "Privacy policy", url: "/privacypolicy" },
    { name: "Data Protection", url: "/dataprotection" },
    { name: "About us", url: "/" },
    { name: "Menu", url: "#" },
    { name: "Contact Us", url: "#" }
  ];
  const socialLinks={name:"instagram",url:"https://www.instagram.com/nafas.muenchen/"};
  

  return (
    <footer className={styles.mainfooter}>
      <nav className={styles.footersection}>
        <ul className={styles.list}>
          {footerLinks.map((link) => {
            return (
              <>
                <li key ={link.name}>
                <Link className={styles.pages} href={link.url}>{link.name}</Link>
                </li>
              </>
            );
          })}
          <li>
         <a className={styles.pages} alt={socialLinks.name} href={socialLinks.url}>
         Follow us on Instagram
         </a>
          </li> 
          <span>Copyright &copy; Nafa's catering</span>
        </ul>
      </nav>
    </footer>
  );
}
