import { createSlice } from "@reduxjs/toolkit";
import {
  actionTypeWallet,
  IHistoryUserData,
  IHistoryUserState,
  paymentStatus,
  walletTypes,
} from "../../types/types";
import { Storage } from "../../utils/utils";
import { StoregeKey } from "../../config";

// historyUser: Storage.has(StoregeKey.USER_HISTORY)
//     ? Storage.get(StoregeKey.USER_HISTORY)
//     : {},

const defaultData: IHistoryUserData = {
  _id: `1`,
  action_type_wallet: actionTypeWallet.replenishment,
  amount: 1,
  confirmation_date: Date.now(),
  from_where_payment: walletTypes.bitcoin,
  requisites: "requisites",
  status: paymentStatus.pending,
  user_id: "12",
  createdAt: "12",
};

const initialState: IHistoryUserState = {
  isLoading: false,
  historyCompleted: Storage.has(StoregeKey.USER_HISTORY_COMPLETED)
    ? Storage.get(StoregeKey.USER_HISTORY_COMPLETED)
    : [defaultData],
  historyPending: Storage.has(StoregeKey.USER_HISTORY_PENDING)
    ? Storage.get(StoregeKey.USER_HISTORY_PENDING)
    : [defaultData],
  error: {},
};

export const historyUser = createSlice({
  name: "history",
  initialState,
  reducers: {
    USER_HISTORY_PENDING_REQUEST: (state) => {
      state.isLoading = true;
    },
    USER_HISTORY_PENDING_SUCCESS: (state, action) => {
      state.isLoading = false;
      state.historyPending = action.payload;
      delete state.error;
    },
    USER_HISTORY_PENDING_FAIL: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    USER_HISTORY_COMPLETED_REQUEST: (state) => {
      state.isLoading = true;
    },
    USER_HISTORY_COMPLETED_SUCCESS: (state, action) => {
      state.isLoading = false;
      state.historyCompleted = action.payload;
      delete state.error;
    },
    USER_HISTORY_COMPLETED_FAIL: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  USER_HISTORY_PENDING_REQUEST,
  USER_HISTORY_PENDING_SUCCESS,
  USER_HISTORY_PENDING_FAIL,
  USER_HISTORY_COMPLETED_REQUEST,
  USER_HISTORY_COMPLETED_SUCCESS,
  USER_HISTORY_COMPLETED_FAIL,
} = historyUser.actions;

export default historyUser.reducer;
