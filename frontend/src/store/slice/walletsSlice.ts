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
    WALLETS_REQUEST: (state) => {
      state.isLoading = true;
      state.success = false;
    },
    WALLETS_SUCCESS: (state) => {
      state.isLoading = false;
      state.success = true;
      delete state.error;
    },
    WALLETS_FAIL: (state, action) => {
      state.isLoading = false;
      state.success = false;
      state.error = action.payload;
    },
    WALLETS_RESET: (state) => {
      state.isLoading = false;
      state.success = false;
    },
  },
});

export const {
  WALLETS_REQUEST,
  WALLETS_SUCCESS,
  WALLETS_FAIL,
  WALLETS_RESET,
} = wallets.actions;

export default wallets.reducer;
