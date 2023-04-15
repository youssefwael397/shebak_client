import React from "react";
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { newDataSet } from '../../lib/warnings';
import { DefaultPlayer as Vid } from "react-html5video";
import "react-html5video/dist/styles.css";
import BreadCrumb from "../../components/BreadCrumb";
import { Timeline } from "antd";
import styles from "../../styles/Warnings.module.css";
import { ClockCircleOutlined, FileSearchOutlined, Html5Filled } from "@ant-design/icons";

export default function Warnings() {
  const router = useRouter()
  const { id } = router.query;
  const [warning, setWarning] = useState(null)

  useEffect(() => {
    newDataSet.length && newDataSet.map(warn => warn.id == id && setWarning(warn))
  }, [])

  return (
    <div className='bg-gray-800 h-screen p-16 text-gray-100'>

      {
        warning && <>
          <div className="container">
            <div className={`mt-5 mb-4 px-4 me-3 ${styles.warning}`}>
              <h5 className={`mt-5 fs-5 text-white ${styles.title}`}>Warning info</h5>
              <hr />
              <div className={styles.all}>
                <div>
                  <div>
                    <Vid className={styles.video}
                      controls
                    >
                      <source src={`/${warning?.video_name}`} type="video/mp4"></source>
                    </Vid>
                  </div>
                  {/* <div className="col">
                    <div className="App">
                      <div style={{ padding: "10px", paddingLeft: '50px' }}>
                        <h4 style={{ marginBottom: "2rem", marginTop: '20px' }} className="text-white">
                          Video Info
                        </h4>

                        <Timeline className="timeline" style={{ color: '#b9b9b9' }}>

                          <Timeline.Item>
                            <div className="text-gray-400">
                              Created at {warning?.date}
                            </div>
                          </Timeline.Item>
                          <Timeline.Item>
                            <div className="text-gray-400">
                              Detected Stats is {warning?.status}
                            </div>
                          </Timeline.Item>
                          <Timeline.Item>
                            <div className="text-gray-400">
                              Users in Video <br />ali Ahmed bakry <br /> fathy abdo mostapha <br />
                              Youssef Wael <br />
                            </div>
                          </Timeline.Item>
                          <Timeline.Item>
                            <div className="text-gray-400">
                              Being solved at {warning?.date}
                            </div>
                          </Timeline.Item>
                        </Timeline>

                      </div>
                    </div>
                  </div> */}
                </div>
                <div className={`App `}>
                  <div className={`mt-3 ms-4 p-5 d-flex ${styles.blur}`}>
                    <div className="text-gray-400 mx-auto p-2">
                      <h4 className="text-white">Users in Video</h4>
                      <p className={`${styles.data} mb-4 fs-5`}>
                        ali Ahmed bakry <br /> fathy abdo mostapha<br />
                        Youssef Wael <br /> Ali Mohamed <br /> Mohamed Mounir
                      </p>
                    </div>
                  </div>
                  {/* <div className={`${styles.blur} ms-4`}>

                  </div> */}
                </div>
              </div>

              <div className={`mt-3 fs-5 ${styles.data}`}>
                <div className="text-gray-400 d-flex align-items-center">
                  <ClockCircleOutlined className="me-2" style={{color: "#72a2ba"}}/> Created : {warning?.date}
                </div>

                <div className="text-gray-400 d-flex align-items-center">
                  <FileSearchOutlined className="me-2" style={{color: "#72a2ba"}}/> Detected Stats : {warning?.status}
                </div>
                {/* <div className="text-gray-400">
                  Being solved at {warning?.date}
                </div> */}
              </div>

            </div>
          </div>
        </>
      }
    </div>
  );
}