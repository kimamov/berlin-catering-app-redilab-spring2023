import styles from './footer.module.css';
import Link from 'next/link';

export default function Footer() {
  const footerLinks = [
    // { id:1,name: "Impressum", url:"/impressum" },
    { id:2,name: "Datenschutzbestimmungen", url: "/privacypolicy" },
    { id:3, name: "Datenschutz", url: "/dataprotection" },
    { id:4,name: "Wir über uns", url: "/" },
    { id:5,name: "Speisekarte", url: "#" },
    { id:6, name: "Kontakt", url: "/contactus" }
  ];
  const socialLinks={name:"instagram",url:"https://www.instagram.com/nafas.muenchen/"};
  

  return (
    <footer className={styles.mainfooter}>
      <nav className={styles.footersection}>
        <ul className={styles.list}>
          {footerLinks.map((link) => {
            return (
              <div key={link.id}>
                <li >
                <Link className={styles.pages} href={link.url}>{link.name}</Link>
                </li>
              </div>
            );
          })}
          <li>
         <a className={styles.pages} alt={socialLinks.name} href={socialLinks.url}>
         Auf Instagram
         </a>
          </li> 
          <span>&copy; Nafa's catering</span>
        </ul>
      </nav>
    </footer>
  );
}
