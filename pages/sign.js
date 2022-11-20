import styles from "../styles/signUp.module.css";
import { ShebakInput, ShebakLabel } from "../components/Inputs";
import logo from "../public/images/suezuni.png";
import Image from "next/image";
import FaceRecorder from "../components/FaceRecorder";
import { Button } from "antd";

const SignUp = () => {
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
                <div className="mt-4">
                  <Image
                    src={logo}
                    alt="user profile picture"
                    width={60}
                    height={60}
                    className="me-5 position-absolute end-0"
                  />
                  <h2 className="d-inline-block d-flex justify-content-center">Sign Up</h2>
                  <form className="w-100">
                    <ShebakInput label="Name" required={true} /><br />
                    <ShebakInput label="Office Email" required={true} /><br />
                    <ShebakLabel label="Recording Video"/>
                    {/* <FaceRecorder /> */}
                    <div className="d-flex justify-content-center mt-4">
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