"use client";

import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/button";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div className={styles.container}>
      <button
        onClick={(e) => {
          e.preventDefault();
          signIn("google");
        }}
      >
        Login With Google
      </button>
    </div>
  );
};

export default Login;
