import styles from '../styles/Stream.module.css';
import StreamVideo from '../components/StreamVideo';
import io from 'socket.io-client';
import { useEffect, useRef, useState } from 'react';
import { PlayCircleOutlined } from '@ant-design/icons';
import CamStyles from '../styles/RecordVideo.module.css';
import captureVideoFrame from 'capture-video-frame';
import HeaderTop from '../components/HeaderTop';
import { useDispatch, useSelector } from 'react-redux';
import { startStream, stopStream } from '../store/slices/streamSlice';
import { Switch } from 'antd';

const Stream = () => {
  const { is_loading, is_streaming } = useSelector((state) => state.stream);
  const [socket, setSocket] = useState(true);
  const dispatch = useDispatch();
  const [streamUrl, setStreamUrl] = useState('');
  const [open, setOpen] = useState(true);

  const handleStartStream = () => {
    dispatch(startStream());
    setOpen(true);
  };

  const handleStopStream = () => {
    dispatch(stopStream());
    setOpen(false);
  };

  const toggleStream = () => {
    if (open == 1) {
      handleStopStream();
    } else {
      handleStartStream();
    }
  };

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  useEffect(() => {
    console.log(is_loading);
  }, [is_loading]);

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
        {/* <lottie-player src="https://lottie.host/0ce13572-2e2a-4dea-b31b-455a2639e49c/Wbwp8c3hni.json" background="transparent" speed="1" style={{ width: "1112px", position: "absolute", top: 0, left: 278, right: 0 }} loop autoplay></lottie-player> */}
        <div className="mx-auto text-center mt-5">
          {/* <HeaderTop title="Video Stream" /> */}
        </div>
        <div className={` pt-3 pb-3 `}>
          <div className="container">
            <div
              className={` mb-2 ${styles.cont_video} d-flex align-items-center justify-content-center`}
            >
              <div className="d-flex align-items-center">
                <div className="text-center mx-auto w-100 ms-5 me-5">
                  <div className="mb-5 ms-5">
                    <div
                      className={`ms-5 mt-3 ${CamStyles.videoContainer} ${CamStyles.StreamvideoContainer} position-relative`}
                    >
                      {/* <div>Socket Connected</div> */}

                      {!open ? (
                        <div
                          className={`${styles.wstream} d-flex justify-content-center align-items-center rounded-4 border border-dark `}
                        >
                          <img src="../images/loading.gif" width="50" />
                        </div>
                      ) : (
                        <img
                          src="http://localhost:8000/stream"
                          width="630"
                          height="435.5"
                          className="rounded-4 border border-dark"
                        />
                      )}

                      {/* <div className="text-center mt-3"> */}

                      {/* <button className="btn btn-primary mx-2" onClick={handleStartStream}>Start</button> */}
                      {/* <button className="btn btn-secondary mx-2" onClick={handleStopStream}>Stop</button> */}

                      {/* </div> */}
                    </div>
                    <img
                      src="../images/robotStream.png"
                      width="500"
                      // height="130"
                      className="position-absolute bottom-0 end-0"
                    />
                  </div>
                </div>
                  <div className="text-white fs-6 ms-4 position-relative">
                    <img
                      className={styles.arrowsAnimatetop}
                      src="../images/arrowsAnimate.gif"
                      width="80px"
                    />
                    <div className="ms-5">
                      <p className={`me-3 ms-2 ${!open ? '' : 'text-white-50'}`}>
                        Stop
                      </p>
                      <Switch onChange={toggleStream} checked={open} className={styles.switch} />
                      <p className={`ms-2 mt-3 ${open ? '' : 'text-white-50'}`}>
                        Play
                      </p>
                    </div>
                    <img
                      className={styles.arrowsAnimatebottom}
                      src="../images/arrowsAnimate.gif"
                      width="80px"
                    />
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
