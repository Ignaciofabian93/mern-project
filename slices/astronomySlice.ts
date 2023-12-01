import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AstronomyProps } from "@/interfaces/astronomy";

interface AstronomyForecastProps {
  city: string;
}

export const getAstronomy = createAsyncThunk(
  "astronomy/getAstronomy",
  async (params: AstronomyForecastProps) => {
    try {
      const { city } = params;
      const options = {
        method: "GET",
        url: "https://weatherapi-com.p.rapidapi.com/astronomy.json",
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
  astronomy: AstronomyProps;
}

const initialState: InitialProps = {
  isLoading: false,
  astronomy: {
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
    astronomy: {
      astro: {
        sunrise: "",
        sunset: "",
        moonrise: "",
        moonset: "",
        moon_phase: "",
        moon_illumination: 0,
        is_moon_up: 0,
        is_sun_up: 0,
      },
    },
  },
};

export const astronomySlice = createSlice({
  name: "astronomy",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAstronomy.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAstronomy.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.astronomy = payload;
      })
      .addCase(getAstronomy.rejected, (state, { error }) => {
        state.isLoading = false;
        console.log(error);
      })
      .addDefaultCase((state) => {
        return state;
      });
  },
});

export default astronomySlice.reducer;
