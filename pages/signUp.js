import styles from "../styles/signUp.module.css";
import { ShebakInput, ShebakInputIcon, ShebakLabel } from "../components/Inputs";
import logo from "../public/images/suezuni.png";
import Image from "next/image";
import FaceRecorder from "../components/FaceRecorder";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { registerSchema } from "../lib/validation/en/registerSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { register as signUp, ResetSuccess } from '../store/slices/authSlice'
import RecorderComponent from "../components/Recorder";
import { UserOutlined, MailOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useState } from 'react';

const SignUp = () => {
  const router = useRouter()
  const dispatch = useDispatch();

  const { is_success, is_loading, registerInfo } = useSelector(
    (state) => state.auth
  );

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
    defaultValues: registerInfo,
  });

  const inputs = watch()

  // useEffect(() => {
  //   console.log("errors : ", errors)
  //   console.log("inputs : ", inputs)
  // }, [inputs, errors])

  useEffect(() => {
    if (is_success) {
      reset()
      dispatch(ResetSuccess())
    }
  }, [dispatch, is_success, reset]);

  const onSubmit = (data) => {
    dispatch(signUp(data));
  };

  const [step, setStep] = useState(1);


  return (
    <div className={` `}>
      {/* <div className={`${styles.cont} `}> */}
      <div className={`${styles.signUp}  rounded-5`}>
        <div>
          {/* <div className="container-xxl"> */}
          <div className="row">
            <div className={`col-xl-6 col-lg-6 ${styles.d_none}`}>

              <lottie-player src="https://lottie.host/7b4e4ddf-a8d1-4742-b0d2-ea8eb2fdb801/XpSpqOPdac.json" background="transparent" speed="1" style={{ width: "450px", marginLeft: "auto", marginRight: "auto" }} loop autoplay></lottie-player>
              {/* <lottie-player src="https://lottie.host/b1752808-0ad2-49fb-b5a5-4ae952e1ffc8/FU8xh3edGg.json" background="transparent" speed="1" style={{ width: "400px", marginLeft: "60px" }} className="text-center" loop autoplay /> */}

            </div>
            <div className={`col-xl-6 col-lg-6 col-md-12 col-sm-12 ${styles.cont_right_section}`}>
              <div className={`${styles.right_section}`}>

                <div className="d-flex justify-content-center">
                  <div className="">
                    <img src="../images/arrow_left.png"
                      width="200px"
                      className={` ${styles.arrowleft}`}
                    />
                    <form className="w-100" onSubmit={handleSubmit(onSubmit)}>
                      {
                        step == 1 ? <>
                          <img
                            src="../images/logoSignUp.png"
                            width="190px"
                            className="mx-auto d-flex justify-content-center"
                          />
                          <h3 className="fw-bold text-center text-dark mt-4">Welcome to Shebak!</h3>
                          <div className="row d-flex justify-content-center">
                            <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-12 col-sm-12 mt-4">
                              <ShebakInputIcon
                                // register={register}
                                // name="username"
                                placeholder="Name"
                                icon={<UserOutlined />}
                              // required
                              // error={errors.username?.message}
                              />
                            </div>
                            <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-12 col-sm-12 mt-4">
                              <ShebakInputIcon
                                // register={register}
                                // name="email"
                                placeholder="Office Email"
                                icon={<MailOutlined />}
                              // required
                              // error={errors.email?.message}
                              />
                            </div>
                          </div>

                          <div className={`d-flex justify-content-center mt-4`}>
                            <Button
                              onClick={setStep}
                              className={`${styles.btn} border-0 rounded-4 px-5 fs-6`}
                              type="primary"
                            // htmlType="submit"
                            >
                              Next
                            </Button>
                          </div>
                        </> : <>
                          <ShebakLabel label="Recording Video" />
                          <div>
                            <FaceRecorder setValue={setValue} />

                            {
                              errors.face_video?.message &&
                              <div className="text-danger mt-4 text-center">{errors.face_video.message}</div>
                            }
                          </div>

                          <div className={`d-flex justify-content-center mt-4 ${errors.face_video?.message ? "mt-3" : "mt-5"}`}>

                            <Button
                              className={`${styles.btn} me-4 text-white border-0 rounded-4 px-5 fs-6`}
                              onClick={setStep}
                            >
                              Previous
                            </Button>

                            <Button
                              className={`border-0 rounded-4 px-5 fs-6 ${styles.disabled}`}
                              disabled
                            >
                              Sign Up
                            </Button>

                            {/* <Button
                              className={`${styles.btn} border-0 rounded-4 px-5 fs-6`}
                              type="primary"
                              htmlType="submit"
                            >
                              {is_loading ? "Loading..." : "Sign Up"}
                            </Button> */}
                          </div>
                        </>
                      }


                    </form>
                  </div>
                </div>

                <img src="../images/arrow_right.png"
                  width="200px"
                  className={` ${styles.arrowright}`}
                />

                <div className={`position-absolute bottom-0 ${styles.dots}`}>
                  <img src="../images/dotsWhite.png" width="40px" />
                  <img src="../images/dotsWhite.png" width="40px" />
                  <img src="../images/dotsGray.png" width="40px" />
                  <img src="../images/dotsGray.png" width="40px" />
                  <img src="../images/dotsGray.png" width="40px" />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};


export default SignUp

SignUp.getLayout = function getLayout(page) {
  return <>
    {page}
  </>
}
