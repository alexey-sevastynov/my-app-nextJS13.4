"use client";

import { LINKS } from "@/constants/links/links";
import Link from "next/link";

import styles from "./page.module.css";
import Button from "../button/button";
import DarkModeToggle from "../dark-mode-toggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const session = useSession();

  const nameUser = session.data?.user?.name;
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

        {session.status === "authenticated" && (
          <button onClick={signOut}>Logout ({nameUser})</button>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
