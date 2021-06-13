import React from "react";
import styles from "./customInput.module.scss";
import { Form, FormControlProps } from "react-bootstrap";
import { defaultComponentProps } from "../../../types/types";
import cn from "classnames";
import { log } from "util";

interface CustomInputProps extends FormControlProps {
  type?: string;
  placeholder?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  reff?: any;
  readOnly?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
  className = "",
  type = "text",
  placeholder = "Text",
  name = "textInput",
  value = "",
  onChange = () => null,
  reff,
  readOnly = false,
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
        ref={reff}
        readOnly={readOnly}
        {...props}
      />
    </div>
  );
};

export default CustomInput;
