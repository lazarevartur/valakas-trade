import { AppDispatch } from "../store";
import {
  MRX_WALLETS_SUCCESS,
  MRX_WALLETS_REQUEST,
  MRX_WALLETS_FAIL,
  MRX_WALLETS_RESET,
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
    dispatch(MRX_WALLETS_REQUEST());
    const data = await WalletsApi.balanceReplenishment(token, amount);
    setTimeout(() => {
      dispatch(MRX_WALLETS_SUCCESS());
    }, 500);
  } catch (e) {
    dispatch(MRX_WALLETS_FAIL(e));
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
    dispatch(MRX_WALLETS_REQUEST());
    const data = await WalletsApi.buyMrxProgram(token, req);
    setTimeout(() => {
      dispatch(MRX_WALLETS_SUCCESS());
    }, 500);
  } catch (e) {
    dispatch(MRX_WALLETS_FAIL(e));
  }
};

export const resetWallet = () => async (dispatch: AppDispatch) => {
  dispatch(MRX_WALLETS_RESET());
};
