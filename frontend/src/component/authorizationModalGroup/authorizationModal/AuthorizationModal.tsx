import React from "react";
import styles from "./authorizationModal.module.scss";
import { ModalLayout } from "../../../layouts/ModalLayout";
import { GET_ENUMS } from "../../../const/popup";
import useGetPopupState from "../../../hooks/useGetPopupState";
import { SignIn } from "../signIn";
import { SignUp } from "../signUp";
import { PasswordReset } from "../passwordReset";
import { useLocation } from "react-router-dom";

interface AuthorizationModalProps {}

const popups = {
  [GET_ENUMS.popup.signIn]: SignIn,
  [GET_ENUMS.popup.signUp]: SignUp,
  [GET_ENUMS.popup.resetPassword]: PasswordReset,
};

const AuthorizationModal: React.FC<AuthorizationModalProps> = () => {
  const { pathname } = useLocation();
  const { mountedPopup, isOpened } = useGetPopupState();
  // @ts-ignore
  const Component = popups[mountedPopup];

  if (!Component) {
    return null;
  }

  return <Component isOpened={isOpened} url={pathname} />;
};

export default AuthorizationModal;
