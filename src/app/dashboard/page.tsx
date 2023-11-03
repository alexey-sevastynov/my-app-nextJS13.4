"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { FormEvent, useEffect, useState } from "react";
import useSWR from "swr";

import Image from "next/image";

import styles from "./page.module.css";

const Dashboard = () => {
  const session = useSession();

  const router = useRouter();

  const fetcher = (...args: Parameters<typeof fetch>) =>
    fetch(...args).then((res) => res.json());
  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?userName=${session.data?.user?.name}`,
    fetcher
  );

  if (session.status == "loading") {
    return <p>Loading</p>;
  }
  if (session.status == "unauthenticated") {
    router?.push("/dashboard/login");
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const titleInput = form.elements.namedItem("title") as HTMLInputElement;
    const descInput = form.elements.namedItem("desc") as HTMLInputElement;
    const imageInput = form.elements.namedItem("img") as HTMLInputElement;
    const contentInput = form.elements.namedItem("content") as HTMLInputElement;

    try {
      if (titleInput && descInput && imageInput && contentInput) {
        const title = titleInput.value;
        const desc = descInput.value;
        const image = imageInput.value;
        const content = contentInput.value;
        await fetch("/api/posts", {
          method: "POST",
          body: JSON.stringify({
            title,
            desc,
            image,
            content,
            userName: session.data?.user?.name,
          }),
        }).finally(() => {
          mutate();
          // e.target.reset();
        });
      }
    } catch (error) {}
  };

  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (error) {
      console.log(error);
    }
  };

  if (session.status == "authenticated") {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {isLoading
            ? "Loading..."
            : data.map((post: IPost) => (
                <div className={styles.post} key={post._id}>
                  <div className={styles.imgContainer}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={200}
                      height={100}
                    />
                  </div>
                  <h2 className={styles.postTitle}>{post.title}</h2>
                  <span
                    className={styles.delete}
                    onClick={() => handleDelete(post._id)}
                  >
                    X
                  </span>
                </div>
              ))}
        </div>

        <form className={styles.new} onSubmit={handleSubmit}>
          <h2>Add New Post</h2>
          <input
            type="text"
            name="title"
            placeholder="Title"
            className={styles.input}
          />
          <input
            type="text"
            name="desc"
            placeholder="Desc"
            className={styles.input}
          />
          <input
            type="text"
            name="img"
            placeholder="Image"
            className={styles.input}
          />
          <textarea
            cols={30}
            rows={10}
            className={styles.textArea}
            name="content"
          />
          <button className={styles.button}> Send</button>
        </form>
      </div>
    );
  }
};

export default Dashboard;
