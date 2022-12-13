import styles from "../styles/Stream.module.css";
import StreamVideo from "../components/StreamVideo";
import usePyramidWebCam from "pyramid-webcam";
import io from 'socket.io-client';
import { useEffect, useRef, useState } from "react";
import { PlayCircleOutlined } from "@ant-design/icons";
import CamStyles from "../styles/RecordVideo.module.css";
import captureVideoFrame from "capture-video-frame";




const Stream = () => {
  const streamRef = useRef();

  const {
    openCam,
    closeCam,
    startRecording,
    stopRecording,
    downloadPyramidRecord,
    webCamStatus,
    recordedBlob,
  } = usePyramidWebCam(streamRef, "webm");

  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState("message");

  useEffect(() => {
    const newSocket = io(`http://localhost:5000`, {
      reconnectionDelay: 10000,
      // reconnectionDelayMax: 15000
    });
    // console.log(newSocket);
    setSocket(newSocket);
    return () => newSocket.close();
  }, []);

  useEffect(() => {
    if (socket)
      socket.on('response', (data) => {
        console.log(data)
      })
  }, [socket])


  useEffect(() => {
    console.log('first')
    if (streamRef)
      getVideoTrack()
  }, [streamRef])

  const getVideoTrack = () => {
    // while (streamRef) {
    const frame = captureVideoFrame("preview", "png");
    const formData = new FormData();
    if (frame) {
      formData.append("file", frame.blob, `my-screenshot.${frame.format}`);
      // console.log(frame);
      // console.log(formData);
      socket.emit('face_recognition', { "formData": "formData" })
    }
    // }
  }

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      // console.log(socket)
      console.log(message)
      socket.emit('face_recognition', { "message": message })
    }
  };

  return (
    <div className={`${styles.stream} py-5`}>
      <div className="container">
        <div className={` ${styles.cont_video} bg-white rounded-4 p-5 mt-4`}>
          <div className="d-flex justify-content-center mx-auto">
            {
              socket ?
                <div className="text-center mx-auto w-100">
                  <div className="mx-auto d-flex justify-content-center mb-5">
                    <div className={`${CamStyles.videoContainer} ${CamStyles.StreamvideoContainer} position-relative`}>
                      <video
                        ref={streamRef}
                        className=" border border-1 rounded mt-3 bg-dark"
                        id="preview"
                        width="600"
                        height="455.5"
                        autoPlay
                        muted
                      ></video>

                      <p className="lead mx-4 mt-3 mb-2 fw-bold fs-4">Status: {webCamStatus}</p>

                      {webCamStatus == "Closed" || webCamStatus == "Stopped" ? (
                        <button
                          className={`btn border-0 ${CamStyles.btn_open_cam}`}
                          type="button"
                          onClick={openCam}
                        >
                          <PlayCircleOutlined
                            style={{ fontSize: "50px", color: "#e0e0e0" }}
                          />
                        </button>
                      ) : null}
                    </div>
                  </div>
                </div> :
                <div>Socket Not Connected</div>
            }
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
  );
};

export default Stream;
