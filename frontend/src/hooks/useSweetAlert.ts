import React from "react";
import { DashboardRoute } from "../routes/dashboard";
import { useSelectorTyped } from "./useTypedRedux";
import { rootState } from "../types/types";
import { useHistory } from "react-router";

export const useSweetAlert = () => {
  const { success } = useSelectorTyped((state: rootState) => state.wallets);
  const [SweetAlertState, setSweetAlertState] = React.useState(false);
  const [redirect, setRedirect] = React.useState(false);
  const history = useHistory();
  const swalClose = () => {
    setSweetAlertState(false);
    setRedirect(true);
  };
  const swalOpen = () => {
    setSweetAlertState(true);
  };
  React.useEffect(() => {
    let timeOut;
    if (success) {
      swalOpen();
      if (redirect) {
        setSweetAlertState(false);
        history.push(DashboardRoute.desktop, { success });
      }
      timeOut = setTimeout(() => {
        history.push(DashboardRoute.desktop, { success });
      }, 10000);
    }
    return () => {
      clearTimeout(timeOut);
    };
  }, [success, redirect]);
  return {
    swalOpen,
    swalClose,
    SweetAlertState,
  };
};
