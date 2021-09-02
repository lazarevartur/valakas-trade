import { createSlice } from "@reduxjs/toolkit";
import { INewsState } from "../../types/types";
import { Storage } from "../../utils/utils";
import { StoregeKey } from "../../config";

const initialState: INewsState = {
  isLoading: false,
  news: Storage.has(StoregeKey.NEWS) ? Storage.get(StoregeKey.NEWS) : [],
  activeNews: Storage.has(StoregeKey.NEWS_ACTIVE)
    ? Storage.get(StoregeKey.NEWS_ACTIVE)
    : {},
  error: {},
};

export const news = createSlice({
  name: "news",
  initialState,
  reducers: {
    NEWS_REQUEST: (state) => {
      state.isLoading = true;
    },
    NEWS_SUCCESS: (state, action) => {
      state.isLoading = false;
      state.news = action.payload;
      delete state.error;
    },
    NEWS_FAIL: (state, action) => {
      state.isLoading = false;
      state.news = [];
      state.error = action.payload;
    },
    ACTIVE_NEWS_REQUEST: (state) => {
      state.isLoading = true;
    },
    ACTIVE_NEWS_SUCCESS: (state, action) => {
      state.isLoading = false;
      state.activeNews = action.payload;
      delete state.error;
    },
    DELETE_NEWS_SUCCESS: (state) => {
      state.isLoading = false;
    },
    CREATE_NEWS_SUCCESS: (state) => {
      state.isLoading = false;
    },
    ACTIVE_NEWS_FAIL: (state, action) => {
      state.isLoading = false;
      state.activeNews = {};
      state.error = action.payload;
    },
  },
});

export const {
  NEWS_REQUEST,
  NEWS_SUCCESS,
  NEWS_FAIL,
  ACTIVE_NEWS_REQUEST,
  ACTIVE_NEWS_SUCCESS,
  ACTIVE_NEWS_FAIL,
  DELETE_NEWS_SUCCESS,
  CREATE_NEWS_SUCCESS,
} = news.actions;

export default news.reducer;
