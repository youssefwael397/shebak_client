// import React from "react";
// import { Button, Form, Input } from "antd";
// import styles from "../styles/signUpInput.module.css";
// import RecordVideo from "./RecordVideo";


// const layout = {
//   labelCol: {
//     span: 8,
//   },
//   wrapperCol: {
//     span: 16,
//   },
// };

// /* eslint-disable no-template-curly-in-string */
// const validateMessages = {
//   required: "${label} is required!",
//   types: {
//     email: "${label} is not a valid email!",
//     number: "${label} is not a valid number!",
//   },
//   number: {
//     //   range: '${label} must be between ${min} and ${max}',
//   },
// };


// const SignUpInput = () => {


//   const onFinish = (values) => {
//     console.log(values);
//   };


//   return (
//     <Form
//       {...layout}
//       name="nest-messages"
//       onFinish={onFinish}
//       validateMessages={validateMessages}
//     >
//       <Form.Item
//         className={styles.label}
//         name={["user", "name"]}
//         label="Name"
//         rules={[
//           {
//             required: true,
//           },
//         ]}
//       >
//         <Input className={`${styles["input"]} rounded-5`} />
//       </Form.Item>
//       <Form.Item
//         className={styles.label}
//         name={["user", "email"]}
//         label="Office Email "
//         rules={[
//           {
//             type: "email",
//             required: true,
//           },
//         ]}
//       >
//         <Input className={`${styles["input"]} rounded-5`} />
//       </Form.Item>
//       <Form.Item label="Recording Video" className={styles.label}>
//         {/* <RecordVideo className={styles.recordVideo} /> */}
//       </Form.Item>
//       <Form.Item
//         className={styles.submit}
//         wrapperCol={{
//           ...layout.wrapperCol,
//           offset: 8,
//         }}
//       >
//         <Button
//           className={`${styles["btn"]} `}
//           type="primary"
//           htmlType="submit"
//         >
//           Sign Up
//         </Button>
//       </Form.Item>

//     </Form>
//   );
// };

// export default SignUpInput;
