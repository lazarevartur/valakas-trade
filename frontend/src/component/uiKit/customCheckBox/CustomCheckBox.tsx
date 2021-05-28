import React from "react";
import styles from "./customCheckBox.module.scss";
import { Form, FormCheckProps } from "react-bootstrap";

interface CustomCheckBoxProps extends FormCheckProps {}

const CustomCheckBox: React.FC<CustomCheckBoxProps> = ({ ...props }) => {
  return (
    <>
      <Form.Check {...props} />
    </>
  );
};

export default CustomCheckBox;
