import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

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
          href={`blog/${item.id}`}
          key={item.id}
          className={styles.container}
        >
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
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.desc}>{item.body}</p>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Blog;
