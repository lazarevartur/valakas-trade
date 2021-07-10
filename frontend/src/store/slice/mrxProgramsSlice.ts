import { createSlice } from "@reduxjs/toolkit";
import { IMrxProgramsState } from "../../types/types";

const initialState: IMrxProgramsState = {
  isLoading: false,
  mrxPrograms: [],
  mrxProgram: {},
  error: {},
};

export const mrxProgram = createSlice({
  name: "mrxPrograms",
  initialState,
  reducers: {
    MRX_PROGRAMS_REQUEST: (state) => {
      state.isLoading = true;
    },
    MRX_PROGRAMS_SUCCESS: (state, action) => {
      state.isLoading = false;
      state.mrxPrograms = action.payload;
      delete state.error;
    },
    MRX_PROGRAMS_FAIL: (state, action) => {
      state.isLoading = false;
      state.mrxPrograms = [];
      state.error = action.payload;
    },
    MRX_PROGRAM_REQUEST: (state) => {
      state.isLoading = true;
    },
    MRX_PROGRAM_SUCCESS: (state, action) => {
      state.isLoading = false;
      state.mrxProgram = action.payload;
      delete state.error;
    },
    MRX_PROGRAM_FAIL: (state, action) => {
      state.isLoading = false;
      state.mrxProgram = {};
      state.error = action.payload;
    },
  },
});

export const {
  MRX_PROGRAMS_REQUEST,
  MRX_PROGRAMS_SUCCESS,
  MRX_PROGRAMS_FAIL,
  MRX_PROGRAM_REQUEST,
  MRX_PROGRAM_SUCCESS,
  MRX_PROGRAM_FAIL,
} = mrxProgram.actions;

export default mrxProgram.reducer;
