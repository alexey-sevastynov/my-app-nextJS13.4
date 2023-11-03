"use client";

import React, { FormEvent } from "react";
import styles from "./page.module.css";
import Button from "@/components/button/button";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const session = useSession();
  const router = useRouter();

  if (session.status == "loading") {
    return <p>Loading</p>;
  }
  if (session.status == "authenticated") {
    router?.push("/dashboard");
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const emailInput = form.elements.namedItem("email") as HTMLInputElement;
    const passwordInput = form.elements.namedItem(
      "password"
    ) as HTMLInputElement;

    if (emailInput && passwordInput) {
      const email = emailInput.value;
      const password = passwordInput.value;

      signIn("credentials", { email, password });
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
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
        <button className={styles.button}>Login</button>
      </form>

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
