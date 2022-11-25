import { useRef, useState, useEffect } from 'react'
import usePyramidWebCam from 'pyramid-webcam'
import { PlayCircleOutlined } from "@ant-design/icons";

export default function FaceRecorder() {

    const streamRef = useRef();
    const downloadRef = useRef();
    const [countDown, setCountDown] = useState(0)

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
                    <p>{countDown}</p>
                    <p className='lead mx-4'>Status: {webCamStatus}</p>
                    <button
                        className='ms-2'
                        type="primary"
                        onClick={openCam}
                    >
                        Open Camera
                    </button>

                    <button
                        className='ms-2'
                        type="default"
                        onClick={closeCam}
                    >
                        Close Camera
                    </button>

                    <button
                        className='ms-2'
                        type="primary"
                        onClick={start}
                    >
                        Start Recording
                    </button>

                    {/* <button
              className='ms-2'
              type="primary"
              onClick={stopRecording}
            >
              Stop Recording
            </button> */}

                    <a
                        ref={downloadRef}
                    >
                        <button
                            className='ms-2'
                            type="primary"
                        >
                            Download
                        </button>
                    </a>
                    <div>
                        <video
                            ref={streamRef}
                            className=' border border-1 rounded mt-3 bg-dark'
                            id="preview"
                            width="500"
                            height="375.5"
                            autoPlay
                            muted
                        ></video>
                        <PlayCircleOutlined style={{ fontSize: '16px', color: 'white' }} />
                    </div>

                </div>
            </div>
        </>
    )
}