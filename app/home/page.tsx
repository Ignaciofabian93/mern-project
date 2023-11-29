"use client";
import React from "react";
import PageLayout from "@/components/Layout/PageLayout";
import { useAppSelector } from "@/store/store";
import InfoCard from "@/components/Cards/InfoCard";
import Map from "@/components/Maps/Map";
import useCurrentWeather from "@/hooks/useCurrentWeather";
import SmallInput from "@/components/Inputs/SmallInput";
import CustomButton from "@/components/Buttons/Button";
import Image from "next/image";
import {
  sunriseIcon,
  sunsetIcon,
  moonriseIcon,
  moonsetIcon,
} from "@/constants/icons";
import { CircularProgress } from "@nextui-org/react";

const Home = () => {
  const { handleChangeCity, city, handleGetData } = useCurrentWeather();
  const { current } = useAppSelector((state) => state.current);
  const { astronomy } = useAppSelector((state) => state.astronomy);

  console.log("astronomy: ", astronomy);

  return (
    <PageLayout>
      <div className="flex gap-2 w-full h-full">
        <div className="flex flex-col w-2/3 justify-between gap-2 h-full">
          <div className="bg-white/70 w-full h-1/2 flex justify-between rounded-lg px-4 py-4">
            <div className="h-full w-fit">
              <p className="text-md font-semibold mb-2">Write a city name</p>
              <SmallInput
                type={"text"}
                name="city"
                value={city}
                onChange={handleChangeCity}
                label={"City"}
              />
              <div className="flex items-end justify-between w-56 h-2/3 pb-4">
                <CustomButton text={"Search"} onClick={handleGetData} />
              </div>
            </div>
            <div className="h-full w-1/3 py-2 flex flex-col justify-center">
              {astronomy ? (
                <>
                  <div className="flex items-center justify-left mb-4">
                    <Image src={sunriseIcon} alt="sunrise" />
                    <p className="font-semibold ml-4">
                      Sunrise: {astronomy.astronomy.astro.sunrise}
                    </p>
                  </div>
                  <div className="flex items-center justify-left mb-4">
                    <Image src={sunsetIcon} alt="sunset" />
                    <p className="font-semibold ml-4">
                      Sunset: {astronomy.astronomy.astro.sunset}
                    </p>
                  </div>
                  <div className="flex items-center justify-left mb-4">
                    <Image src={moonriseIcon} alt="moonrise" />
                    <p className="font-semibold ml-4">
                      Moonrise: {astronomy.astronomy.astro.moonrise}
                    </p>
                  </div>
                  <div className="flex items-center justify-left mb-4">
                    <Image src={moonsetIcon} alt="moonset" />
                    <p className="font-semibold ml-4">
                      Moonset: {astronomy.astronomy.astro.moonset}
                    </p>
                  </div>
                </>
              ) : (
                <CircularProgress size="sm" aria-label="loading..." />
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
              city={city}
              coordinates={{
                latitude: current.location.lat,
                longitude: current.location.lon,
              }}
            />
          </div>
        </div>
        <div className="w-1/3 h-full bg-slate-500 rounded-lg"></div>
      </div>
    </PageLayout>
  );
};

export default Home;
