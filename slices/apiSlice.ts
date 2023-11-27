import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  ForecastObjectProps,
  RealTimeWeatherProps,
} from "@/interfaces/weather";

interface ForecastParamsProps {
  city: string;
  date?: string;
}

export const getRealTimeForecast = createAsyncThunk(
  "forecast/getRealTimeForecast",
  async (params: ForecastParamsProps) => {
    try {
      const { city } = params;
      const options = {
        method: "GET",
        url: "https://weatherapi-com.p.rapidapi.com/current.json",
        params: { q: city },
        headers: {
          "X-RapidAPI-Key":
            "fc73350737mshae0922d6a49d4f2p1cf5c0jsn5b57c181b999",
          "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        },
      };
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getHistoryForecast = createAsyncThunk(
  "forecast/getForecast",
  async (params: ForecastParamsProps) => {
    try {
      const { city, date } = params;
      const options = {
        method: "GET",
        url: "https://weatherapi-com.p.rapidapi.com/history.json",
        params: {
          q: city,
          dt: date,
          lang: "en",
        },
        headers: {
          "X-RapidAPI-Key":
            "fc73350737mshae0922d6a49d4f2p1cf5c0jsn5b57c181b999",
          "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        },
      };
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

interface InitialProps {
  isLoading: boolean;
  forecast: ForecastObjectProps;
  realTime: RealTimeWeatherProps;
}

const initialState: InitialProps = {
  isLoading: false,
  realTime: {
    location: {
      name: "",
      region: "",
      country: "",
      lat: 0,
      lon: 0,
      tz_id: "",
      localtime_epoch: 0,
      localtime: "",
    },
    current: {
      last_updated_epoch: 0,
      last_updated: "",
      temp_c: 0,
      temp_f: 0,
      is_day: 0,
      condition: {
        text: "",
        icon: "",
        code: 0,
      },
      wind_mph: 0,
      wind_kph: 0,
      wind_degree: 0,
      wind_dir: "",
      pressure_mb: 0,
      pressure_in: 0,
      precip_mm: 0,
      precip_in: 0,
      humidity: 0,
      cloud: 0,
      feelslike_c: 0,
      feelslike_f: 0,
      vis_km: 0,
      vis_miles: 0,
      uv: 0,
      gust_mph: 0,
      gust_kph: 0,
    },
  },
  forecast: {
    location: {
      name: "",
      region: "",
      country: "",
      lat: 0,
      lon: 0,
      tz_id: "",
      localtime_epoch: 0,
      localtime: "",
    },
    forecast: {
      forecastday: [],
    },
  },
};

export const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getHistoryForecast.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getHistoryForecast.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.forecast = payload;
      })
      .addCase(getHistoryForecast.rejected, (state, { error }) => {
        state.isLoading = false;
        console.log(error);
      })
      .addCase(getRealTimeForecast.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRealTimeForecast.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.realTime = payload;
      })
      .addCase(getRealTimeForecast.rejected, (state) => {
        state.isLoading = false;
      })
      .addDefaultCase((state) => {
        return state;
      });
  },
});

export default apiSlice.reducer;
