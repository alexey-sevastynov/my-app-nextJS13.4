"use client";

import Button from "@/components/button/button";
import styles from "./page.module.css";
import Link from "next/link";
import Hero from "public/hero.png";

import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.home}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Mastering the Art of Full-Stack Magic with Next.js
        </h1>
        <p className={styles.desc}>
          Next.js 13 and MongoDB Unite: Crafting a Full-Stack Wonder for
          Ultimate Web Solutions
        </p>
        <Link href="/portfolio" className={styles.link}>
          <Button>See our Works</Button>
        </Link>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="hero" className={styles.img} />
      </div>
    </main>
  );
}
