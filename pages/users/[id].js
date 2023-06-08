import React from "react";
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { newDataSet } from '../../lib/users';
import { DefaultPlayer as Vid } from "react-html5video";
import "react-html5video/dist/styles.css";
import { Timeline } from "antd";
import styles from "../../styles/Warnings.module.css";
import { getUser } from "../../store/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import ImgPreviewUser from "../../components/ImgPreviewUser";
import { Alert, Space, Spin } from 'antd';
import LoadingSpin from "../../components/LoadingSpin";
import Link from "next/link";
import { MailOutlined, UserOutlined } from "@ant-design/icons";

const UserInfo = ({ user_warning }) => {
  const { is_loading, imgPath, api_errors } = useSelector(state => state.user)
  const { user, warnings } = user_warning
  return (
    <div className='bg-gray-800 h-screen p-16 text-gray-100'>
      <div className="container">
        <div className={`mt-5 mb-4 px-4 me-3 ${styles.warning}`}>
          <div className={`rounded-2`}>
            <div className="d-flex">
              <ImgPreviewUser
                alt={user?.username}
                // src={`${imgPath}/${user?.photo}`}
                src="../images/person.jpg"
              />
              <div className="mt-5 ms-3 text-white fs-6">
                <div className="d-flex align-items-center mt-1"><UserOutlined /> <span className=" ms-3">{user?.username} Nouran Ali</span></div>
                <div className="d-flex align-items-center mt-3"><MailOutlined /><span className="ms-3">{user?.email} noran@gmail.com</span></div>
              </div>
            </div>

            <div className={`mt-5 fs-6 ms-3 w-75 rounded-4 p-4 ${styles.warningsUser}`}>
              <p className="text-white ms-3">Warnings{user?.warnings?.length}</p>
              {warnings?.length > 0 ? <ul className="ps-0 row text-center">
                {
                  warnings.map((w, index) =>
                    <li key={index} className="list-group-item col-4">
                      <Link className="btn mb-3 p-3 px-5" href={`/warnings/${w.id}`} >{w.date}
                        <br />
                        status : violence
                      </Link>
                    </li>
                  )}</ul>
                :
                // eslint-disable-next-line react/no-unescaped-entities
                <p className={styles.data}>This user doesn't make any violence actions.</p>
              }
            </div>

          </div>
        </div>
      </div>
    </div>)
}

export default function Users() {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const { is_loading, imgPath, api_errors } = useSelector(
    (state) => state.user
  );

  const user_warning = {
    id,
    username: 'Noran + Youssef = ♥',
    email: 'myGirl@gmail.com',
    photo: 'path/to/photo',
    warnings: [
      {
        id: 1,
        date: '05-9-2025 15:30',
      },
      {
        id: 2,
        date: '05-9-2025 15:30',
      },
      {
        id: 3,
        date: '05-9-2025 15:30',
      },
    ],
  };

  // useEffect(() => { console.log(user_warning) }, [user_warning])

  // useEffect(() => {
  //   id && dispatch(getUser(id))
  // }, [dispatch, id])

  return (
    <>
      {/* {is_loading && <LoadingSpin />} */}
      {user_warning && <UserInfo user_warning={user_warning} />}
      {/* {api_errors && (
        // <div className="position-absolute top-50 start-50 translate-middle">
        <div className="p-4 w-100">
          <div className="alert alert-danger text-center fs-6" role="alert">
            404, {api_errors}
          </div>
        </div>
      )} */}
    </>
  );
}