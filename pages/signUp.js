import styles from '../styles/signUp.module.css';
import {
  ShebakInput,
  ShebakInputIcon,
  ShebakLabel,
} from '../components/Inputs';
import logo from '../public/images/suezuni.png';
import Image from 'next/image';
import FaceRecorder from '../components/FaceRecorder';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import {
  registerSchemaStepOne,
  registerSchemaStepTwo,
} from '../lib/validation/en/registerSchema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { register as signUp, ResetSuccess } from '../store/slices/authSlice';
import RecorderComponent from '../components/Recorder';
import { UserOutlined, MailOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useState } from 'react';

const initialState = {
  username: '',
  email: '',
  face_video: '',
};

const FormStepOne = ({ setStep, formInfo, setFormInfo }) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    setValue,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchemaStepOne),
    defaultValues: formInfo,
    mode: 'all',
  });

  const onSubmit = (data) => {
    setFormInfo({ ...formInfo, ...data });
    setStep(2);
  };

  return (
    <form
      className={`w-75 position-absolute top-50 start-50 translate-middle`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <>
        <img
          src="../images/logoSignUp.png"
          width="190px"
          className="mx-auto d-flex justify-content-center"
        />
        {/* <h3 className="fw-bold text-center text-dark mt-4 mb-3">Welcome to Shebak!</h3> */}
        <h3 className="fw-bold text-center text-dark mt-4 mb-3">
          Smart Security System
        </h3>
        <div className="row d-flex justify-content-center">
          <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-12 col-sm-12 mt-4">
            <ShebakInputIcon
              // register={register}
              name="username"
              control={control}
              placeholder="Name"
              icon={<UserOutlined />}
              required
            />
            {errors.username?.message && (
              <p className="m-0 text-danger">{errors.username?.message}</p>
            )}
          </div>
          <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-12 col-sm-12 mt-4">
            <ShebakInputIcon
              // register={register}
              name="email"
              control={control}
              placeholder="Office Email"
              icon={<MailOutlined />}
              required
            />
            {errors.email?.message && (
              <p className="m-0 text-danger">{errors.email?.message}</p>
            )}
          </div>
        </div>

        <div className={`d-flex justify-content-center mt-4`}>
          <Button
            // onClick={() => setStep(2)}
            className={`${styles.btn} border-0 rounded-4 px-5 fs-6`}
            type="primary"
            htmlType="submit"
          >
            Next
          </Button>
        </div>
      </>
    </form>
  );
};

const FormStepTwo = ({ setStep, formInfo, setFormInfo }) => {
  const { is_loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    setValue,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchemaStepTwo),
    defaultValues: formInfo,
    mode: 'all',
  });

  const onSubmit = (data) => {
    setFormInfo({ ...formInfo, ...data });
    dispatch(signUp(data));
  };

  return (
    <form
      className={`w-75 position-absolute top-50 start-50 translate-middle`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <>
        <ShebakLabel label="Recording Video" />
        <div>
          <FaceRecorder setValue={setValue} />

          {errors.face_video?.message && (
            <div className="text-danger text-center mt-4">
              {errors.face_video.message}
            </div>
          )}
        </div>

        <div
          className={`d-flex justify-content-center mt-4 ${
            errors.face_video?.message ? 'mt-3' : 'mt-5'
          }`}
        >
          <Button
            onClick={() => setStep(1)}
            className={`${styles.btn} me-4 text-white border-0 rounded-4 px-5 fs-6`}
            htmlType="button"
          >
            Previous
          </Button>

          <Button
            className={`border-0 rounded-4 px-5 fs-6 ${styles.disabled}`}
            htmlType="submit"
            // disabled
          >
            {is_loading ? 'Loading...' : 'Sign Up'}
          </Button>

          {/* <Button
              className={`${styles.btn} border-0 rounded-4 px-5 fs-6`}
              type="primary"
              htmlType="submit"
            >
              {is_loading ? 'Loading...' : 'Sign Up'}
            </Button> */}
        </div>
      </>
    </form>
  );
};

const SignUp = () => {
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);
  const [formInfo, setFormInfo] = useState(initialState);
  const { is_success, is_loading, registerInfo } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    console.log(formInfo);
  }, [formInfo]);

  useEffect(() => {
    if (is_success) {
      console.log('succceesssssss');
      setFormInfo(initialState);
      setStep(1);
      dispatch(ResetSuccess());
    }
  }, [dispatch, is_success, setFormInfo]);

  return (
    <div className={` `}>
      {/* <div className={`${styles.cont} `}> */}
      <div className={`${styles.signUp}  rounded-5`}>
        <div>
          {/* <div className="container-xxl"> */}
          <div className="row">
            <div className={`col-xl-6 col-lg-6 ${styles.d_none}`}>
              <lottie-player
                src="https://lottie.host/7b4e4ddf-a8d1-4742-b0d2-ea8eb2fdb801/XpSpqOPdac.json"
                background="transparent"
                speed="1"
                style={{
                  width: '450px',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
                loop
                autoplay
              ></lottie-player>
            </div>
            <div
              className={`col-xl-6 col-lg-6 col-md-12 col-sm-12 ${styles.cont_right_section}`}
            >
              <div className={`${styles.right_section} position-relative`}>
                <div className="d-flex justify-content-center">
                  <div className="">
                    <img
                      src="../images/arrow_left.png"
                      width="200px"
                      className={` ${styles.arrowleft}`}
                    />

                    {step == 1 && (
                      <FormStepOne
                        setStep={setStep}
                        formInfo={formInfo}
                        setFormInfo={setFormInfo}
                      />
                    )}
                    {step == 2 && (
                      <FormStepTwo
                        setStep={setStep}
                        formInfo={formInfo}
                        setFormInfo={setFormInfo}
                      />
                    )}

                    <img
                      src="../images/arrow_right.png"
                      width="200px"
                      className={` ${styles.arrowright}`}
                    />
                  </div>
                </div>

                <div className={`position-absolute bottom-0 ${styles.dots}`}>
                  <img src="../images/dotsWhite.png" width="40px" />
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
    </div>
  );
};

export default SignUp;

SignUp.getLayout = function getLayout(page) {
  return <>{page}</>;
};
