"use client";
import React, { useEffect } from "react";
import PageLayout from "@/components/Layout/PageLayout";
import { getUserData } from "@/slices/userSlice";
import { getHistoryForecast } from "@/slices/apiSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import CustomCard from "@/components/Cards/Card";
import { useRouter } from "next/navigation";
import {
  cardImage1,
  cardImage2,
  cardImage3,
  cardImage4,
} from "@/constants/images";
import Linechart from "@/components/Charts/LineChart";

const Home = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(getUserData(token));
    }
  }, [dispatch]);

  useEffect(() => {
    handleGetForecast();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGetForecast = async () => {
    const params = {
      city: "Santiago",
      date: "2023-11-20",
    };
    await dispatch(getHistoryForecast(params));
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

  const handleWeatherOption = (path: string) => {
    router.push(`/home/${path}`);
  };

  return (
    <PageLayout>
      <div className="h-full flex flex-col justify-evenly">
        <div className="flex items-center justify-evenly mb-4">
          <CustomCard
            image={cardImage1}
            desc1="Real time weather"
            desc2="Look for local or world weather information"
            onClick={() => handleWeatherOption("realtime")}
          />
          <CustomCard
            image={cardImage2}
            desc1="Forecast"
            desc2="Search for today's weather"
            onClick={() => handleWeatherOption("forecast")}
          />
        </div>
        <div className="flex items-center justify-evenly">
          <CustomCard
            image={cardImage3}
            desc1="Weather history"
            desc2="Look for past weather information"
            onClick={() => handleWeatherOption("history")}
          />
          <CustomCard
            image={cardImage4}
            desc1="Future weather"
            desc2="Get next hours weather"
            onClick={() => handleWeatherOption("future")}
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default Home;
