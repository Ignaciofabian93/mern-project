import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "@/config/endpoint";

interface RegisterProps {
  name: string;
  lastname: string;
  email: string;
  password: string;
}

interface LoginProps {
  email: string;
  password: string;
}

interface SessionProps {
  _id: string;
  name: string;
  lastname: string;
  email: string;
}

interface InitialProps {
  userData: SessionProps;
  token: string;
  isLoading: boolean;
  message: string;
}

export const login = createAsyncThunk(
  "user/login",
  async (user: LoginProps) => {
    const response = await api.post("/login", user);
    if (response.status === 200) {
      return response.data;
    } else {
      return response.data.message;
    }
  }
);

export const register = createAsyncThunk(
  "user/register",
  async (user: RegisterProps) => {
    const response = await api.post("/register", user);
    return response.data;
  }
);

export const getUserData = createAsyncThunk(
  "user/getUserData",
  async (token: string) => {
    const response = await api.get("/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  }
);

const initialState: InitialProps = {
  userData: {
    _id: "",
    name: "",
    lastname: "",
    email: "",
  },
  token: "",
  message: "",
  isLoading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = "";
      state.userData = {
        _id: "",
        name: "",
        lastname: "",
        email: "",
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.token = payload.token;
        state.message = payload.message;
      })
      .addCase(login.rejected, (state, { error }) => {
        state.isLoading = false;
        state.message = error.message ? error.message : "Error";
      })
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.message = payload;
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getUserData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserData.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.userData = payload.userData;
      })
      .addCase(getUserData.rejected, (state) => {
        state.isLoading = false;
        state.message = "Not Authorized";
      })
      .addDefaultCase((state) => {
        return state;
      });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
