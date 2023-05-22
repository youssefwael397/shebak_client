import { useRef, useState, useEffect } from 'react';
import { PlayCircleOutlined, DownloadOutlined } from "@ant-design/icons";
import styles from "../styles/RecordVideo.module.css";
import usePyramidWebCam from 'pyramid-webcam';

export default function FaceRecorder({ setValue }) {

    const streamRef = useRef();
    const downloadRef = useRef();
    // const [countDown, setCountDown] = useState(0);
    const [videoTimer, setVideoTimer] = useState(5);

    const {
        openCam,
        closeCam,
        startRecording,
        stopRecording,
        downloadPyramidRecord,
        webCamStatus,
        recordedBlob,
    } = usePyramidWebCam(streamRef, "webm")

    useEffect(() => { console.log(webCamStatus) }, [webCamStatus])
    useEffect(() => { console.log(recordedBlob) }, [recordedBlob])

    useEffect(() => {
        if (webCamStatus == "recording") {
            if (videoTimer > 0) {
                setTimeout(() => setVideoTimer(videoTimer - 1), 1000)
            } else {
                stopRecording()
                setVideoTimer(5)
            }
        }
    }, [webCamStatus, videoTimer, stopRecording])

    useEffect(() => {
        if (recordedBlob) {
            setValue('face_video', recordedBlob)
        }
    }, [recordedBlob, setValue])

    return (
        <>
            <div className='text-center mx-auto w-100'>
                <div className='mx-auto'>
                    <div className={`${styles.videoContainer} position-relative`}>
                        <video
                            ref={streamRef}
                            className=' border border-1 rounded mt-3 '
                            id="preview"
                            width="366"
                            height="275.5"
                            autoPlay
                            muted
                        ></video>

                        {
                            webCamStatus == "recording" ?
                                <div className={`position-absolute ${styles.videoTimer}`}>
                                    <div className={`text-white fs-5 position-relative`}>

                                        <span className={`position-absolute translate-middle p-2 border-0 rounded-circle ${styles.circle}`}>
                                            {/* <span className="visually-hidden">New alerts</span> */}
                                        </span>

                                        <p className='d-inline-block text-white'>{videoTimer}</p>
                                    </div>
                                </div> : null
                        }

                        {
                            webCamStatus == "closed" ?
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
                            webCamStatus == "opened" || webCamStatus == "stopped" ?
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