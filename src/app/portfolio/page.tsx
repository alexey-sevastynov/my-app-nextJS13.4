import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const Portfolio = () => {
  return (
    <section className={styles.portfolio}>
      <h2 className={styles.selectTitle}>Choose a galary</h2>
      <div className={styles.items}>
        <Link href="portfolio/ilustrations" className={styles.item}>
          <span className={styles.title}>Ilustrations</span>
        </Link>
        <Link href="portfolio/website" className={styles.item}>
          <span className={styles.title}>Website</span>
        </Link>
        <Link href="portfolio/aplication" className={styles.item}>
          <span className={styles.title}>Aplication</span>
        </Link>
      </div>
    </section>
  );
};

export default Portfolio;
