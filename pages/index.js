import styles from "../styles/Stream.module.css";
import StreamVideo from "../components/StreamVideo";
import usePyramidWebCam from "pyramid-webcam";
import io from 'socket.io-client';
import { useEffect, useRef, useState } from "react";
import { PlayCircleOutlined } from "@ant-design/icons";
import CamStyles from "../styles/RecordVideo.module.css";
import captureVideoFrame from "capture-video-frame";
import HeaderTop from "../components/HeaderTop";


const Stream = () => {
  const [socket, setSocket] = useState(true);
  const [src, setSrc] = useState(null);
  const [message, setMessage] = useState("message");

  useEffect(() => {
    setSrc('http://localhost:8000/stream')
  }, []);

  // const sendMessage = (e) => {
  //   e.preventDefault();
  //   if (message) {
  //     // console.log(socket)
  //     console.log(message)
  //     socket.emit('face_recognition', { "message": message })
  //   }
  // };

  return (
    <>
      <div className={`${styles.stream} mt-5 px-5`}>
        <HeaderTop title="Video Stream" />
        <div className={` pt-3 pb-3`}>
          <div className="container">
            <div className={`mt-2 mb-3 ${styles.cont_video} d-flex align-items-center justify-content-center`}>
              <div className="d-flex align-items-center">
                <div className="text-center mx-auto w-100">
                  <div className="mb-5">
                    <div className={`${CamStyles.videoContainer} ${CamStyles.StreamvideoContainer} position-relative`}>
                      {/* <div>Socket Connected</div> */}
                      <img
                        src={src}
                        width="700"
                        height="495.5"
                        className="rounded-4"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* {socket ? (
        <div className="chat-container mt-3">
          <form>
            <input
              value={message}
              placeholder="Type your message"
              onChange={(e) => {
                setMessage(e.target.value)
              }}
            />
            <button type="submit" onClick={sendMessage}>Send</button>
          </form>
        </div>
      ) : (
        <div>Socket Not Connected</div>
      )} */}
        </div>
      </div>
    </>
  );
};

export default Stream;
