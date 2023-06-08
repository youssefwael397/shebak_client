import React from 'react';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { newDataSet } from '../../lib/warnings';
import { DefaultPlayer as Vid } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import BreadCrumb from '../../components/BreadCrumb';
import { Timeline } from 'antd';
import styles from '../../styles/Warnings.module.css';
import {
  CalendarOutlined,
  ClockCircleOutlined,
  DownloadOutlined,
  FileSearchOutlined,
  Html5Filled,
} from '@ant-design/icons';
import LoadingSpin from '../../components/LoadingSpin';
import { getWarning } from '../../store/slices/warningSlice';
import { useDispatch, useSelector } from 'react-redux';
import ImgPreview from '../../components/ImgPreview';
import Link from 'next/link';
// import Users from "../users/[id]";

const WarningdInfo = ({ warning }) => {
  const { user_details, warning_info } = warning;
  const { imgPath } = useSelector((state) => state.user);

  return (
    <div className="bg-gray-800 h-screen p-16 text-gray-100">
      <div className="container">
        <div className={` ${styles.one_warning}`}>
          <div className={`mb-4 ${styles.warning}`}>
            <h5 className={`mt-5 fs-5 ${styles.title}`}>Warning info</h5>
            <hr />
            <div className={``}>
              <div className="text-white">
                <div className={`mt-3 fs-5`}>
                  <div className="text-gray-400 d-flex align-items-center">
                    <FileSearchOutlined
                      className="me-2"
                      style={{ color: '#72a2ba' }}
                    />
                    Detected Status : {warning_info?.status}
                  </div>
                </div>
                <div className={`mt-3 fs-5`}>
                  <div className="text-gray-400 d-flex align-items-center">
                    <CalendarOutlined
                      className="me-2"
                      style={{ color: '#72a2ba' }}
                    />
                    Date : {warning_info?.date}
                  </div>
                </div>
                <div className={`mt-3 fs-5`}>
                  <div
                    className={`text-gray-400 d-flex align-items-center ${styles.download}`}
                  >
                    <Link
                      className="d-flex text-white text-decoration-none justify-content-center align-items-center"
                      download={true}
                      href={`http://localhost:8000/api/warnings/video/${warning_info?.video_name}`}
                    >
                      <DownloadOutlined
                        style={{ fontSize: '20px', color: '#66B4D2' }}
                      />
                      <span className="ms-2"> Download Video</span>
                    </Link>
                  </div>
                </div>
              </div>

              <h5 className={`mt-5 fs-5 ${styles.title}`}>Users in Video</h5>
              <hr />

              <div className={`mt-3`}>
                <div className="text-gray-400">
                  {user_details?.length > 0 ? (
                    <ol className="m-0 p-0">
                      {user_details.map((user) => (
                        <li
                          key={user.id}
                          className={`m-0 text-white d-block my-3 d-flex align-items-center img_warning`}
                        >
                          <div>
                            <ImgPreview
                              alt={user?.username}
                              src={`${imgPath}/${user?.photo}`}
                              // src="../images/person.jpg"
                            />
                          </div>
                          <Link
                            className="text-white text-decoration-underline"
                            href={`/users/${user?.id}`}
                          >
                            {user?.username}
                          </Link>
                        </li>
                      ))}
                    </ol>
                  ) : (
                    // eslint-disable-next-line react/no-unescaped-entities
                    <p className={styles.data}>
                      Could not detect users in this video.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Warnings() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const { warning, is_loading, imgPath, api_errors } = useSelector(
    (state) => state.warning
  );

  // const warning = {
  //   id: id,
  //   status: 'Vilence',
  //   date: '23/7/2001',
  //   users: [
  //     {
  //       id: 1,
  //       username: 'my girl ♥',
  //     },
  //     {
  //       id: 2,
  //       username: 'my girl ♥',
  //     },
  //     {
  //       id: 3,
  //       username: 'my girl ♥',
  //     },
  //   ],
  // };

  useEffect(() => {
    id && dispatch(getWarning(id));
  }, [dispatch, id]);

  return (
    <>
      {is_loading && <LoadingSpin />}
      {warning && <WarningdInfo warning={warning} />}{' '}
      {api_errors && (
        // <div className="position-absolute top-50 start-50 translate-middle">
        <div className="p-4 w-100">
          <div className="alert alert-danger text-center fs-6" role="alert">
            404, {api_errors}
          </div>
        </div>
      )}
    </>
  );
}
