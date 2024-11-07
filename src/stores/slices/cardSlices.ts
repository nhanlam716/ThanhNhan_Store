import {
  createAsyncThunk,
  createSlice,
  current,
  PayloadAction,
} from "@reduxjs/toolkit";
import { axiosClient } from "../../api/axiosClient";
import { IProduct } from "../../types/types";

export const fetchCartItemsAPI = createAsyncThunk(
  "cartSlice/fetchCartItemsAPI",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res: any = await axiosClient.get("/productsCards");
      return res;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export interface CardItems extends IProduct {
  quantity: number;
}
interface IInitialState {
  Items: CardItems[];
  isLoadingProduct: boolean;
  data: IProduct[];
}

const initialState: IInitialState = {
  Items: [],
  isLoadingProduct: false,
  data: [],
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CardItems>) => {
      const cloneCartItems = [...current(state).Items];

      const existedCart = cloneCartItems.find((cart) => {
        return cart.id === action.payload.id;
      });

      if (!existedCart) {
        const newCart = {
          ...action.payload,
          quality: 1,
        };
        cloneCartItems.push(newCart);
      } else {
        const newCart = {
          ...existedCart,
          quality: existedCart.quantity + 1,
        };
        const index = cloneCartItems.findIndex(
          (cart) => cart.id === action.payload.id
        );
        cloneCartItems[index] = newCart;
      }

      state.Items = cloneCartItems;
    },
    removedFromCart: (state, action: PayloadAction<number>) => {
      const _cartItems = [...current(state).Items];

      const newCartItems = _cartItems.filter((item) => {
        return item.id !== action.payload;
      });

      state.Items = newCartItems;
    },
    increaseQuality: (state, action: PayloadAction<number>) => {
      const _cartItemsIncrease = [...state.Items];

      const cartIndex = _cartItemsIncrease.findIndex((cart) => {
        return cart.id === action.payload;
      });

      _cartItemsIncrease[cartIndex].quantity += 1;

      state.Items = _cartItemsIncrease;
    },
    decreaseQuality: (state, action: PayloadAction<number>) => {
      const _cartItemsDecrease = [...state.Items];

      const cartDecreaseIndex = _cartItemsDecrease.findIndex((cart) => {
        return cart.id === action.payload;
      });

      const currentCart = _cartItemsDecrease[cartDecreaseIndex];

      if (currentCart.quantity > 1) {
        _cartItemsDecrease[cartDecreaseIndex].quantity -= 1;
      }

      state.Items = _cartItemsDecrease;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCartItemsAPI.pending, (state, action) => {
      state.isLoadingProduct = true;
    });
    builder.addCase(fetchCartItemsAPI.fulfilled, (state, action) => {
      state.data = action.payload.data;
      state.isLoadingProduct = false;
    });
    builder.addCase(fetchCartItemsAPI.rejected, (state, action) => {
      state.data = [];
      state.isLoadingProduct = false;
    });
  },
});

export const { addToCart, decreaseQuality, increaseQuality, removedFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
