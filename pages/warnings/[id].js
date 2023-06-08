import React from "react";
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { newDataSet } from '../../lib/warnings';
import { DefaultPlayer as Vid } from "react-html5video";
import "react-html5video/dist/styles.css";
import BreadCrumb from "../../components/BreadCrumb";
import { Timeline } from "antd";
import styles from "../../styles/Warnings.module.css";
import { CalendarOutlined, ClockCircleOutlined, DownloadOutlined, FileSearchOutlined, Html5Filled } from "@ant-design/icons";
import LoadingSpin from "../../components/LoadingSpin";
import { getWarning } from "../../store/slices/warningSlice";
import { useDispatch, useSelector } from "react-redux";
import ImgPreview from "../../components/ImgPreview";
import Link from "next/link";
// import Users from "../users/[id]";


const WarningdInfo = ({ warning }) => {

  // const { is_loading, imgPath, api_errors } = useSelector(state => state.warning)
  return (
    <div className='bg-gray-800 h-screen p-16 text-gray-100'>
      <div className="container">
        <div className={` ${styles.one_warning}`}>
          <div className={`mb-4 ${styles.warning}`}>

            <h5 className={`mt-5 fs-5 ${styles.title}`}>Warning info</h5>
            <hr />
            <div className={``}>
              <div className="text-white">
                <div className={`mt-3 fs-5`}>
                  <div className="text-gray-400 d-flex align-items-center">
                    <FileSearchOutlined className="me-2" style={{ color: "#72a2ba" }} />
                    Detected Status : Violence
                  </div>
                </div>
                <div className={`mt-3 fs-5`}>
                  <div className="text-gray-400 d-flex align-items-center">
                    <CalendarOutlined className="me-2" style={{ color: "#72a2ba" }} />
                    Date : 23/7/2022 12:00
                  </div>
                </div>
                <div className={`mt-3 fs-5`}>
                  <div className={`text-gray-400 d-flex align-items-center text-decoration-underline ${styles.download}`}>
                    <DownloadOutlined className="me-2" style={{ color: "#72a2ba" }} />
                    Download Video
                  </div>
                </div>
              </div>

              <h5 className={`mt-5 fs-5 ${styles.title}`}>Users in Video</h5>
              <hr />

              <div className={`mt-3`}>
                <div className="text-gray-400">
                  {
                    warning.users?.length > 0 ?
                      <ol className="m-0 p-0">
                        {warning.users.map(user =>
                          <li key={user.id} className={`m-0 text-white d-block my-3 d-flex align-items-center img_warning`}>
                            <div>
                              <ImgPreview
                                alt={user?.username}
                                // src={`${imgPath}/${user?.photo}`}
                                src="../images/person.jpg"
                              />
                            </div>
                            <Link className="text-white text-decoration-underline" href={`/users/${user.id}`}>{user.username}</Link>
                          </li>)}
                      </ol>
                      // eslint-disable-next-line react/no-unescaped-entities
                      : <p className={styles.data}>Couldn't detect users in this video.</p>
                  }

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Warnings() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const { is_loading, imgPath, api_errors } = useSelector(
    (state) => state.warning
  );

  const warning = {
    id: id,
    status: 'Vilence',
    date: '23/7/2001',
    users: [
      {
        id: 1,
        username: 'my girl ♥',
      },
      {
        id: 2,
        username: 'my girl ♥',
      },
      {
        id: 3,
        username: 'my girl ♥',
      },
    ],
  };

  return <>{warning && <WarningdInfo warning={warning} />}</>;
}