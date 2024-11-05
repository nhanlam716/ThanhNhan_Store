import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosClient } from "../../api/axiosClient";

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// export const loginUser = createAsyncThunk(
//   "auth/loginUser",
//   async (_, thunkAPI) => {
//     const { rejectWithValue } = thunkAPI;
//     try {
//       const response = await axiosClient.post("/users");
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

export const registerUser = createAsyncThunk<
  UserData,
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
    const response = await axiosClient.post("/users", userData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const loginUser = createAsyncThunk<
  UserData,
  { email: string; password: string }
>("auth/loginUser", async (userData, { rejectWithValue }) => {
  try {
    const response = await axiosClient.post("/users", userData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

// export const registerUser = createAsyncThunk<
//   UserData,
//   {
//     firstName: string;
//     lastName: string;
//     email: string;
//     password: string;
//     confirmPassword: string;
//   }
// >("auth/registerUser", async (userData, { rejectWithValue }) => {
//   try {
//     const response = await axiosClient.post("/users", userData);
//     return response.data;
//   } catch (error) {
//     return rejectWithValue(error);
//   }
// });

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

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    loginForm: (state) => {},
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
