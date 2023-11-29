import { useEffect, useState } from "react";
import { getRealTimeForecast } from "@/slices/currentSlice";
import { getAstronomy } from "@/slices/astronomySlice";
import { useAppDispatch } from "@/store/store";

const useCurrentWeather = () => {
  const [city, setCity] = useState("Cork");
  const dispatch = useAppDispatch();

  useEffect(() => {
    handleGetData();
  }, []);

  const handleChangeCity = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const handleGetData = async () => {
    await dispatch(getRealTimeForecast({ city }));
    await dispatch(getAstronomy({ city }));
  };

  return { handleChangeCity, city, handleGetData };
};

export default useCurrentWeather;
