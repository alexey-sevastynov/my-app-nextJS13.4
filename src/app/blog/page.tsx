import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  return (
    <section className={styles.mainContainer}>
      <Link href={"blog/test"} className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/18357062/pexels-photo-18357062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="image"
            height={400}
            width={220}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>Title</h2>
          <p className={styles.desc}>description</p>
        </div>
      </Link>
    </section>
  );
};

export default Blog;
