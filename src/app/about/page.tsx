import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/button";
import Link from "next/link";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="image"
          fill={true}
          objectFit="cover"
        />
        <div className={styles.imgText}>
          <h3>Lorem ipsum dolor sit amet consectetur.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet!
          </p>
        </div>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h3>Lorem, ipsum dolor.</h3>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
            similique consequatur inventore dignissimos.
          </p>
        </div>

        <div className={styles.item}>
          <h3>Lorem, ipsum.</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
            placeat suscipit debitis animi, impedit dolores aspernatur
            voluptates atque exercitationem optio, quo velit.
          </p>
          <Link href="/contact">
            <Button>Contact</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
