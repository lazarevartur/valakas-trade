import { createSlice } from "@reduxjs/toolkit";
import { IUserDashboardState } from "../../types/types";
import { Storage } from "../../utils/utils";
import { StoregeKey } from "../../config";

const initialState: IUserDashboardState = {
  isLoading: false,
  userDashboard: Storage.has(StoregeKey.USER_DATA)
    ? Storage.get(StoregeKey.USER_DATA)
    : {},
  error: {},
};

export const userDashboard = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    USER_DASHBOARD_REQUEST: (state) => {
      state.isLoading = true;
    },
    USER_DASHBOARD_SUCCESS: (state, action) => {
      state.isLoading = false;
      state.userDashboard = action.payload;
      delete state.error;
    },
    USER_DASHBOARD_FAIL: (state, action) => {
      state.isLoading = false;
      state.userDashboard = {};
      state.error = action.payload;
    },
    USER_DASHBOARD_CHEK_AUTH: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  USER_DASHBOARD_REQUEST,
  USER_DASHBOARD_SUCCESS,
  USER_DASHBOARD_FAIL,
  USER_DASHBOARD_CHEK_AUTH,
} = userDashboard.actions;

export default userDashboard.reducer;
