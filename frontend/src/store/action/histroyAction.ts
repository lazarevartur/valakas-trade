import { AppDispatch } from "../store";
import {
  USER_HISTORY_PENDING_REQUEST,
  USER_HISTORY_PENDING_SUCCESS,
  USER_HISTORY_PENDING_FAIL,
  USER_HISTORY_COMPLETED_REQUEST,
  USER_HISTORY_COMPLETED_SUCCESS,
  USER_HISTORY_COMPLETED_FAIL,
} from "../slice/historySlice";
import { historyApi } from "../../services/historyApi";
import { rootState } from "../../types/types";
import { StoregeKey } from "../../config";
import { Storage } from "../../utils/utils";

export const getHistoryPendingUser = () => async (
  dispatch: AppDispatch,
  getState?: () => rootState
) => {
  const {
    authentication: {
      userData: { token },
    },
  } = getState();
  try {
    dispatch(USER_HISTORY_PENDING_REQUEST());
    const data = await historyApi.userHistoryPending(token);
    setTimeout(() => {
      Storage.set(StoregeKey.USER_HISTORY_PENDING, data);
      dispatch(USER_HISTORY_PENDING_SUCCESS(data));
    }, 500);
  } catch (e) {
    dispatch(USER_HISTORY_PENDING_FAIL(e));
  }
};

export const getHistoryCompletedUser = () => async (
  dispatch: AppDispatch,
  getState?: () => rootState
) => {
  const {
    authentication: {
      userData: { token },
    },
  } = getState();
  try {
    dispatch(USER_HISTORY_COMPLETED_REQUEST());
    const data = await historyApi.userHistoryCompleted(token);
    setTimeout(() => {
      Storage.set(StoregeKey.USER_HISTORY_COMPLETED, data);
      dispatch(USER_HISTORY_COMPLETED_SUCCESS(data));
    }, 500);
  } catch (e) {
    dispatch(USER_HISTORY_COMPLETED_FAIL(e));
  }
};
