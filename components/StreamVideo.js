import { useRef, useState, useEffect } from "react";
import usePyramidWebCam from "pyramid-webcam";
import { PlayCircleOutlined } from "@ant-design/icons";
import styles from "../styles/RecordVideo.module.css";

export default function StreamVideo() {
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

  return (
    <>
      <div className="text-center mx-auto w-100">
        <div className="mx-auto d-flex justify-content-center mb-5">
          <div className={`${styles.videoContainer} ${styles.StreamvideoContainer} position-relative`}>
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
                className={`btn border-0 ${styles.btn_open_cam}`}
                type="button"
                onClick={openCam}
              >
                <PlayCircleOutlined
                  style={{ fontSize: "50px", color: "#e0e0e0" }}
                />
              </button>
            ) : null}

            {/* {webCamStatus == "Opened" ? (
              <div className={styles.record}>
                <p>
                  PRESS <span>REC</span> WHEN READY
                </p>
                <button
                  className={`ms-2 rounded-circle ${styles.btn_record}`}
                  type="button"
                  onClick={startRecording}
                ></button>
              </div>
            ) : null} */}
          </div>
        </div>
      </div>
    </>
  );
}
