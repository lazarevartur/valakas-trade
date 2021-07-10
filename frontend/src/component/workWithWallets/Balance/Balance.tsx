import React from "react";
import styles from "./Balance.module.scss";
import { ModalLayout } from "../../../layouts/ModalLayout";
import { ModalProps } from "react-bootstrap";
import { useModal } from "../../../hooks/useModal";
import { ModalType, WalletTypeEnum } from "../../../const/popup";
import { ReplenishmentWallet } from "../ReplenishmentWallet";
import { TransferWallet } from "../TransferWallet";
import { WithdrawWallet } from "../WithdrawWallet";
import BuyPrograms from "./buyPrograms/BuyPrograms";

interface BalanceProps extends ModalProps {}

const popups = {
  [WalletTypeEnum.replenishment]: ReplenishmentWallet,
  [WalletTypeEnum.withdraw]: WithdrawWallet,
  [WalletTypeEnum.transfer]: TransferWallet,
  [WalletTypeEnum.buyProgram]: BuyPrograms,
};

const Balance: React.FC<BalanceProps> = () => {
  const { pathname, isOpened, mountedPopup } = useModal(ModalType.wallet);
  // @ts-ignore
  const Component = popups[mountedPopup];
  if (!Component) {
    return null;
  }
  return (
    <ModalLayout size={"lg"} isOpened={isOpened} url={pathname}>
      <Component url={pathname} />
    </ModalLayout>
  );
};

Balance.defaultProps = {};

export default Balance;
