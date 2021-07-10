import {
  USER_DASHBOARD_REQUEST,
  USER_DASHBOARD_SUCCESS,
  USER_DASHBOARD_FAIL,
} from "../slice/userDashboardSlice";
import { AppDispatch } from "../store";

import { DashboardApi } from "../../services/dashboardApi";
import {
  USER_TEAM_FAIL,
  USER_TEAM_REQUEST,
  USER_TEAM_SUCCESS,
} from "../slice/teamSlice";
import { Storage } from "../../utils/utils";
import { StoregeKey } from "../../config";

export const getCurrentUser = () => async (
  dispatch: AppDispatch,
  getState?: any
) => {
  const {
    authentication: {
      userData: { token },
    },
  } = getState();
  try {
    dispatch(USER_DASHBOARD_REQUEST());
    const data = await DashboardApi.getCurrentUser(token);
    setTimeout(() => {
      Storage.set(StoregeKey.USER_DATA, data);
      dispatch(USER_DASHBOARD_SUCCESS(data));
    }, 500);
  } catch (e) {
    dispatch(USER_DASHBOARD_FAIL(e));
  }
};

export const getTeam = () => async (dispatch: AppDispatch, getState?: any) => {
  const {
    authentication: {
      userData: { token },
    },
  } = getState();
  try {
    dispatch(USER_TEAM_REQUEST());
    const data = await DashboardApi.getTeam(token);
    setTimeout(() => {
      Storage.set(StoregeKey.USER_TEAM, data);
      dispatch(USER_TEAM_SUCCESS(data));
    }, 500);
  } catch (e) {
    dispatch(USER_TEAM_FAIL(e));
  }
};
