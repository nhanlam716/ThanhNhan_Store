import {
  createAsyncThunk,
  createSlice,
  current,
  PayloadAction,
} from "@reduxjs/toolkit";
import { axiosClient } from "../../api/axiosClient";
import { IProduct } from "../../components/card/Cards";

// export const fetchProductAPI = () => {
//   return async (dispatch: any) => {
//      try {
//         dispatch({
//            type: SET_LOADING,
//            payload: true,
//         });
//         /** https://jsonplaceholder.typicode.comhttps://dummyjson.com/products */
//         const res: any = await axiosInstance.get(
//            "https://dummyjson.com/products",
//            {
//               baseURL: "/",
//            }
//         );
//         dispatch(setProducts(res.products));
//      } catch (error) {}
//   };
// };

/** Để gọi được API trong redux toolkit mình sẽ sử dụng hàm createAsyncThunk từ redux toolkit:
 * createAsyncThunk(tên, callback):
 * tên: tên slice / tên hàm
 * callback: async function dùng để mình gọi API, hàm này nó sẽ nhận vào 2 tham số
 *  1: payload: giá trị mà UI muốn gởi lên
 *  2: thunkAPI: Cái này là một object được cung cấp default bởi th redux toolkit cho phép user custom data trả về
 */

export const fetchCartItemsAPI = createAsyncThunk(
  "cartSlice/fetchCartItemsAPI",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res: any = await axiosClient.get(
        "http://localhost:5000/productsCards",
        {
          baseURL: "/",
        }
      );
      return res;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

interface IAddToCart {
  id: number;
  title: string;
  price: number;
}

export interface ICartItems {
  id: number;
  title: string;
  price: number;
  quality: number;
}

interface IInitialState {
  cartItems: ICartItems[];
  isLoggedIn: boolean;
  products: IProduct[];
  isLoadingProduct: boolean;
}

const initialState: IInitialState = {
  cartItems: [],
  isLoggedIn: false,
  products: [],
  isLoadingProduct: false,
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IAddToCart>) => {
      /** Để lấy được state thì mình cần phải dùng current(state) để bọc state lại
       * và sau đó sẽ chấm tới giá trị mình muốn lấy
       */
      const cloneCartItems = [...current(state).cartItems];

      const existedCart = cloneCartItems.find((cart) => {
        return cart.id === action.payload.id;
      });

      /** Kiểm tra nếu chưa có thì set quality bằng 1 */
      if (!existedCart) {
        const newCart = {
          ...action.payload,
          quality: 1,
        };
        cloneCartItems.push(newCart);
      } else {
        /** Nếu đã có rồi thì mình sẽ tăng quality của sản phẩm hiện tại (exitedCart) */
        const newCart = {
          ...existedCart,
          quality: existedCart.quality + 1,
        };
        /** Tìm vị trí của sản phẩm hiện tại trong mảng to (cloneCartItems) */
        const index = cloneCartItems.findIndex(
          (cart) => cart.id === action.payload.id
        );
        /** Sau khi có rồi thì mình sẽ replace vị trí index đó với sản phẩm vừa được update */
        cloneCartItems[index] = newCart;
      }

      state.cartItems = cloneCartItems;
    },
    setProducts: (state, action: PayloadAction<ICartItems[]>) => {},
    setLoading: (state, action: PayloadAction<boolean>) => {},
    removedFromCart: (state, action: PayloadAction<number>) => {
      const _cartItems = [...current(state).cartItems];
      const newCartItems = _cartItems.filter((cart) => {
        return cart.id !== action.payload;
      });

      state.cartItems = newCartItems;
    },
    increaseQuality: (state, action: PayloadAction<number>) => {
      /** Clone mảng cart ban đầu ra */
      const _cartItemsIncrease = [...state.cartItems];

      /** Tìm vị trí của cart nằm trong mảng đó */
      const cartIndex = _cartItemsIncrease.findIndex((cart) => {
        return cart.id === action.payload;
      });

      /** Update vị trí của cart với quality mới */
      _cartItemsIncrease[cartIndex].quality += 1;

      state.cartItems = _cartItemsIncrease;
    },
    decreaseQuality: (state, action: PayloadAction<number>) => {
      /** Clone mảng cart ban đầu ra */
      const _cartItemsDecrease = [...state.cartItems];

      /** Tìm vị trí của cart nằm trong mảng đó */
      const cartDecreaseIndex = _cartItemsDecrease.findIndex((cart) => {
        return cart.id === action.payload;
      });

      /** Update vị trí của cart với quality mới */
      const currentCart = _cartItemsDecrease[cartDecreaseIndex];

      /** Kiểm tra số lượng cart phải lớn hơn 1 thì mới cho trừ */
      if (currentCart.quality > 1) {
        _cartItemsDecrease[cartDecreaseIndex].quality -= 1;
      }

      state.cartItems = _cartItemsDecrease;
    },
    changeStatus: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCartItemsAPI.pending, (state, action) => {
      state.isLoadingProduct = true;
    });
    builder.addCase(fetchCartItemsAPI.fulfilled, (state, action) => {
      state.products = action.payload.products;
      state.isLoadingProduct = false;
    });
    builder.addCase(fetchCartItemsAPI.rejected, (state, action) => {
      state.products = [];
      state.isLoadingProduct = false;
    });
  },
});

export const {
  addToCart,
  changeStatus,
  decreaseQuality,
  increaseQuality,
  removedFromCart,
  setLoading,
  setProducts,
} = cartSlice.actions;

export default cartSlice.reducer;
