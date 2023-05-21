import styles from "./heroSection.module.css";

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
        <div className="text-wrapper">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
          possimus tenetur fugit tempore in provident hic debitis mollitia!
          Voluptatem soluta sint error dolorum sequi voluptate quod quis nam
          aspernatur! Tempore?
        </div>
        <a href="/menu" className={styles.ctaButton}>
          Order now
        </a>
      </div>
    </div>
  );
}
