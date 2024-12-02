import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILocation } from "../../pages/HomeStore/checkout/formProvinces/FormProvinces";
import { axiosClient } from "../../api/axiosClient";

interface ProvinceState {
  provinces: ILocation[];
  districts: ILocation[];
  wards: ILocation[];
  loading: boolean;
  error: string | null;
  selectedProvince: string | null;
  selectedDistrict: string | null;
  selectedWard: string | null;
}

const initialState: ProvinceState = {
  provinces: [],
  districts: [],
  wards: [],
  loading: false,
  error: null,
  selectedProvince: null,
  selectedDistrict: null,
  selectedWard: null,
};

export const fetchProvinces = createAsyncThunk(
  "location/fetchProvinces",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axiosClient.get(
        "https://esgoo.net/api-tinhthanh/1/0.htm"
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchDistricts = createAsyncThunk(
  "location/fetchDistricts",
  async (provinceCode: string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axiosClient.get(
        `https://esgoo.net/api-tinhthanh/2/${provinceCode}.htm`
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchWards = createAsyncThunk(
  "location/fetchWards",
  async (districtCode: string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axiosClient.get(
        `https://esgoo.net/api-tinhthanh/3/${districtCode}.htm`
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    resetDistrictsAndWards(state) {
      state.districts = [];
      state.wards = [];
    },
    resetWards(state) {
      state.wards = [];
    },
    setSelectedProvince(state, action: PayloadAction<string | null>) {
      state.selectedProvince = action.payload;
    },
    setSelectedDistrict(state, action: PayloadAction<string | null>) {
      state.selectedDistrict = action.payload;
    },
    setSelectedWard(state, action: PayloadAction<string | null>) {
      state.selectedWard = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProvinces.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchProvinces.fulfilled, (state, action) => {
      state.provinces = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchProvinces.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
    builder.addCase(fetchDistricts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchDistricts.fulfilled, (state, action) => {
      state.districts = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchDistricts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
    builder.addCase(fetchWards.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchWards.fulfilled, (state, action) => {
      state.wards = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchWards.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export const {
  resetDistrictsAndWards,
  resetWards,
  setSelectedProvince,
  setSelectedDistrict,
  setSelectedWard,
} = locationSlice.actions;
export default locationSlice.reducer;
