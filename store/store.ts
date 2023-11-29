import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import userSlice from "@/slices/userSlice";
import apiSlice from "@/slices/apiSlice";
import currentSlice from "@/slices/currentSlice";
import astronomySlice from "@/slices/astronomySlice";
import forecastSlice from "@/slices/forecastSlice";
import statisticSlice from "@/slices/statisticSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    api: apiSlice,
    current: currentSlice,
    astronomy: astronomySlice,
    forecast: forecastSlice,
    statistics: statisticSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
