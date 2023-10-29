"use client";

import { LINKS } from "@/constants/links/links";
import Link from "next/link";

import styles from "./page.module.css";
import Button from "../button/button";
import DarkModeToggle from "../dark-mode-toggle/DarkModeToggle";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        <h3>My App</h3>
      </Link>
      <ul className={styles.links}>
        <DarkModeToggle />
        {LINKS.map((link) => (
          <li key={link.id} className={styles.link}>
            <Link href={link.url}>{link.title}</Link>
          </li>
        ))}
        <Button onClick={() => console.log("logout")}>Logout</Button>
      </ul>
    </nav>
  );
};

export default Navbar;
