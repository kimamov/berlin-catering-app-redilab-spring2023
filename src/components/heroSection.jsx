import { startTransition } from 'react';
import styles from "./heroSection.module.css";
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div>
      <div
        className={styles.container}
        style={{
          height: "100vh",
          backgroundImage: `url("https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-376464.jpg&fm=jpg")`,
          // backgroundImage: `url("../assets/Gemischt.jpg")`,
          backgroundSize: "cover",
        }}
      >
        <div className={styles.heroText}>
          Orientalisches Catering angepasst an deine Wünsche
        </div>
        <Link href="/menu" className={styles.ctaButton}>
          Jetzt bestellen
        </Link>
      </div>
    </div>
  );
}
