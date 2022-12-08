import styles from "../styles/Stream.module.css";
import StreamVideo from "../components/StreamVideo";

const Stream = () => {
  return (
    <div className={`${styles.stream} py-5`}>
      <div className="container">
        <div className={` ${styles.cont_video} bg-white rounded-4 p-5 mt-4`}>
          <div className="d-flex justify-content-center mx-auto">
            <StreamVideo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stream;
