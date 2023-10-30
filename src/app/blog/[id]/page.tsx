import React from "react";
import Image from "next/image";
import styles from "./page.module.css";

async function getData(id: string) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("failed to fetch data!");
  }

  return res.json();
}

const BlogId = async ({ params }: { params: { id: string } }) => {
  const data: IPost = await getData(params.id);

  return (
    <section className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h2 className={styles.title}>{data.title}</h2>
          <p className={styles.desc}>{data.desc}</p>
          <div className={styles.author}>
            <Image
              src={data.image}
              alt="img"
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{data.userName}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={data.image}
            alt="img"
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{data.content}</p>
      </div>
    </section>
  );
};

export default BlogId;
