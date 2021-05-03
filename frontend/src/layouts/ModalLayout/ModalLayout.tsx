import React from "react";
import styles from "./ModalLayout.module.scss";
import { defaultModalComponentProps } from "../../types/types";
import { Modal } from "react-bootstrap";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";

interface ModalLayoutProps extends defaultModalComponentProps {}

const ModalLayout: React.FC<ModalLayoutProps> = ({
  isOpened = false,
  title = "",
  children,
  className = "",
}) => {
  const history = useHistory();
  const { pathname } = useLocation();
  const closeModal = () => {
    history.push(pathname);
  };
  return (
    <Modal
      size={"xl"}
      show={isOpened}
      onHide={closeModal}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Title>{title}</Modal.Title>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default ModalLayout;
