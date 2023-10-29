import React from "react";
import Image from "next/image";
import styles from "./page.module.css";

const BlogId = () => {
  return (
    <section className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h2 className={styles.title}>{"data.title"}</h2>
          <p className={styles.desc}>{"data.desc"}</p>
          <div className={styles.author}>
            <Image
              src=""
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{"data.username"}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="" alt="" fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{"data.content"}</p>
      </div>
    </section>
  );
};

export default BlogId;
