import { useDispatchTyped, useSelectorTyped } from "./useTypedRedux";
import { rootState } from "../types/types";
import React from "react";
import {
  getAvailableMrxPrograms,
  getMrxPrograms,
} from "../store/action/programsAction";
import { getAvailableOptionalPrograms } from "../store/action/optionalAction";
import { useLocation } from "react-router-dom";
import { RoutePath } from "../routes/routesConfig";

export default () => {
  const { mrxPrograms } = useSelectorTyped((state: rootState) => state.mrx);
  const { optionalProgram, isLoading } = useSelectorTyped(
    (state: rootState) => state.optional
  );
  const location = useLocation();
  const {
    userData: { token },
  } = useSelectorTyped((state: rootState) => state.authentication);
  const dispatch = useDispatchTyped();
  React.useEffect(() => {
    if (location.pathname === RoutePath.binarProfitTeam) {
      dispatch(getMrxPrograms());
    } else {
      dispatch(getAvailableMrxPrograms());
    }

    dispatch(getAvailableOptionalPrograms());
  }, []);
  const isAuth = !!token;

  return {
    isLoading,
    mrxPrograms,
    optionalProgram,
    isAuth,
  };
};
