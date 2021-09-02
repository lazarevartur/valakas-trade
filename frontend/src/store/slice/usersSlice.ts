import { createSlice } from "@reduxjs/toolkit";
import { IUsersState, walletTypes } from "../../types/types";
import { Storage } from "../../utils/utils";
import { StoregeKey } from "../../config";

const initialState: IUsersState = {
  isLoading: false,
  payments: Storage.has(StoregeKey.USERS) ? Storage.get(StoregeKey.USERS) : [],
  paymentsCompleted: [],
  settings: {},
  avangard: {},
  user: {},
  error: {},
};

export const users = createSlice({
  name: "users",
  initialState,
  reducers: {
    USERS_PAYMENTS_REQUEST: (state) => {
      state.isLoading = true;
    },
    USERS_PAYMENTS_SUCCESS: (state, action) => {
      state.isLoading = false;
      state.payments = action.payload;
      delete state.error;
    },
    USERS_PAYMENTS_COMPLETED_SUCCESS: (state, action) => {
      state.isLoading = false;
      state.paymentsCompleted = action.payload;
      delete state.error;
    },
    USERS_EDIT_USER: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      delete state.error;
    },
    USERS_SETTINGS_USER: (state, action) => {
      state.isLoading = false;
      state.settings = action.payload;
      delete state.error;
    },
    USERS_CHANGE_BILL: (state, action) => {
      if (action.payload.type_wallet === walletTypes.qiwi) {
        const qiwi = state.settings.bills[action.payload.type_wallet];
        let qiwiIndex = qiwi.findIndex((item) => {
          return item._id === action.payload._id;
        });
        state.settings.bills[action.payload.type_wallet][qiwiIndex] =
          action.payload;
      } else {
        state.settings.bills[action.payload.type_wallet] = action.payload;
      }
    },
    USERS_ADD_QIWI_BILL: (state, action) => {
      const qiwi = state.settings.bills[action.payload.type_wallet];
      qiwi.push(action.payload);
    },
    USERS_DELETE_QIWI_BILL: (state, action) => {
      const qiwi = state.settings.bills[action.payload.type_wallet];
      state.settings.bills[action.payload.type_wallet] = qiwi.filter((qiwi) => {
        return qiwi._id !== action.payload._id;
      });
    },
    USERS_AVANGARD_USER: (state, action) => {
      state.isLoading = false;
      state.avangard = action.payload;
      delete state.error;
    },
    USERS_PAYMENTS_FAIL: (state, action) => {
      state.isLoading = false;
      state.payments = [];
      state.user = {};
      state.error = action.payload;
    },
  },
});

export const {
  USERS_PAYMENTS_REQUEST,
  USERS_PAYMENTS_SUCCESS,
  USERS_PAYMENTS_FAIL,
  USERS_PAYMENTS_COMPLETED_SUCCESS,
  USERS_EDIT_USER,
  USERS_SETTINGS_USER,
  USERS_AVANGARD_USER,
  USERS_CHANGE_BILL,
  USERS_ADD_QIWI_BILL,
  USERS_DELETE_QIWI_BILL,
} = users.actions;

export default users.reducer;

const findQiwiIndex = (qiwi, action) => {
  return qiwi.findIndex((item) => {
    return item._id === action.payload._id;
  });
};
