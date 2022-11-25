import React from "react";
import { Button, Form, Input } from "antd";
import styles from "../styles/Inputs.module.css";

export const ShebakLabel  = ({ label, span }) => {
  return (
    <label className={`form-label mt-3 fs-6 ${styles.label}`}>
      {label} <span className="ms-2">{span}</span>
    </label>
  );
};

export const ShebakInput = ({
  label,
  name,
  error,
  className,
  required,
  register,
  ...inputProps
}) => {

  return (
    <>
      {label && (
        <label
          className={`form-label mt-3 me-3 d-inline-block fs-6 ${styles.label} ${error && "text-danger"}`}
          htmlFor={label}
        >
          {label}
          {!required && <span className="ms-2 me-2 opacity-75">Optional</span>}
        </label>
      )}

      <input
        id={label}
        className={` form-control d-inline-block shadow-none ${styles.input} ${className && className
          } ${error ? "border border-1 border-danger text-danger" : "border-1"}`}
        {...inputProps}
        {...register(name)}
      />
      {error && <span className="text-danger fs-6">{error}</span>}
    </>
  );
};
