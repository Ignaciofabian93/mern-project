import { useEffect, useState } from "react";
import { getRealTimeForecast } from "@/slices/currentSlice";
import { getAstronomy } from "@/slices/astronomySlice";
import { useAppDispatch } from "@/store/store";
import { getStatistics } from "@/slices/statisticSlice";
import { getForecast } from "@/slices/forecastSlice";

const useWeather = () => {
  const [city, setCity] = useState("Cork");
  const [days, setDays] = useState(7);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const dispatch = useAppDispatch();

  useEffect(() => {
    handleGetData();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "city") {
      setCity(value);
    } else if (name === "days") {
      setDays(Number(value));
    } else if (name === "date") {
      setDate(value);
    }
  };

  const handleGetData = async () => {
    await dispatch(getRealTimeForecast({ city }));
    await dispatch(getAstronomy({ city }));
  };

  const handleGetForecast = async () => {
    await dispatch(getForecast({ city, days, date }));
  };

  const handleGetStatistics = async () => {
    if (date !== "") {
      await dispatch(getStatistics({ city, date }));
    }
  };

  return {
    handleChange,
    city,
    handleGetData,
    date,
    days,
    handleGetForecast,
    handleGetStatistics,
  };
};

export default useWeather;
