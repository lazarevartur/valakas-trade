import { createSlice } from "@reduxjs/toolkit";
import { IWalletsState } from "../../types/types";

const initialState: IWalletsState = {
  isLoading: false,
  success: false,
  error: {},
};

export const wallets = createSlice({
  name: "wallets",
  initialState,
  reducers: {
    MRX_WALLETS_REQUEST: (state) => {
      state.isLoading = true;
      state.success = false;
    },
    MRX_WALLETS_SUCCESS: (state) => {
      state.isLoading = false;
      state.success = true;
      delete state.error;
    },
    MRX_WALLETS_FAIL: (state, action) => {
      state.isLoading = false;
      state.success = false;
      state.error = action.payload;
    },
    MRX_WALLETS_RESET: (state) => {
      state.isLoading = false;
      state.success = false;
    },
  },
});

export const {
  MRX_WALLETS_REQUEST,
  MRX_WALLETS_SUCCESS,
  MRX_WALLETS_FAIL,
  MRX_WALLETS_RESET,
} = wallets.actions;

export default wallets.reducer;
