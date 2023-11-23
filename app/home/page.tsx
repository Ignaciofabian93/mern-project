"use client";
import React, { useEffect } from "react";
import PageLayout from "@/components/Layout/PageLayout";
import { getUserData } from "@/slices/userSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import Linechart from "@/components/Charts/LineChart";

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    handleGetUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGetUserData = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      const result = await dispatch(getUserData(token));
      console.log("result: ", result);
    }
  };

  const initialData = [
    { time: "2018-12-22", value: 32.51 },
    { time: "2018-12-23", value: 31.11 },
    { time: "2018-12-24", value: 27.02 },
    { time: "2018-12-25", value: 27.32 },
    { time: "2018-12-26", value: 25.17 },
    { time: "2018-12-27", value: 28.89 },
    { time: "2018-12-28", value: 25.46 },
    { time: "2018-12-29", value: 23.92 },
    { time: "2018-12-30", value: 22.68 },
    { time: "2018-12-31", value: 22.67 },
  ];

  return (
    <PageLayout>
      <h1>Home</h1>
      <Linechart data={initialData} />
    </PageLayout>
  );
};

export default Home;
