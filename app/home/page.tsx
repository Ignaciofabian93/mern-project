"use client";
import React, { useEffect } from "react";
import PageLayout from "@/components/Layout/PageLayout";
import { getUserData } from "@/slices/userSlice";
import { getHistoryForecast, getRealTimeForecast } from "@/slices/apiSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useRouter } from "next/navigation";
import InfoCard from "@/components/Cards/InfoCard";
import Map from "@/components/Maps/Map";

const Home = () => {
  const dispatch = useAppDispatch();
  const { realTime } = useAppSelector((store) => store.api);
  const router = useRouter();

  console.log("real time: ", realTime);

  useEffect(() => {
    handleGetRealTimeForecast();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGetRealTimeForecast = async () => {
    const params = {
      city: "Santiago",
    };
    await dispatch(getRealTimeForecast(params));
  };

  // const initialData = [
  //   { time: "2018-12-22", value: 32.51 },
  //   { time: "2018-12-23", value: 31.11 },
  //   { time: "2018-12-24", value: 27.02 },
  //   { time: "2018-12-25", value: 27.32 },
  //   { time: "2018-12-26", value: 25.17 },
  //   { time: "2018-12-27", value: 28.89 },
  //   { time: "2018-12-28", value: 25.46 },
  //   { time: "2018-12-29", value: 23.92 },
  //   { time: "2018-12-30", value: 22.68 },
  //   { time: "2018-12-31", value: 22.67 },
  // ];

  // const handleWeatherOption = (path: string) => {
  //   router.push(`/home/${path}`);
  // };

  return (
    <PageLayout>
      <div className="flex gap-2 w-full h-full">
        <div className="flex flex-col w-2/3 justify-between gap-2 h-full">
          <div className="bg-slate-600 w-full h-1/2 flex items-center rounded-lg"></div>
          <div className="w-full h-1/2 flex justify-between items-center">
            <InfoCard
              weather={realTime.current.condition.text}
              dataFrom={realTime.current.last_updated}
              temperatureC={realTime.current.temp_c}
              windKph={realTime.current.wind_kph}
              humidity={realTime.current.humidity}
              city={realTime.location.name}
              country={realTime.location.country}
            />
            <Map
              coordinates={{
                latitude: realTime.location.lat,
                longitude: realTime.location.lon,
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
