import { createSlice } from "@reduxjs/toolkit";
import { IPriorityProgramsState } from "../../types/types";

const initialState: IPriorityProgramsState = {
  isLoading: false,
  priorityPrograms: [],
  priorityProgram: {},
  priorityData: {},
  error: {},
};

export const priorityProgram = createSlice({
  name: "priorityProgram",
  initialState,
  reducers: {
    PRIORITY_PROGRAMS_REQUEST: (state) => {
      state.isLoading = true;
    },
    PRIORITY_PROGRAMS_SUCCESS: (state, action) => {
      state.isLoading = false;
      state.priorityPrograms = action.payload;
      delete state.error;
    },
    PRIORITY_PROGRAMS_FAIL: (state, action) => {
      state.isLoading = false;
      state.priorityPrograms = [];
      state.error = action.payload;
    },
    PRIORITY_PROGRAM_REQUEST: (state) => {
      state.isLoading = true;
    },
    PRIORITY_PROGRAM_SUCCESS: (state, action) => {
      state.isLoading = false;
      state.priorityProgram = action.payload;
      delete state.error;
    },
    PRIORITY_PROGRAM_FAIL: (state, action) => {
      state.isLoading = false;
      state.priorityProgram = {};
      state.error = action.payload;
    },
    PRIORITY_DATA_SET: (state,action) => {
      state.isLoading = false
      state.priorityData = action.payload
      state.error = {}
    },
    PRIORITY_DATA_RESET: (state) => {
      state.isLoading = false
      state.priorityData = {}
      state.error = {}
    }
  },
});

export const {
  PRIORITY_PROGRAMS_REQUEST,
  PRIORITY_PROGRAMS_SUCCESS,
  PRIORITY_PROGRAMS_FAIL,
  PRIORITY_PROGRAM_REQUEST,
  PRIORITY_PROGRAM_SUCCESS,
  PRIORITY_PROGRAM_FAIL,
  PRIORITY_DATA_SET,
  PRIORITY_DATA_RESET
} = priorityProgram.actions;

export default priorityProgram.reducer;
