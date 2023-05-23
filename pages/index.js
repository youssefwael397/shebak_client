import styles from "../styles/Stream.module.css";
import StreamVideo from "../components/StreamVideo";
import io from 'socket.io-client';
import { useEffect, useRef, useState } from "react";
import { PlayCircleOutlined } from "@ant-design/icons";
import CamStyles from "../styles/RecordVideo.module.css";
import captureVideoFrame from "capture-video-frame";
import HeaderTop from "../components/HeaderTop";
import { useDispatch, useSelector } from "react-redux";
import { startStream, stopStream } from "../store/slices/streamSlice";
import { Switch } from 'antd';

const Stream = () => {
  const { is_loading, is_streaming } = useSelector(state => state.stream)
  const [socket, setSocket] = useState(true);
  const dispatch = useDispatch()
  const [streamUrl, setStreamUrl] = useState('');


  const handleStartStream = () => {
    dispatch(startStream())
  }


  const handleStopStream = () => {
    dispatch(stopStream())
  }

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  useEffect(() => { console.log(is_loading) }, [is_loading])

  useEffect(() => {
    // Start the stream when the component mounts
    handleStartStream();

    // Clean up the stream when the component unmounts
    return () => {
      handleStopStream();
    };
  }, []);


  return (
    <>
      <div className={`${styles.stream} px-5`}>
        <lottie-player src="https://lottie.host/0ce13572-2e2a-4dea-b31b-455a2639e49c/Wbwp8c3hni.json" background="transparent" speed="1" style={{ width: "1112px", position: "absolute", top: 0, left: 278, right: 0 }} loop autoplay></lottie-player>
        <div className="mx-auto text-center mt-4">
          {/* <HeaderTop title="Video Stream" /> */}
          <div className="d-flex text-white fs-6 justify-content-center">
            <p className="me-3">Stop</p>
            <Switch defaultChecked onChange={onChange} />
            <p className="ms-3">Start</p>
          </div>
        </div>
        <div className={` pt-3 pb-3`}>
          <div className="container">
            <div className={` mb-2 ${styles.cont_video} d-flex align-items-center justify-content-center`}>
              <div className="d-flex align-items-center">
                <div className="text-center mx-auto w-100">
                  <div className="mb-5">
                    <div className={`${CamStyles.videoContainer} ${CamStyles.StreamvideoContainer} position-relative`}>

                      {/* <div>Socket Connected</div> */}
                      <img
                        src={is_loading ? '/R25N.gif' : `http://localhost:8000/stream`}
                        width="700"
                        height="495.5"
                        className="rounded-4 border border-dark"
                      />
                      <div className="text-center mt-3">

                        {/* <button className="btn btn-primary mx-2" onClick={handleStartStream}>Start</button> */}
                        {/* <button className="btn btn-secondary mx-2" onClick={handleStopStream}>Stop</button> */}

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
