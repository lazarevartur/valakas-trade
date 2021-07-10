import { useDispatchTyped, useSelectorTyped } from "./useTypedRedux";
import { rootState } from "../types/types";
import React from "react";
import {
  getAvailableMrxPrograms,
  getMrxPrograms,
} from "../store/action/programsAction";
import { getAvailableOptionalPrograms } from "../store/action/optionalAction";

export default () => {
  const { mrxPrograms, isLoading } = useSelectorTyped(
    (state: rootState) => state.mrx
  );
  const {
    userData: { token },
  } = useSelectorTyped((state: rootState) => state.authentication);
  const dispatch = useDispatchTyped();
  React.useEffect(() => {
    dispatch(getAvailableMrxPrograms());
    dispatch(getAvailableOptionalPrograms());
  }, []);
  const isAuth = !!token;

  return {
    isLoading,
    mrxPrograms,
    isAuth,
  };
};
