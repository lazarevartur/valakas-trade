import {
  USER_REGISTER_SUCCESS,
  USER_REGISTER_REQUEST,
  USER_REGISTER_FAIL,
  USER_LOGOUT,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
} from "../slice/authSlice";
import { IUserRegistration } from "../../types/types";
import { AppDispatch } from "../store";
import { AuthApi } from "../../services/authApi";
import { Storage } from "../../utils/utils";
import { StoregeKey } from "../../config";
import { userLogin } from "../../component/authorizationGroup/login/Login";
import { setToken } from "../../core/axios";
import {
  USER_DASHBOARD_CHEK_AUTH,
  USER_DASHBOARD_FAIL,
  USER_DASHBOARD_REQUEST,
} from "../slice/userDashboardSlice";

const loadingTime = 700;

export const register = (candidate: IUserRegistration) => async (
  dispatch: AppDispatch
) => {
  try {
    dispatch(USER_REGISTER_REQUEST());
    const data = await AuthApi.register(candidate);
    setTimeout(() => {
      dispatch(USER_REGISTER_SUCCESS(data));
      Storage.set(StoregeKey.USER, data);
    }, loadingTime);
  } catch (e) {
    dispatch(USER_REGISTER_FAIL(e));
  }
};

export const login = (emailAndPassword: userLogin) => async (
  dispatch: AppDispatch
) => {
  try {
    dispatch(USER_LOGIN_REQUEST());
    const data = await AuthApi.login(emailAndPassword);
    setTimeout(() => {
      dispatch(USER_LOGIN_SUCCESS(data));
      setToken(data.token);
      Storage.set(StoregeKey.USER, data);
    }, loadingTime);
  } catch (e) {
    dispatch(USER_LOGIN_FAIL(e));
  }
};

export const chekAuth = () => async (dispatch: AppDispatch, getState?: any) => {
  const {
    authentication: {
      userData: { token },
    },
  } = getState();
  try {
    dispatch(USER_DASHBOARD_REQUEST());
    const { data } = await AuthApi.chekAuth(token);
    dispatch(USER_DASHBOARD_CHEK_AUTH());
  } catch (e) {
    dispatch(USER_DASHBOARD_FAIL(e));
  }
};

export const logout = (): any => async (dispatch: AppDispatch) => {
  Storage.remove(StoregeKey.USER);
  Storage.remove(StoregeKey.USER_DATA);
  Storage.remove(StoregeKey.USER_TEAM);
  setToken(false);
  dispatch(USER_LOGOUT());
};
