import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RealTimeProps } from "@/interfaces/realtime";

interface CurrentWeatherProps {
  city: string;
}

export const getRealTimeForecast = createAsyncThunk(
  "current/getRealTimeForecast",
  async (params: CurrentWeatherProps) => {
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

interface InitialProps {
  isLoading: boolean;
  current: RealTimeProps;
}

const initialState: InitialProps = {
  isLoading: false,
  current: {
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
      last_updated_epoch: "",
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
};

export const currentSlice = createSlice({
  name: "current",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRealTimeForecast.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRealTimeForecast.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.current = payload;
      })
      .addCase(getRealTimeForecast.rejected, (state, { error }) => {
        state.isLoading = false;
        console.log(error);
      })
      .addDefaultCase((state) => {
        return state;
      });
  },
});

export default currentSlice.reducer;
