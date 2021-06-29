import { useDispatchTyped, useSelectorTyped } from "./useTypedRedux";
import { rootState } from "../types/types";
import React from "react";
import { getMrxPrograms } from "../store/action/programsAction";

export default () => {
  const { mrxPrograms, isLoading } = useSelectorTyped(
    (state: rootState) => state.mrx
  );
  const {
    userData: { token },
  } = useSelectorTyped((state: rootState) => state.authentication);
  const dispatch = useDispatchTyped();
  React.useEffect(() => {
    if (!mrxPrograms.length) {
      dispatch(getMrxPrograms());
    }
  }, []);
  const isAuth = !!token;

  return {
    isLoading,
    mrxPrograms,
    isAuth,
  };
};
