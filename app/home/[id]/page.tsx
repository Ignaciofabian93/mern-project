"use client";
import React from "react";
import PageLayout from "@/components/Layout/PageLayout";
import Barchart from "@/components/Charts/Barchart";
import Donutchart from "@/components/Charts/Donutchart";
import { useAppSelector } from "@/store/store";
import { useRouter } from "next/navigation";
import CustomButton from "@/components/Buttons/Button";
import Linechart from "@/components/Charts/LineChart";

const WeatherDetails = () => {
  const { forecast } = useAppSelector((state) => state.forecast);
  console.log("fore!!", forecast);

  const router = useRouter();

  const tempLabels = ["Min Temp °C", "Max Temp °C", "Average Temp °C"];
  const tempData = forecast.forecast.forecastday[0]
    ? [
        { x: "Min", y: forecast.forecast.forecastday[0].day.mintemp_c },
        { x: "Max", y: forecast.forecast.forecastday[0].day.maxtemp_c },
        { x: "Avr", y: forecast.forecast.forecastday[0].day.avgtemp_c },
      ]
    : [];

  // const dayTemp = forecast.forecast.forecastday[0] ? [
  //   {x: forecast.forecast.forecastday[0].hour.map(el => el.time.slice(10)), y: forecast.forecast.forecastday[0].hour.map(el => el.temp_c)}
  // ] : []

  const humidityData = forecast.current ? [forecast.current.humidity] : [];
  const heat = 100 - humidityData[0];
  humidityData.push(heat);
  const chancesOfRain = forecast.forecast.forecastday[0]
    ? [forecast.forecast.forecastday[0].day.daily_chance_of_rain]
    : [];
  const noRain = 100 - chancesOfRain[0];
  chancesOfRain.push(noRain);

  const data = forecast ? forecast.forecast.forecastday.map((el) => el.hour) : [];

  return (
    <PageLayout>
      <div className="bg-white/70 w-full h-full flex flex-col px-4 py-2 rounded-lg">
        <div className="w-full h-[50px] flex items-center justify-end">
          <CustomButton text={"Go back"} onClick={() => router.push("/home")} />
        </div>
        <div className="w-full h-full flex flex-wrap gap-x-2 items-start justify-evenly mt-2">
          <div className="bg-white/70 w-[385px] h-[230px] rounded-lg shadow-md px-4 py-4 flex items-center justify-center">
            <Barchart info={tempData} labels={tempLabels} />
          </div>
          <div className="bg-white/70 w-[385px] h-[230px] rounded-lg shadow-md px-4 py-4 flex items-center justify-center">
            <Donutchart labels={["Humidity", "Heat"]} series={humidityData} />
          </div>
          <div className="bg-white/70 w-[385px] h-[230px] rounded-lg shadow-md px-4 py-4 flex items-center justify-center">
            <Donutchart labels={["Chances of rain", "No rain"]} series={chancesOfRain} />
          </div>
        </div>
        <div className="bg-white/70 w-full h-[240px] rounded-lg shadow-md px-4 py-4 flex items-center justify-center">
          <Linechart data={data[0]} />
        </div>
      </div>
    </PageLayout>
  );
};

export default WeatherDetails;
