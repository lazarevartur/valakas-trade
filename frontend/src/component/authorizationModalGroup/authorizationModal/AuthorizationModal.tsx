import React, { useEffect } from "react";
import styles from "./authorizationModal.module.scss";
import { ModalLayout } from "../../../layouts/ModalLayout";
import { GET_ENUMS } from "../../../const/popup";
import useGetPopupState from "../../../hooks/useGetPopupState";
import { SignIn } from "../signIn";
import { SignUp } from "../signUp";
import { PasswordReset } from "../passwordReset";
import { useLocation } from "react-router-dom";
import { useSelectorTyped } from "../../../hooks/useTypedRedux";
import { rootState } from "../../../types/types";
import { RoutePath } from "../../../routes/routesConfig";
import { useHistory } from "react-router";

interface AuthorizationModalProps {}

const popups = {
  [GET_ENUMS.popup.signIn]: SignIn,
  [GET_ENUMS.popup.signUp]: SignUp,
  [GET_ENUMS.popup.resetPassword]: PasswordReset,
};

const AuthorizationModal: React.FC<AuthorizationModalProps> = () => {
  const { pathname } = useLocation();
  const { mountedPopup, isOpened } = useGetPopupState();
  const history = useHistory();

  const {
    userData: { token },
  } = useSelectorTyped((state: rootState) => state.authentication);

  // @ts-ignore
  const Component = popups[mountedPopup];

  useEffect(() => {
    if (token && isOpened) {
      history.push(RoutePath.dashboard);
    }
  }, [token]);

  if (!Component || token) {
    return null;
  }

  return (
    <ModalLayout isOpened={isOpened}>
      <Component url={pathname} />
    </ModalLayout>
  );
};

export default AuthorizationModal;
