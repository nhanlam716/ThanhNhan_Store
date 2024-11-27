import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosClient } from "../../api/axiosClient";

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
interface AuthState {
  users: UserData[];
  user: UserData | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  users: [],
  user: null,
  isLoading: false,
  error: null,
};

export const registerUser = createAsyncThunk<
  any,
  {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
  }
>("auth/registerUser", async (userData, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const response: UserData[] = await axiosClient.get("/users");
    const userRegister = response?.find(
      (item) => item?.email === userData.email
    );

    if (userRegister) return;

    const responses = await axiosClient.post("/users", userData);

    return responses;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const loginUser = createAsyncThunk<
  any,
  { email: string; password: string }
>("auth/loginUser", async (userData, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;

  try {
    const response: UserData[] = await axiosClient.get("/users");
    const user = response?.find(
      (item) =>
        item?.password === userData.password && item?.email === userData.email
    );

    return user;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
