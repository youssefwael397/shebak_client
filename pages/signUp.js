import styles from "../styles/signUp.module.css";
import { ShebakInput, ShebakLabel } from "../components/Inputs";
import logo from "../public/images/suezuni.png";
import Image from "next/image";
import FaceRecorder from "../components/FaceRecorder";
import { Button } from "antd";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { registerSchema } from "../lib/validation/en/registerSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { register as signUp, ResetSuccess } from '../store/slices/authSlice'


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
    is_success && reset() && dispatch(ResetSuccess()) // && router.push("/")
  }, [is_success]);

  const onSubmit = (data) => {
    // console.log(data)
    dispatch(signUp(data));
  };

  return (
    <div className={`${styles.cont} `}>
      <div className={`${styles.signUp} p-3 rounded-5`}>
        <div className="container-xxl">
          <div className="row">
            <div className={`col-xl-6 col-lg-6 ${styles.d_none}`}>

              <lottie-player src="https://lottie.host/7b4e4ddf-a8d1-4742-b0d2-ea8eb2fdb801/XpSpqOPdac.json" background="transparent" speed="1" style={{ width: "450px" , marginLeft: "auto", marginRight: "auto" }} loop autoplay></lottie-player>
              {/* <lottie-player src="https://lottie.host/b1752808-0ad2-49fb-b5a5-4ae952e1ffc8/FU8xh3edGg.json" background="transparent" speed="1" style={{ width: "400px", marginLeft: "60px" }} className="text-center" loop autoplay /> */}

            </div>
            <div className={`col-xl-6 col-lg-6 col-md-12 col-sm-12 mt-3 mb-3 ${styles.cont_right_section}`}>
              <div className={`${styles.right_section} rounded-5`}>

                <div className="d-flex justify-content-center">
                  <div className="">
                    {/* <Image
                    src={logo}
                    alt="user profile picture"
                    width={60}
                    height={60}
                    className="me-5 position-absolute end-0"
                  /> */}
                    <h3 className="fw-bold text-dark">Welcome to Shebak!</h3>
                    <form className="w-100" onSubmit={handleSubmit(onSubmit)}>
                      <div className="row">
                        <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-12 col-sm-12">
                          <ShebakInput
                            register={register}
                            name="username"
                            label="Name"
                            required
                            error={errors.username?.message}
                          />
                        </div>
                        <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-12 col-sm-12">
                          <ShebakInput
                            register={register}
                            name="email"
                            label="Office Email"
                            required
                            error={errors.email?.message}
                          />
                        </div>
                      </div>

                      <ShebakLabel label="Recording Video" />
                      <div>
                        <FaceRecorder setValue={setValue} />
                        {
                          errors.face_video?.message &&
                          <div className="text-danger mt-4">{errors.face_video.message}</div>
                        }
                      </div>
                      <div className={`d-flex justify-content-center ${errors.face_video?.message ? "mt-3" : "mt-5"}`}>
                        <Button
                          className={`${styles.btn} border-0 rounded-4 px-5`}
                          type="primary"
                          htmlType="submit"
                        >
                          {is_loading ? "Loading..." : "Sign Up"}
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default SignUp

SignUp.getLayout = function getLayout(page) {
  return <>
    {page}
  </>
}
