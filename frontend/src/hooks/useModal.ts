import { useLocation } from "react-router-dom";
import useGetPopupState from "./useGetPopupState";
import { useHistory } from "react-router";
import { useSelectorTyped } from "./useTypedRedux";
import { rootState } from "../types/types";
import { useEffect } from "react";
import { RoutePath } from "../routes/routesConfig";
import { ModalType } from "../const/popup";

export const useModal = (modalType: ModalType): any => {
  const { pathname } = useLocation();
  const { mountedPopup, isOpened } = useGetPopupState(modalType);

  return {
    pathname,
    isOpened,
    mountedPopup,
  };
};
