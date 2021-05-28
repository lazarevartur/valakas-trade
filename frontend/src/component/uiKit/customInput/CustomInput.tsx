import React from "react";
import styles from "./customInput.module.scss";
import { Form, FormControlProps } from "react-bootstrap";
import { defaultComponentProps } from "../../../types/types";
import cn from "classnames";

interface CustomInputProps extends FormControlProps {
  type?: string;
  placeholder?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
  className = "",
  type = "text",
  placeholder = "Text",
  name = "textInput",
  value = "",
  ...props
}) => {
  return (
    <div className={styles.customInput}>
      <span className={cn({ [styles.to_top]: !!value.length })}>
        {placeholder}
      </span>
      <Form.Control
        className={cn({ [className]: className })}
        type={type}
        name={name}
        value={value}
        {...props}
      />
    </div>
  );
};

export default CustomInput;
