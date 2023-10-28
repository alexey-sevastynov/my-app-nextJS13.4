import React from "react";

import styles from "./page.module.css";

interface IButton extends React.HTMLProps<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children }: IButton) => {
  return <button className={styles.button}>{children}</button>;
};

export default Button;
