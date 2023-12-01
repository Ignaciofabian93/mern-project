import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { StatisticsProps } from "@/interfaces/statistics";

interface StatisticForecastProps {
  city: string;
  date: string; //YYYY-MM-DD 1week ago only
}

export const getStatistics = createAsyncThunk(
  "statistics/getStatistics",
  async (params: StatisticForecastProps) => {
    try {
      const { city, date } = params;
      const options = {
        method: "GET",
        url: "https://weatherapi-com.p.rapidapi.com/history.json",
        params: {
          q: city,
          dt: date,
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
  statistics: StatisticsProps;
}

const initialState: InitialProps = {
  isLoading: false,
  statistics: {
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

export const statisticSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStatistics.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getStatistics.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.statistics = payload;
      })
      .addCase(getStatistics.rejected, (state, { error }) => {
        state.isLoading = false;
        console.log(error);
      })
      .addDefaultCase((state) => {
        return state;
      });
  },
});

export default statisticSlice.reducer;
