import React from "react";
import styles from "./customInput.module.scss";
import { Form, FormControlProps } from "react-bootstrap";
import cn from "classnames";

interface CustomInputProps extends FormControlProps {
  type?: string;
  placeholder?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  reff?: any;
  readOnly?: boolean;
  accept?: any;
  key?: any;
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
  accept,
  key = 1,
  ...props
}) => {
  return (
    <div className={styles.customInput} key={key}>
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
        onChange={onChange}
        accept={accept}
      />
    </div>
  );
};

export default CustomInput;
