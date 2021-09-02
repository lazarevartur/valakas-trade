import { AppDispatch } from "../store";
import { INewsDataCreate, rootState } from "../../types/types";
import { Storage } from "../../utils/utils";
import { StoregeKey } from "../../config";
import {
  ACTIVE_NEWS_SUCCESS,
  CREATE_NEWS_SUCCESS,
  DELETE_NEWS_SUCCESS,
  NEWS_FAIL,
  NEWS_REQUEST,
  NEWS_SUCCESS,
} from "../slice/newsSlice";
import { newsApi } from "../../services/newsApi";

export const getAllNews =
  () => async (dispatch: AppDispatch, getState?: () => rootState) => {
    try {
      dispatch(NEWS_REQUEST());
      const data = await newsApi.getAllNews();
      setTimeout(() => {
        Storage.set(StoregeKey.NEWS, data);
        dispatch(NEWS_SUCCESS(data));
      }, 500);
    } catch (e) {
      dispatch(NEWS_FAIL(e));
    }
  };

export const last3News =
  () => async (dispatch: AppDispatch, getState?: () => rootState) => {
    try {
      dispatch(NEWS_REQUEST());
      const data = await newsApi.last3News();
      dispatch(NEWS_SUCCESS(data));
    } catch (e) {
      dispatch(NEWS_FAIL(e));
    }
  };

export const getNewsById =
  (id) => async (dispatch: AppDispatch, getState?: () => rootState) => {
    const {
      authentication: {
        userData: { token },
      },
    } = getState();
    try {
      dispatch(NEWS_REQUEST());
      const data = await newsApi.getNewsById(token, id);
      setTimeout(() => {
        Storage.set(StoregeKey.NEWS_ACTIVE, data);
        dispatch(ACTIVE_NEWS_SUCCESS(data));
      }, 500);
    } catch (e) {
      dispatch(NEWS_FAIL(e));
    }
  };

export const deleteNewsById =
  (id) => async (dispatch: AppDispatch, getState?: () => rootState) => {
    const {
      authentication: {
        userData: { token },
      },
    } = getState();
    try {
      dispatch(NEWS_REQUEST());
      const data = await newsApi.deleteNewsById(token, id);
      dispatch(DELETE_NEWS_SUCCESS());
    } catch (e) {
      dispatch(NEWS_FAIL(e));
    }
  };

export const createNews =
  (newsData: INewsDataCreate) =>
  async (dispatch: AppDispatch, getState?: () => rootState) => {
    const {
      authentication: {
        userData: { token },
      },
    } = getState();
    try {
      dispatch(NEWS_REQUEST());
      const data = await newsApi.createNews(token, newsData);
      dispatch(CREATE_NEWS_SUCCESS());
    } catch (e) {
      dispatch(NEWS_FAIL(e));
    }
  };
