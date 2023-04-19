import styles from './Footer.module.css';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faInstagram
// } from "@fortawesome/free-brands-svg-icons";
import {
  FacebookShareButton,
  FacebookIcon,
} from 'next-share'


export default function Footer() {
  const footerLinks = [
    { name: "Impressum", url: "#" },
    { name: "Privacy policy", url: "#" },
    { name: "Data Protection", url: "#" },
    { name: "About us", url: "#" },
    { name: "Menu", url: "#" },
    { name: "Contact Us", url: "#" }
  ];

  return (
    <footer className={styles.mainfooter}>
      <nav className={styles.footersection}>
        <ul className={styles.list}>
          {footerLinks.map((link) => {
            return (
              <>
                <li>
                  <a className={styles.pages} alt={link.name} href={link.url}>
                    {link.name}
                  </a>
                </li>
              </>
            );
          })}
          <li>
          <FacebookShareButton
  url={'https://github.com/next-share'}
  quote={'next-share is a social share buttons for your next React apps.'}
  hashtag={'#nextshare'}
>
  <FacebookIcon size={32} round />
</FacebookShareButton>
            {/* <FontAwesomeIcon className="icon" icon={faInstagram} size="2x" /> */}
          </li>
          <span>Copyright &copy; Nafa's catering</span>
        </ul>
      </nav>
    </footer>
  );
}
