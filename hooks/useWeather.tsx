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
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    handleGetData();
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

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
    if (!city) {
      setMessage("Please enter a city");
      return;
    } else {
      await dispatch(getRealTimeForecast({ city }));
      await dispatch(getAstronomy({ city }));
      await dispatch(getForecast({ city }));
    }
  };

  const handleGetForecast = async () => {
    if (city !== "" && days !== 0 && date !== "") {
      await dispatch(getForecast({ city, days, date }));
    }
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
