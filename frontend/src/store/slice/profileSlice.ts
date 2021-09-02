import { createSlice } from "@reduxjs/toolkit";
import { IUserProfileState } from "../../types/types";
import { Storage } from "../../utils/utils";
import { StoregeKey } from "../../config";

const initialState: IUserProfileState = {
    isLoading: false,
    userProfile: Storage.has(StoregeKey.USER_PROFILE)
        ? Storage.get(StoregeKey.USER_PROFILE)
        : {},
    error: {},
};

export const userProfile = createSlice({
    name: "Profile",
    initialState,
    reducers: {
        USER_PROFILE_REQUEST: (state) => {
            state.isLoading = true;
        },
        USER_PROFILE_SUCCESS: (state, action) => {
            state.isLoading = false;
            state.userProfile = action.payload;
            delete state.error;
        },
        USER_PROFILE_FAIL: (state, action) => {
            state.isLoading = false;
            state.userProfile = {};
            state.error = action.payload;
        },
    },
});

export const {
    USER_PROFILE_REQUEST,
    USER_PROFILE_SUCCESS,
    USER_PROFILE_FAIL,
} = userProfile.actions;

export default userProfile.reducer;
