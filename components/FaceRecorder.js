import { useRef, useState, useEffect } from 'react';
import usePyramidWebCam from 'pyramid-webcam';
import { PlayCircleOutlined, DownloadOutlined } from "@ant-design/icons";
import styles from "../styles/RecordVideo.module.css";

export default function FaceRecorder() {

    const streamRef = useRef();
    const downloadRef = useRef();
    const [countDown, setCountDown] = useState(0);
    const [videoTimer, setVideoTimer] = useState(10);

    const {
        openCam,
        closeCam,
        startRecording,
        stopRecording,
        downloadPyramidRecord,
        webCamStatus,
        recordedBlob,
    } = usePyramidWebCam(streamRef, "webm")

    // useEffect(() => {
    //     console.log('recordedBlob: ', recordedBlob)
    // }, [recordedBlob])

    useEffect(() => {
        if (countDown > 0) {
            setInterval(() => {
                setCountDown(countDown - 1);
            }, 1000);
        }
    }, [countDown])

    const start = () => {
        setCountDown(3)
        setTimeout(() => {
            startRecording();
        }, 3000)

        setTimeout(() => {
            stopRecording();
        }, 10000)
    }

    return (
        <>
            <div className='text-center mx-auto w-100'>
                <div className='mx-auto'>
                    {/* <p>{countDown}</p>


                    <button
                        className='ms-2'
                        type="default"
                        onClick={closeCam}
                    >
                        Close Camera
                    </button> */}



                    {/* <button
              className='ms-2'
              type="primary"
              onClick={stopRecording}
            >
              Stop Recording
            </button> */}

                    {/* <a
                        ref={downloadRef}
                    >
                        <button
                            className='btn ms-2 border-0'
                            type="primary"
                            onClick={() => downloadPyramidRecord(downloadRef, 'pyramid-record')}
                        >
                            <DownloadOutlined />
                        </button>
                    </a> */}


                    <div className={`${styles.videoContainer} position-relative`}>
                        <video
                            ref={streamRef}
                            className=' border border-1 rounded mt-3 bg-dark'
                            id="preview"
                            width="500"
                            height="375.5"
                            autoPlay
                            muted
                        ></video>

                        <div className={`position-absolute ${styles.videoTimer}`}>
                            <div className={`text-white fs-5 position-relative`}>

                                <span className={`position-absolute translate-middle p-2 border-0 rounded-circle ${styles.circle}`}>
                                    <span className="visually-hidden">New alerts</span>
                                </span>

                                <p className='d-inline-block'>{videoTimer}</p>
                            </div>
                        </div>

                        <button
                            className={`btn border-0 ${styles.btn_open_cam}`}
                            type="primary"
                            onClick={openCam}
                        >
                            <PlayCircleOutlined style={{ fontSize: '50px', color: '#e0e0e0' }} />
                        </button>

                        {/* <div className={styles.record}>
                            <p>PRESS <span>REC</span> WHEN READY</p>
                            <button
                                className={`ms-2 rounded-circle ${styles.btn_record}`}
                                type="primary"
                                onClick={start}
                            >
                            </button>
                        </div> */}

                    </div>

                </div>
            </div>
        </>
    )
}