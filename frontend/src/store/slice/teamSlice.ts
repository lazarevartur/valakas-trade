import { createSlice } from "@reduxjs/toolkit";
import { IUserTeamState } from "../../types/types";
import { Storage } from "../../utils/utils";
import { StoregeKey } from "../../config";

const initialState: IUserTeamState = {
  isLoading: false,
  userTeam: Storage.has(StoregeKey.USER_TEAM)
    ? Storage.get(StoregeKey.USER_TEAM)
    : {},
  error: {},
};

export const userTeam = createSlice({
  name: "team",
  initialState,
  reducers: {
    USER_TEAM_REQUEST: (state) => {
      state.isLoading = true;
    },
    USER_TEAM_SUCCESS: (state, action) => {
      state.isLoading = false;
      state.userTeam = action.payload;
      delete state.error;
    },
    USER_TEAM_FAIL: (state, action) => {
      state.isLoading = false;
      state.userTeam = {};
      state.error = action.payload;
    },
  },
});

export const {
  USER_TEAM_REQUEST,
  USER_TEAM_SUCCESS,
  USER_TEAM_FAIL,
} = userTeam.actions;

export default userTeam.reducer;
