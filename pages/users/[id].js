import React from "react";
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { newDataSet } from '../../lib/users';
import { DefaultPlayer as Vid } from "react-html5video";
import "react-html5video/dist/styles.css";
import { Timeline } from "antd";
import styles from "../../styles/Warnings.module.css";

export default function Users() {
  const router = useRouter()
  const { id } = router.query;
  const [user, setUser] = useState(null)

  useEffect(() => {
    newDataSet.length && newDataSet.map(user => user.id == id && setUser(user))
  }, [])

  return (
    <div className='bg-gray-800 h-screen p-16 text-gray-100'>

      {
        user && <>

          <div className="container">
            <div className={`mt-5 mb-4 px-4 me-3 ${styles.warning}`}>
              <div className={`rounded-2`}>
                <h5 className={`mt-5 fs-5 text-white ${styles.title}`}>User info</h5>
                <hr />
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <p className={styles.data}>Name</p>
                    <p className="text-white">{user?.name}</p>
                  </div>
                  <div className="col-xl-8 col-lg-8 col-md-6 col-sm-6">
                    <p className={styles.data}>Email</p>
                    <p className="text-white">{user?.email}</p>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <p className={styles.data}>Face record</p>
                    <Vid className={styles.user_video}
                      controls
                    >
                      <source src={`/${user?.face_record}`} type="video/mp4"></source>
                    </Vid>
                  </div>
                  {/* <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <p>Warnings</p>
                    <div className="text-gray-400">
                      {user?.warnings}
                    </div>
                  </div> */}

                </div>
              </div>
            </div>
          </div>

          {/* <div className="container">
            <p className="text-white mt-5 fs-5">Show User</p>
            <div className={styles.all}>
              <div className="row ">
                <Vid className={styles.video}
                  controls
                >
                  <source src={`/${user?.face_record}`} type="video/mp4"></source>
                </Vid>
              </div>
              <div className="row">
                <div className="App">
                  <div style={{ padding: "10px", paddingLeft: '50px' }}>
                    <h1 style={{ marginBottom: "2rem", marginTop: '50px', color: 'white' }}>
                      Video Info
                    </h1>
                    <Timeline className="timeline" style={{ color: '#b9b9b9' }}>
                      <Timeline.Item>
                      </Timeline.Item>
                    </Timeline>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </>
      }
    </div>
  );
}