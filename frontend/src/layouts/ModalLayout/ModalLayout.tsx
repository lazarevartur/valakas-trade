import React from "react";
import styles from "./ModalLayout.module.scss";
import { Modal, ModalProps } from "react-bootstrap";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import { defaultModalComponentProps } from "../../types/types";

interface ModalLayoutProps extends ModalProps, defaultModalComponentProps {
  aria_labelledby?: string;
}

const ModalLayout: React.FC<ModalLayoutProps> = ({
  isOpened = false,
  title = "",
  children,
  className = "",
  size = "xl",
  aria_labelledby = "labelledby",
}) => {
  const history = useHistory();
  const { pathname } = useLocation();
  const closeModal = () => {
    history.push(pathname);
  };
  return (
    <Modal
      size={size}
      show={isOpened}
      onHide={closeModal}
      aria-labelledby={aria_labelledby}
    >
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default ModalLayout;
