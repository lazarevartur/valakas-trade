import React, { useState } from "react";
import styles from "./ModalLayout.module.scss";
import { defaultModalComponentProps } from "../../types/types";
import { Modal } from "react-bootstrap";
import { useHistory } from "react-router";

interface ModalLayoutProps extends defaultModalComponentProps {}

const ModalLayout: React.FC<ModalLayoutProps> = ({
  isOpened = false,
  title = "",
  children,
  className = "",
}) => {
  const history = useHistory();
  return (
    <Modal
      size={"xl"}
      show={isOpened}
      onHide={history.goBack}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Title>{title}</Modal.Title>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default ModalLayout;
