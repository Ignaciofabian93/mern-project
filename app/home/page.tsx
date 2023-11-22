"use client";
import React, { useEffect } from "react";
import { getUserData } from "@/slices/userSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";

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
  return <div>Home</div>;
};

export default Home;
