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
import { register, ResetSuccess } from '../store/slices/authSlice'


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

  useEffect(() => {
    console.log("errors : ", errors)
  }, [errors])

  useEffect(() => {
    console.log("inputs : ", inputs)
  }, [inputs])

  useEffect(() => {
    is_success && dispatch(ResetSuccess()) && router.push("/dashboard")
  }, [is_success]);

  const onSubmit = (data) => {
    alert(JSON.stringify(data))
    dispatch(register(data));
  };

  return (
    <div className={`${styles.signUp}`}>
      <div className="container-xxl">
        <div className="row">
          <div className="col-xl-5 col-lg-5 mt-4">
            <lottie-player src="https://lottie.host/b1752808-0ad2-49fb-b5a5-4ae952e1ffc8/FU8xh3edGg.json" background="transparent" speed="1" style={{ width: "400px", marginLeft: "60px" }} className="text-center" loop autoplay />
            {/* <h2 className="text-white text-center">SHEBAK</h2> */}
          </div>
          <div className={`col-xl-7 col-lg-7 mt-4`}>
            <div className={styles.right_section}>

              <div className="d-flex justify-content-center">
                <div className="">
                  <Image
                    src={logo}
                    alt="user profile picture"
                    width={60}
                    height={60}
                    className="me-5 position-absolute end-0"
                  />
                  {/* <h2 className="d-inline-block d-flex justify-content-center">Sign Up</h2> */}
                  <form className="w-100" onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                      <div className="col">
                        <ShebakInput
                          register={register}
                          name="username"
                          label="Name"
                          required
                          error={errors.username?.message}
                        />
                      </div>
                      <div className="col">
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
                      <FaceRecorder />
                    </div>
                    <div className="d-flex justify-content-center mt-4 mb-3">
                      <Button
                        className={`${styles.btn} border-0 rounded-5 px-5`}
                        type="primary"
                        htmlType="submit"
                      >
                        Sign Up
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
  );
};


export default SignUp

SignUp.getLayout = function getLayout(page) {
  return <>
    {page}
  </>
}
