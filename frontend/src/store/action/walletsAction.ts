import { AppDispatch } from "../store";
import {
  WALLETS_SUCCESS,
  WALLETS_REQUEST,
  WALLETS_FAIL,
  WALLETS_RESET,
} from "../slice/walletsSlice";
import { WalletsApi } from "../../services/walletsApi";

export const balanceReplenishment = ({ amount }) => async (
  dispatch: AppDispatch,
  getState?: any
) => {
  const {
    authentication: {
      userData: { token },
    },
  } = getState();
  try {
    dispatch(WALLETS_REQUEST());
    const data = await WalletsApi.balanceReplenishment(token, amount);
    setTimeout(() => {
      dispatch(WALLETS_SUCCESS());
    }, 500);
  } catch (e) {
    dispatch(WALLETS_FAIL(e));
  }
};

export const buyMrxProgram = (req: any) => async (
  dispatch: AppDispatch,
  getState?: any
) => {
  const {
    authentication: {
      userData: { token },
    },
  } = getState();
  try {
    dispatch(WALLETS_REQUEST());
    const data = await WalletsApi.buyMrxProgram(token, req);
    setTimeout(() => {
      dispatch(WALLETS_SUCCESS());
    }, 500);
  } catch (e) {
    dispatch(WALLETS_FAIL(e));
  }
};

export const buyOptionalProgram = (req: any) => async (
  dispatch: AppDispatch,
  getState?: any
) => {
  const {
    authentication: {
      userData: { token },
    },
  } = getState();
  try {
    dispatch(WALLETS_REQUEST());
    const data = await WalletsApi.buyOptionalProgram(token, req);
    setTimeout(() => {
      dispatch(WALLETS_SUCCESS());
    }, 500);
  } catch (e) {
    dispatch(WALLETS_FAIL(e));
  }
};

export const resetWallet = () => async (dispatch: AppDispatch) => {
  dispatch(WALLETS_RESET());
};
