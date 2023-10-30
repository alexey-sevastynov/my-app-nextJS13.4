"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const nameInput = form.elements.namedItem("userName") as HTMLInputElement;
    const emailInput = form.elements.namedItem("email") as HTMLInputElement;
    const passwordInput = form.elements.namedItem(
      "password"
    ) as HTMLInputElement;

    const name = nameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "aplication/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      res.status === 201 &&
        router.push("/dashboard/login?success=Account has been created");
    } catch (error: any) {
      setError(error);
      console.log(error);
    }
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Create an account</h2>
      <h4 className={styles.subtitle}>Please sign up to use see dashboard</h4>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="userName"
          placeholder="username"
          required
          className={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          required
          className={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          required
          className={styles.input}
        />
        <button className={styles.button}>Register</button>
        {error && <p>Something about wrong</p>}
      </form>

      <span className={styles.or}>- OR -</span>
      <Link href="dashboard/login" className={styles.link}>
        Login with an existing Account
      </Link>
    </div>
  );
};

export default Register;
