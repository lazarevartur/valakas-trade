import { createSlice } from "@reduxjs/toolkit";
import { IUserDashboardState } from "../../types/types";

const initialState: IUserDashboardState = {
  isLoading: false,
  userDashboard: {},
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
  },
});

export const {
  USER_DASHBOARD_REQUEST,
  USER_DASHBOARD_SUCCESS,
  USER_DASHBOARD_FAIL,
} = userDashboard.actions;

export default userDashboard.reducer;
