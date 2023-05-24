import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
  const footerLinks = [
    { id:1,name: "Impressum", url:"/impressum" },
    { id:2,name: "Privacy policy", url: "/privacypolicy" },
    { id:3, name: "Data Protection", url: "/dataprotection" },
    { id:4,name: "About us", url: "/" },
    { id:5,name: "Menu", url: "#" },
    { id:6, name: "Contact Us", url: "/contactus" }
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
         Follow us on Instagram
         </a>
          </li> 
          <span>Copyright &copy; Nafa's catering</span>
        </ul>
      </nav>
    </footer>
  );
}
