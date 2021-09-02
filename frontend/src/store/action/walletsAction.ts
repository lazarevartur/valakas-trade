import { AppDispatch } from "../store";
import {
  WALLETS_SUCCESS,
  WALLETS_REQUEST,
  WALLETS_FAIL,
  WALLETS_RESET,
  WALLETS_BILLS,
} from "../slice/walletsSlice";
import { ReplenishmentRequest, WalletsApi } from "../../services/walletsApi";
import { ITransfers_wallets } from "../../types/types";

export const balanceReplenishment =
  ({ amount }) =>
  async (dispatch: AppDispatch, getState?: any) => {
    const {
      authentication: {
        userData: { token },
      },
    } = getState();
    try {
      dispatch(WALLETS_REQUEST());
      await WalletsApi.balanceReplenishment(token, amount);
      setTimeout(() => {
        dispatch(WALLETS_SUCCESS());
      }, 500);
    } catch (e) {
      dispatch(WALLETS_FAIL(e));
    }
  };

export const balanceRepTransfer =
  (req: ITransfers_wallets) =>
  async (dispatch: AppDispatch, getState?: any) => {
    const {
      authentication: {
        userData: { token },
      },
    } = getState();
    try {
      dispatch(WALLETS_REQUEST());
      await WalletsApi.transfer(token, req);
      setTimeout(() => {
        dispatch(WALLETS_SUCCESS());
      }, 500);
    } catch (e) {
      dispatch(WALLETS_FAIL(e));
    }
  };

export const balanceWithdrawRequest =
  (req) => async (dispatch: AppDispatch, getState?: any) => {
    const {
      authentication: {
        userData: { token },
      },
    } = getState();
    try {
      dispatch(WALLETS_REQUEST());
      await WalletsApi.withdrawRequest(token, req);
      setTimeout(() => {
        dispatch(WALLETS_SUCCESS());
      }, 500);
    } catch (e) {
      dispatch(WALLETS_FAIL(e));
    }
  };

export const buyMrxProgram =
  (req: any) => async (dispatch: AppDispatch, getState?: any) => {
    const {
      authentication: {
        userData: { token },
      },
    } = getState();
    try {
      dispatch(WALLETS_REQUEST());
      await WalletsApi.buyMrxProgram(token, req);
      setTimeout(() => {
        dispatch(WALLETS_SUCCESS());
      }, 500);
    } catch (e) {
      dispatch(WALLETS_FAIL(e));
    }
  };

export const buyPriorityProgram =
  (req: any) => async (dispatch: AppDispatch, getState?: any) => {
    const {
      authentication: {
        userData: { token },
      },
    } = getState();
    try {
      dispatch(WALLETS_REQUEST());
      await WalletsApi.buyPriorityProgram(token, req);
      setTimeout(() => {
        dispatch(WALLETS_SUCCESS());
      }, 500);
    } catch (e) {
      dispatch(WALLETS_FAIL(e));
    }
  };

export const buyOptionalProgram =
  (req: any) => async (dispatch: AppDispatch, getState?: any) => {
    const {
      authentication: {
        userData: { token },
      },
    } = getState();
    try {
      dispatch(WALLETS_REQUEST());
      await WalletsApi.buyOptionalProgram(token, req);
      setTimeout(() => {
        dispatch(WALLETS_SUCCESS());
      }, 500);
    } catch (e) {
      dispatch(WALLETS_FAIL(e));
    }
  };

export const replenishmentRequest =
  (req: ReplenishmentRequest) =>
  async (dispatch: AppDispatch, getState?: any) => {
    const {
      authentication: {
        userData: { token },
      },
    } = getState();
    try {
      dispatch(WALLETS_REQUEST());
      await WalletsApi.replenishmentRequest(token, req);
      setTimeout(() => {
        dispatch(WALLETS_SUCCESS());
      }, 500);
    } catch (e) {
      dispatch(WALLETS_FAIL(e));
    }
  };

// export const getPayeerUrl = (req: ReplenishmentRequest) => async (
//   dispatch: AppDispatch,
//   getState?: any
// ) => {
//   const {
//     authentication: {
//       userData: { token },
//     },
//   } = getState();
//   try {
//     dispatch(WALLETS_REQUEST());
//     const data = await WalletsApi.getPayeerUrl(token, req);
//     dispatch(WALLETS_PAYEER_URL(data));
//   } catch (e) {
//     dispatch(WALLETS_FAIL(e));
//   }
// };

export const getBills = () => async (dispatch: AppDispatch, getState?: any) => {
  const {
    authentication: {
      userData: { token },
    },
  } = getState();
  try {
    dispatch(WALLETS_REQUEST());
    const data = await WalletsApi.getBills(token);
    dispatch(WALLETS_BILLS(data));
  } catch (e) {
    dispatch(WALLETS_FAIL(e));
  }
};

export const resetWallet = () => async (dispatch: AppDispatch) => {
  dispatch(WALLETS_RESET());
};
