import React from "react";
import { Button, Form, Input } from "antd";
import styles from "../styles/Inputs.module.css";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    //   range: '${label} must be between ${min} and ${max}',
  },
};


const SignUpInput = () => {


  const onFinish = (values) => {
    console.log(values);
  };


  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Form.Item
        className={styles.label}
        name={["user", "name"]}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input className={`${styles["input"]} rounded-4`} />
      </Form.Item>
      <Form.Item
        className={styles.label}
        name={["user", "email"]}
        label="Office Email "
        rules={[
          {
            type: "email",
            required: true,
          },
        ]}
      >
        <Input className={`${styles["input"]} rounded-4`} />
      </Form.Item>
      <Form.Item label="Recording Video" className={styles.label}>
        {/* <RecordVideo className={styles.recordVideo} /> */}
      </Form.Item>
      <Form.Item
        className={styles.submit}
        wrapperCol={{
          ...layout.wrapperCol,
          offset: 8,
        }}
      >
        <Button
          className={`${styles["btn"]} `}
          type="primary"
          htmlType="submit"
        >
          Sign Up
        </Button>
      </Form.Item>

    </Form>
  );
};

export default SignUpInput;

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
        // {...register(name)}
      />
      {error && <span className="text-danger fs-6">{error}</span>}
    </>
  );
};
