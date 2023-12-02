"use client";
import React, { useEffect } from "react";
import ScreenLayout from "../_layout";
import { usePathname } from "next/navigation";
import useWeather from "@/hooks/useWeather";
import { useAppSelector } from "@/store/store";
import Linechart from "@/components/Charts/LineChart";

const WeatherDetails = () => {
  const path = usePathname();
  const { handleGetForecast, handleGetStatistics, city, date, days } = useWeather();
  const { forecast } = useAppSelector((store) => store.forecast);
  const { statistics } = useAppSelector((store) => store.statistics);

  console.log("FORECAST: ", forecast);
  console.log("STATISTICS: ", statistics);

  useEffect(() => {
    handleData();
  }, [city, date, days]);

  const handleData = async () => {
    if (path === "/home/forecast") {
      await handleGetForecast();
    } else if (path === "/home/statistics") {
      await handleGetStatistics();
    }
  };

  const dayChartData = forecast.forecast.forecastday.map((data) => data.hour);

  return (
    <ScreenLayout>
      <div className="w-full">
        <Linechart data={dayChartData[0]} />
      </div>
    </ScreenLayout>
  );
};

export default WeatherDetails;
