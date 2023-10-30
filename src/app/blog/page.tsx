import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts");

  if (!res.ok) {
    throw new Error("failed to fetch data!");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <section className={styles.mainContainer}>
      {data.map((item: IPost) => (
        <Link
          href={`blog/${item._id}`}
          key={item._id}
          className={styles.container}
        >
          <div className={styles.imageContainer}>
            <Image
              src={item.image}
              alt="image"
              height={400}
              width={220}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Blog;
