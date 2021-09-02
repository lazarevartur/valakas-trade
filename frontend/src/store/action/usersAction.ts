import { AppDispatch } from "../store";
import {
  USERS_PAYMENTS_COMPLETED_SUCCESS,
  USERS_PAYMENTS_FAIL,
  USERS_PAYMENTS_REQUEST,
  USERS_PAYMENTS_SUCCESS,
  USERS_EDIT_USER,
  USERS_SETTINGS_USER,
  USERS_AVANGARD_USER,
  USERS_CHANGE_BILL,
  USERS_ADD_QIWI_BILL,
  USERS_DELETE_QIWI_BILL,
} from "../slice/usersSlice";
import { AdminApi } from "../../services/adminService";
import { Storage } from "../../utils/utils";
import { StoregeKey } from "../../config";

export const getAllPayments =
  () => async (dispatch: AppDispatch, getState?: any) => {
    const {
      authentication: {
        userData: { token },
      },
    } = getState();
    try {
      dispatch(USERS_PAYMENTS_REQUEST());
      const data = await AdminApi.getAllPayments(token);
      setTimeout(() => {
        Storage.set(StoregeKey.USERS, data);
        dispatch(USERS_PAYMENTS_SUCCESS(data));
      }, 500);
    } catch (e) {
      dispatch(USERS_PAYMENTS_FAIL(e));
    }
  };
export const getAllPending =
  () => async (dispatch: AppDispatch, getState?: any) => {
    const {
      authentication: {
        userData: { token },
      },
    } = getState();
    try {
      dispatch(USERS_PAYMENTS_REQUEST());
      const data = await AdminApi.getAllPending(token);
      setTimeout(() => {
        Storage.set(StoregeKey.USERS, data);
        dispatch(USERS_PAYMENTS_SUCCESS(data));
      }, 500);
    } catch (e) {
      dispatch(USERS_PAYMENTS_FAIL(e));
    }
  };
export const getAllCompleted =
  () => async (dispatch: AppDispatch, getState?: any) => {
    const {
      authentication: {
        userData: { token },
      },
    } = getState();
    try {
      dispatch(USERS_PAYMENTS_REQUEST());
      const data = await AdminApi.getAllCompleted(token);
      setTimeout(() => {
        Storage.set(StoregeKey.USERS, data);
        dispatch(USERS_PAYMENTS_COMPLETED_SUCCESS(data));
      }, 500);
    } catch (e) {
      dispatch(USERS_PAYMENTS_FAIL(e));
    }
  };
export const successPayment =
  (id) => async (dispatch: AppDispatch, getState?: any) => {
    const {
      authentication: {
        userData: { token },
      },
    } = getState();
    try {
      const success = await AdminApi.successPayment(token, id);
      if (success) {
        dispatch(getAllPending());
        dispatch(getAllCompleted());
      }
    } catch (e) {
      dispatch(USERS_PAYMENTS_FAIL(e));
    }
  };
export const successPaymentWithdrawal =
  (id) => async (dispatch: AppDispatch, getState?: any) => {
    const {
      authentication: {
        userData: { token },
      },
    } = getState();
    try {
      const success = await AdminApi.successPaymentWithdrawal(token, id);
      if (success) {
        dispatch(getAllPending());
        dispatch(getAllCompleted());
      }
    } catch (e) {
      dispatch(USERS_PAYMENTS_FAIL(e));
    }
  };
export const rejectPaymentWithdrawal =
  (id) => async (dispatch: AppDispatch, getState?: any) => {
    const {
      authentication: {
        userData: { token },
      },
    } = getState();
    try {
      const reject = await AdminApi.rejectPaymentWithdrawal(token, id);
      if (reject) {
        dispatch(getAllPending());
        dispatch(getAllCompleted());
      }
    } catch (e) {
      dispatch(USERS_PAYMENTS_FAIL(e));
    }
  };
export const rejectPayment =
  (id) => async (dispatch: AppDispatch, getState?: any) => {
    const {
      authentication: {
        userData: { token },
      },
    } = getState();
    try {
      const reject = await AdminApi.rejectPayment(token, id);
      if (reject) {
        dispatch(getAllPending());
        dispatch(getAllCompleted());
      }
    } catch (e) {
      dispatch(USERS_PAYMENTS_FAIL(e));
    }
  };
export const getUserByEmail =
  (email) => async (dispatch: AppDispatch, getState?: any) => {
    const {
      authentication: {
        userData: { token },
      },
    } = getState();
    try {
      dispatch(USERS_PAYMENTS_REQUEST);
      const data = await AdminApi.getUserByEmail(token, email);
      dispatch(USERS_EDIT_USER(data));
    } catch (e) {
      dispatch(USERS_PAYMENTS_FAIL(e));
    }
  };

export const getAvangardById =
  (id) => async (dispatch: AppDispatch, getState?: any) => {
    const {
      authentication: {
        userData: { token },
      },
    } = getState();
    try {
      dispatch(USERS_PAYMENTS_REQUEST);
      const data = await AdminApi.getAvangardById(token, id);
      dispatch(USERS_AVANGARD_USER(data));
    } catch (e) {
      dispatch(USERS_PAYMENTS_FAIL(e));
    }
  };

export const getSettings =
  () => async (dispatch: AppDispatch, getState?: any) => {
    const {
      authentication: {
        userData: { token },
      },
    } = getState();
    try {
      dispatch(USERS_PAYMENTS_REQUEST);
      const data = await AdminApi.getSettings(token);
      dispatch(USERS_SETTINGS_USER(data));
    } catch (e) {
      dispatch(USERS_PAYMENTS_FAIL(e));
    }
  };

export const saveMrxPercent =
  (mrx) => async (dispatch: AppDispatch, getState?: any) => {
    const {
      authentication: {
        userData: { token },
      },
    } = getState();
    try {
      dispatch(USERS_PAYMENTS_REQUEST);
      const data = await AdminApi.saveMrxPercent(token, mrx);
      dispatch(getSettings());
    } catch (e) {
      dispatch(USERS_PAYMENTS_FAIL(e));
    }
  };

export const editBill =
  (bill) => async (dispatch: AppDispatch, getState?: any) => {
    const {
      authentication: {
        userData: { token },
      },
    } = getState();
    try {
      dispatch(USERS_PAYMENTS_REQUEST);
      const data = await AdminApi.editBill(token, bill);
      dispatch(USERS_CHANGE_BILL(data));
    } catch (e) {
      dispatch(USERS_PAYMENTS_FAIL(e));
    }
  };

export const createQiwi =
  (requisites) => async (dispatch: AppDispatch, getState?: any) => {
    const {
      authentication: {
        userData: { token },
      },
    } = getState();
    try {
      dispatch(USERS_PAYMENTS_REQUEST);
      const data = await AdminApi.createQiwi(token, requisites);
      dispatch(USERS_ADD_QIWI_BILL(data));
    } catch (e) {
      dispatch(USERS_PAYMENTS_FAIL(e));
    }
  };

export const deleteBillById =
  (id) => async (dispatch: AppDispatch, getState?: any) => {
    const {
      authentication: {
        userData: { token },
      },
    } = getState();
    try {
      dispatch(USERS_PAYMENTS_REQUEST);
      const data = await AdminApi.deleteBillById(token, id);
      dispatch(USERS_DELETE_QIWI_BILL(data));
    } catch (e) {
      dispatch(USERS_PAYMENTS_FAIL(e));
    }
  };

export const saveUserByEmail =
  (userData) => async (dispatch: AppDispatch, getState?: any) => {
    const {
      authentication: {
        userData: { token },
      },
    } = getState();
    dispatch(USERS_PAYMENTS_REQUEST);
    try {
      const data = await AdminApi.saveUserByEmail(token, userData);
      dispatch(USERS_EDIT_USER(data));
    } catch (e) {
      dispatch(USERS_PAYMENTS_FAIL(e));
    }
  };
