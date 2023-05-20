import styles from "../styles/Stream.module.css";
import StreamVideo from "../components/StreamVideo";
import io from 'socket.io-client';
import { useEffect, useRef, useState } from "react";
import { PlayCircleOutlined } from "@ant-design/icons";
import CamStyles from "../styles/RecordVideo.module.css";
import captureVideoFrame from "capture-video-frame";
import HeaderTop from "../components/HeaderTop";
import { useDispatch } from "react-redux";
import { startStream, stopStream } from "../store/slices/streamSlice";


const Stream = () => {
  const [socket, setSocket] = useState(true);
  const [isStreaming, setIsStreaming] = useState(true);
  const [src, setSrc] = useState("http://localhost:8000/stream");
  const [message, setMessage] = useState("message");
  const dispatch = useDispatch()


  const handleStartStream = () => {
    dispatch(startStream())
    setIsStreaming(true)
    setSrc('http://localhost:8000/stream')
  }


  const handleStopStream = () => {
    dispatch(stopStream())
    setIsStreaming(false)
    setSrc('')
  }


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
                      {
                        <img
                          src={src}
                          width="700"
                          height="495.5"
                          className="rounded-4 border border-1"
                        />
                      }
                      <div className="text-center mt-3">
                        <button className="btn btn-primary mx-2" onClick={handleStartStream}>Start</button>
                        <button className="btn btn-secondary mx-2" onClick={handleStopStream}>Stop</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stream;
