import { useSelectorTyped } from "./useTypedRedux";
import { rootState } from "../types/types";

export default () => {
  const {
    userData: { token },
  } = useSelectorTyped((state: rootState) => state.authentication);
  const isAuth = !!token;

  return {
    isAuth,
  };
};
