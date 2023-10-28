import Button from "@/components/button/button";
import styles from "./page.module.css";
import Link from "next/link";
import Hero from "public/hero.png";

import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.home}>
      <div className={styles.item}>
        <h1>The future of AI in the next few years</h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Link href="/portfolio">
          <Button>See our Works</Button>
        </Link>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="hero" className={styles.img} />
      </div>
    </main>
  );
}
