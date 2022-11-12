import React from "react";
import styles from "../styles/signUp.module.css";
import SignUpInput from "../components/inputs";
import logo from "../public/images/suezuni.png";
import Image from "next/image";

const SignUp = ({ loading }) => {
  return (
    <>
      <div className={styles.container}>
        <div className="row">
          <div className={`${styles["input"]}  col-xxl-8  col-xl-8  col-lg-8`}>
            <div className={`${styles["logo"]}`}>
              <div></div>
              <h1>Sign Up</h1>
              <Image
                src={logo}
                alt="user profile picture"
                width={90}
                height={90}
              />
            </div>
            <SignUpInput loading={loading} />
          </div>


          {/* animation section */}

          <div className={`${styles["animation"]}  col-xxl-4  `}>
            
            {/* <lottie-player src="https://lottie.host/b1752808-0ad2-49fb-b5a5-4ae952e1ffc8/FU8xh3edGg.json" background="transparent" speed="1" style="width: 300px; height: 300px;" loop autoplay/>
             */}

            <h1>SUEZ UNIVERSITIY</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp