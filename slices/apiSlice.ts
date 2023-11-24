import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ForecastObjectProps } from "@/interfaces/weather";

interface ForecastParamsProps {
  city: string;
  date: string;
}

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
      console.log("response forecast: ", response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

interface InitialProps {
  isLoading: boolean;
  forecast: ForecastObjectProps;
}

const initialState: InitialProps = {
  isLoading: false,
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
      .addDefaultCase((state) => {
        return state;
      });
  },
});

export default apiSlice.reducer;
