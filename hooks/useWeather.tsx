import { useEffect, useState } from "react";
import { getRealTimeForecast } from "@/slices/currentSlice";
import { getAstronomy } from "@/slices/astronomySlice";
import { useAppDispatch } from "@/store/store";
import { getForecast } from "@/slices/forecastSlice";

const useWeather = () => {
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    handleGetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
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

  return {
    handleChange,
    city,
    handleGetData,
    message,
  };
};

export default useWeather;
