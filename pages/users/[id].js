import React from 'react';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { newDataSet } from '../../lib/users';
import { DefaultPlayer as Vid } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import { Timeline } from 'antd';
import styles from '../../styles/Warnings.module.css';
import { getUser } from '../../store/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import ImgPreviewUser from '../../components/ImgPreviewUser';
import { Alert, Space, Spin } from 'antd';
import LoadingSpin from '../../components/LoadingSpin';
import Link from 'next/link';
import { MailOutlined, UserOutlined } from '@ant-design/icons';

const UserInfo = ({ user_warning }) => {
  const { is_loading, imgPath, api_errors } = useSelector(
    (state) => state.user
  );
  const { user, warnings } = user_warning;
  return (
    <div className="bg-gray-800 h-screen p-16 text-gray-100">
      <div className="container">
        <div className={`mt-5 mb-4 px-4 me-3 w-75 ${styles.warning}`}>
          <div className={`rounded-2`}>
            <div className={`mt-5 fs-6 ${styles.warningsUser}`}>
              <div className="d-flex justify-content-center">
                <div className='mx-auto'>
                  <ImgPreviewUser
                    alt={user?.username}
                    src={`${imgPath}/${user?.photo}`}
                    // src="../images/person.jpg"
                  />
                  <div className="mt-5 text-white fs-6 px-3">
                    <div className="d-flex justify-content-center align-items-center mt-1">
                      <UserOutlined />{' '}
                      <span className=" ms-3">{user?.username} </span>
                    </div>
                    <div className="d-flex justify-content-center align-items-center mt-3">
                      <MailOutlined />
                      <span className="ms-3">{user?.email}</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className={`mt-3 text-center ${styles.title}`}>
                Warnings ({warnings?.length})
              </p>
              <hr className="mx-auto" />
              {warnings?.length > 0 ? (
                <ul className="ps-0 text-center">
                  {warnings.map((w, index) => (
                    <li key={index} className="list-group-item">
                      <Link
                        className="btn mb-3 p-3 px-5"
                        href={`/warnings/${w.id}`}
                      >
                        Status : violence
                        <br />
                        Date : {w.date}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                // eslint-disable-next-line react/no-unescaped-entities
                <>
                  <div className="d-flex justify-content-center mt-3">
                    <lottie-player
                      src="https://lottie.host/fb91b174-64c3-4bab-ab5c-a687204fccd9/eQEMgmAHtG.json"
                      background="transparent"
                      speed="1"
                      style={{ width: '130px', height: '130px' }}
                      loop
                      autoplay
                    ></lottie-player>
                  </div>
                  <p className={`text-center ${styles.data}`}>
                    This user does not make any violence actions.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Users() {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const { user_warning, is_loading, imgPath, api_errors } = useSelector(
    (state) => state.user
  );

  // const user_warning = {
  //   id,
  //   username: 'Noran + Youssef = ♥',
  //   email: 'myGirl@gmail.com',
  //   photo: 'path/to/photo',
  //   // warnings: [
  //   //   {
  //   //     id: 1,
  //   //     date: '05-9-2025 15:30',
  //   //   },
  //   //   {
  //   //     id: 2,
  //   //     date: '05-9-2025 15:30',
  //   //   },
  //   //   {
  //   //     id: 3,
  //   //     date: '05-9-2025 15:30',
  //   //   },
  //   // ],
  // };

  // useEffect(() => { console.log(user_warning) }, [user_warning])

  useEffect(() => {
    id && dispatch(getUser(id))
  }, [dispatch, id])

  return (
    <>
      {is_loading && <LoadingSpin />}
      {user_warning && <UserInfo user_warning={user_warning} />}
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
