import React from "react";
import styles from "./darkModeToggle.module.css";

const DarkModeToggle = () => {
  let mode: "dark" | "light" = "light";

  const ballStyles = () => {
    if (mode === "light") {
      return { left: "2px" };
    }
    if (mode === "dark") {
      return { right: "2px" };
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div className={styles.ball} style={ballStyles()}></div>
    </div>
  );
};

export default DarkModeToggle;
