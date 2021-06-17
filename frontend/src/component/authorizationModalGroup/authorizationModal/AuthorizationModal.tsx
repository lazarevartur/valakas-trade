import React, { useEffect } from "react";
import { ModalLayout } from "../../../layouts/ModalLayout";
import { AuthTypeEnum, GET_ENUMS, ModalType } from "../../../const/popup";
import { SignIn } from "../signIn";
import { SignUp } from "../signUp";
import { PasswordReset } from "../passwordReset";
import { useSelectorTyped } from "../../../hooks/useTypedRedux";
import { rootState } from "../../../types/types";
import { RoutePath } from "../../../routes/routesConfig";
import { useHistory } from "react-router";
import { useModal } from "../../../hooks/useModal";

interface AuthorizationModalProps {}

const popups = {
  [AuthTypeEnum.signIn]: SignIn,
  [AuthTypeEnum.signUp]: SignUp,
  [AuthTypeEnum.resetPassword]: PasswordReset,
};

const AuthorizationModal: React.FC<AuthorizationModalProps> = () => {
  const {
    userData: { token },
  } = useSelectorTyped((state: rootState) => state.authentication);
  const history = useHistory();
  const { pathname, isOpened, mountedPopup } = useModal(ModalType.auth);
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
