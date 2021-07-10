import { createSlice } from "@reduxjs/toolkit";
import { IOptionalProgramsState } from "../../types/types";

const initialState: IOptionalProgramsState = {
  isLoading: false,
  optionalPrograms: [],
  optionalProgram: {},
  error: {},
};

export const optionalProgram = createSlice({
  name: "optionalProgram",
  initialState,
  reducers: {
    OPTIONAL_PROGRAMS_REQUEST: (state) => {
      state.isLoading = true;
    },
    OPTIONAL_PROGRAMS_SUCCESS: (state, action) => {
      state.isLoading = false;
      state.optionalPrograms = action.payload;
      delete state.error;
    },
    OPTIONAL_PROGRAMS_FAIL: (state, action) => {
      state.isLoading = false;
      state.optionalPrograms = [];
      state.error = action.payload;
    },
    OPTIONAL_PROGRAM_REQUEST: (state) => {
      state.isLoading = true;
    },
    OPTIONAL_PROGRAM_SUCCESS: (state, action) => {
      state.isLoading = false;
      state.optionalProgram = action.payload;
      delete state.error;
    },
    OPTIONAL_PROGRAM_FAIL: (state, action) => {
      state.isLoading = false;
      state.optionalProgram = {};
      state.error = action.payload;
    },
  },
});

export const {
  OPTIONAL_PROGRAMS_REQUEST,
  OPTIONAL_PROGRAMS_SUCCESS,
  OPTIONAL_PROGRAMS_FAIL,
  OPTIONAL_PROGRAM_REQUEST,
  OPTIONAL_PROGRAM_SUCCESS,
  OPTIONAL_PROGRAM_FAIL,
} = optionalProgram.actions;

export default optionalProgram.reducer;
