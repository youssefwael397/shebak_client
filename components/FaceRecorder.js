import { useRef, useState, useEffect } from 'react';
import usePyramidWebCam from 'pyramid-webcam';
import { PlayCircleOutlined, DownloadOutlined } from "@ant-design/icons";
import styles from "../styles/RecordVideo.module.css";

export default function FaceRecorder({ setValue }) {

    const streamRef = useRef();
    const downloadRef = useRef();
    // const [countDown, setCountDown] = useState(0);
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

    useEffect(() => {
        if (webCamStatus == "Recording") {
            if (videoTimer > 0) {
                setTimeout(() => setVideoTimer(videoTimer - 1), 1000)
            } else {
                stopRecording()
            }
        }
    }, [webCamStatus, videoTimer])

    return (
        <>
            <div className='text-center mx-auto w-100'>
                <div className='mx-auto'>
                    <div className={`${styles.videoContainer} position-relative`}>
                        <video
                            ref={streamRef}
                            className=' border border-1 rounded mt-3 bg-dark'
                            id="preview"
                            width="400"
                            height="275.5"
                            autoPlay
                            muted
                        ></video>

                        {
                            webCamStatus == "Recording" ?
                                <div className={`position-absolute ${styles.videoTimer}`}>
                                    <div className={`text-white fs-5 position-relative`}>

                                        <span className={`position-absolute translate-middle p-2 border-0 rounded-circle ${styles.circle}`}>
                                            <span className="visually-hidden">New alerts</span>
                                        </span>

                                        <p className='d-inline-block'>{videoTimer}</p>
                                    </div>
                                </div> : null
                        }

                        {
                            webCamStatus == "Closed" || webCamStatus == "Stopped" ?
                                <button
                                    className={`btn border-0 ${styles.btn_open_cam}`}
                                    type="button"
                                    onClick={openCam}
                                >
                                    <PlayCircleOutlined style={{ fontSize: '50px', color: '#e0e0e0' }} />
                                </button>
                                : null
                        }


                        {
                            webCamStatus == "Opened" ?
                                <div className={styles.record}>
                                    <p>PRESS <span>REC</span> WHEN READY</p>
                                    <button
                                        className={`ms-2 rounded-circle ${styles.btn_record}`}
                                        type="button"
                                        onClick={startRecording}
                                    >
                                    </button>
                                </div>
                                : null
                        }

                    </div>

                </div>
            </div>
        </>
    )
}