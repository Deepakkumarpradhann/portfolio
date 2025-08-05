import React from "react";
import styles from "./Hero.module.css";
import heroImage from "../../assets/hero/hero1image.jpg"; // Import image directly

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div>
        <h1 className={styles.title}>Hi, I'm Deepak</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 2 years of experience using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact me
        </a>
      </div>
      
      {/* Use imported image */}
      <img src={heroImage} alt="Deepak" className={styles.heroImage} />
    </section>
  );
};
