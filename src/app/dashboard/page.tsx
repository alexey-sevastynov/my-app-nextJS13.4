"use client";

import React, { useEffect, useState } from "react";
import useSWR from "swr";

const Dashboard = () => {
  const fetcher = (...args: Parameters<typeof fetch>) =>
    fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );
  // const [data, setData] = useState([]);
  // const [error, setError] = useState<boolean>(false);
  // const [isLoading, setIsLoading] = useState<boolean>(true);

  // const getData = async () => {
  //   const responce = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
  //     cache: "no-store",
  //   });

  //   if (!responce.ok) {
  //     setError(true);
  //     throw new Error("failed to fetch data!");
  //   }
  //   setIsLoading(false);
  //   const data = await responce.json();
  //   setData(data);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  console.log(data);

  return <div>Dashboard</div>;
};

export default Dashboard;
