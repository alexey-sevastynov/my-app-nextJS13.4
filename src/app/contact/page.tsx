import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/button";

const Contact = () => {
  return (
    <section className={styles.contact}>
      <h2 className={styles.title}>Let`s Keep in touch</h2>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt="contact-image"
            fill={true}
            className={styles.image}
          />
        </div>

        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            placeholder="message"
            cols={30}
            rows={10}
            className={styles.textArea}
          />
          <Button type="button">Send</Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
