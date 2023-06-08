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
        <div className={`mt-5 mb-4 px-4 me-3 ${styles.warning}`}>
          <h5 className={`mt-5 fs-5 text-white ${styles.title}`}>Warning info</h5>
          <hr />
          <div className={styles.all}>
            <div className={`App `}>
              <div className={`mt-3 fs-5 ${styles.data}`}>
                <div className="text-gray-400 d-flex align-items-center">
                  <FileSearchOutlined className="me-2" style={{ color: "#72a2ba" }} />
                  Detected Status : Violence
                </div>
              </div>
              <div className={`mt-3  p-5 ${styles.blur}`}>
                
                <div className="text-gray-400">
                  <h4 className="text-white">Users in Video</h4>
                 
                  {
                    warning.users?.length > 0 ?
                      <ol className="m-0">
                        {warning.users.map(user =>
                          <li key={user.id} className={`m-0 text-white d-block my-3`}>
                            <Link className="text-white btn btn-secondary" href={`/users/${user.id}`}>{user.username}</Link>
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