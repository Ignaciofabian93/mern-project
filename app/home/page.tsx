"use client";
import React from "react";
import PageLayout from "@/components/Layout/PageLayout";
import { useAppSelector } from "@/store/store";
import InfoCard from "@/components/Cards/InfoCard";
import Map from "@/components/Maps/Map";
import useWeather from "@/hooks/useWeather";
import SmallInput from "@/components/Inputs/SmallInput";
import CustomButton from "@/components/Buttons/Button";
import Image from "next/image";
import { sunriseIcon, sunsetIcon, moonriseIcon, moonsetIcon } from "@/constants/icons";
import { CircularProgress } from "@nextui-org/react";
import Linechart from "@/components/Charts/LineChart";
import { useRouter } from "next/navigation";

const Home = () => {
  const { handleChange, city, handleGetData } = useWeather();
  const { current } = useAppSelector((state) => state.current);
  const { astronomy } = useAppSelector((state) => state.astronomy);
  const { forecast } = useAppSelector((state) => state.forecast);

  const router = useRouter();

  const data = forecast ? forecast.forecast.forecastday.map((el) => el.hour) : [];

  return (
    <PageLayout>
      <div className="flex gap-2 w-full h-full">
        <div className="flex flex-col w-2/3 justify-between gap-2 h-full">
          <div className="bg-white/70 w-full h-1/2 flex justify-between rounded-lg px-4 py-4 gap-4">
            <Linechart data={data[0]} />
            <div className="flex w-[240px] h-full justify-center items-end">
              {data[0] ? (
                <CustomButton
                  text={"See charts"}
                  onClick={() => router.push(`/home/${city.toLowerCase()}`)}
                />
              ) : (
                <div className="w-[300px] h-full flex justify-center items-center">
                  <CircularProgress size="sm" aria-label="loading..." />
                </div>
              )}
            </div>
          </div>
          <div className="w-full h-1/2 flex justify-between items-center">
            <InfoCard
              weather={current.current.condition.text}
              dataFrom={current.current.last_updated}
              temperatureC={current.current.temp_c}
              windKph={current.current.wind_kph}
              humidity={current.current.humidity}
              city={current.location.name}
              country={current.location.country}
            />
            <Map
              city={current.location.name}
              coordinates={{
                latitude: current.location.lat,
                longitude: current.location.lon,
              }}
            />
          </div>
        </div>
        <div className="w-1/3 h-full flex flex-col justify-between">
          <div className="w-full flex justify-between  bg-white/70 rounded-lg px-4 py-4">
            <div>
              <p className="text-sm font-semibold mb-2">Write a city name:</p>
              <SmallInput
                type={"text"}
                name="city"
                value={city}
                onChange={handleChange}
                label={"City"}
              />
            </div>
            <div className="flex mt-8">
              <CustomButton text={"Search"} onClick={handleGetData} />
            </div>
          </div>
          <div className="h-fit w-full flex flex-col justify-center  bg-white/70 rounded-lg px-4 py-4">
            {astronomy ? (
              <div className="flex flex-col w-full h-full justify-center">
                <div className="flex items-center justify-left mb-4">
                  <Image src={sunriseIcon} alt="sunrise" />
                  <p className="font-semibold ml-4">Sunrise: {astronomy.astronomy.astro.sunrise}</p>
                </div>
                <div className="flex items-center justify-left mb-4">
                  <Image src={sunsetIcon} alt="sunset" />
                  <p className="font-semibold ml-4">Sunset: {astronomy.astronomy.astro.sunset}</p>
                </div>
                <div className="flex items-center justify-left mb-4">
                  <Image src={moonriseIcon} alt="moonrise" />
                  <p className="font-semibold ml-4">
                    Moonrise: {astronomy.astronomy.astro.moonrise}
                  </p>
                </div>
                <div className="flex items-center justify-left mb-4">
                  <Image src={moonsetIcon} alt="moonset" />
                  <p className="font-semibold ml-4">Moonset: {astronomy.astronomy.astro.moonset}</p>
                </div>
              </div>
            ) : (
              <CircularProgress size="sm" aria-label="loading..." />
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Home;
