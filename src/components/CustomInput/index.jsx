import {Input} from "antd";
import React from "react";
import styles from "./CustomInput.module.css";

export default function CustomInput({placeholder, isDisabled, status, onChange, width}) {
  const disabledClass = (isDisabled) => {
    return isDisabled && styles.disabled;
  };
  return (
    <Input
      placeholder={placeholder}
      disabled={isDisabled}
      className={`${styles.input} ${disabledClass(isDisabled)}`}
      status={status}
      onChange={onChange}
      style={{width: width}}
    />
  );
}
