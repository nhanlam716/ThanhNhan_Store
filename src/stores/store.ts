import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../stores/slices/cardSlices";
import authReducer from "../stores/slices/authSlices";
export const store = configureStore({
  reducer: {
    cartState: cartReducer,
    authState: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
