import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/button";
import Image from "next/image";
import { ItemsType, items } from "./data";
import { notFound } from "next/navigation";

const getData = (cat: string) => {
  if (cat === "applications" || cat === "illustrations" || cat === "websites") {
    const data = items[cat];
    if (data) {
      return data;
    }
    return notFound();
  }
};

const Category = ({ params }: { params: { category: string } }) => {
  const data = getData(params.category);

  return (
    <section>
      <h2 className={styles.catTitle}>{params.category}</h2>
      {data &&
        data.map((item) => (
          <div className={styles.item} key={item.id}>
            <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.desc}>{item.desc}</p>
              <Button>See more</Button>
            </div>
            <div className={styles.imgContainer}>
              <Image
                className={styles.img}
                fill={true}
                src={item.image}
                alt={item.title}
              />
            </div>
          </div>
        ))}
    </section>
  );
};

export default Category;
