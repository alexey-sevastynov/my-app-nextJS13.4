"use client";

import React, { useContext } from "react";
import styles from "./darkModeToggle.module.css";
import { ThemeContext, ThemeContextData } from "@/context/ThemeContext";

const DarkModeToggle = () => {
  const { toggle, mode } = useContext<ThemeContextData>(ThemeContext); // ругается ts ThemeContext

  const ballStyles = () => {
    if (mode === "light") {
      return { left: "2px" };
    }
    if (mode === "dark") {
      return { right: "2px" };
    }
  };
  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div className={styles.ball} style={ballStyles()}></div>
    </div>
  );
};

export default DarkModeToggle;
