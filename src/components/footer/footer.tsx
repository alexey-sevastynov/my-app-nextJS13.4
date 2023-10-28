import { SOCIAL_ICONS } from "@/constants/social-icon/socialIcons";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <p>2023 My App. All rights reserved</p>
      </div>
      <div className={styles.social}>
        {SOCIAL_ICONS.map((icon) => (
          <Link href={icon.link} key={icon.id} target="_blank">
            <Image
              src={icon.src}
              width={15}
              height={15}
              className={styles.icon}
              alt={icon.alt}
            />
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
