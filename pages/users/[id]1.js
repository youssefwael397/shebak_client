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
import ImgPreview from "../../components/ImgPreview";
import { Alert, Space, Spin } from 'antd';
import LoadingSpin from "../../components/LoadingSpin";
import Link from "next/link";

const UserInfo = ({ user_warning }) => {
  const { is_loading, imgPath, api_errors } = useSelector(state => state.user)
  const { user, warnings } = user_warning
  return (
    <div className='bg-gray-800 h-screen p-16 text-gray-100'>
      <div className="container">
        <div className={`mt-5 mb-4 px-4 me-3 ${styles.warning}`}>
          <div className={`rounded-2`}>
            <h5 className={`mt-5 fs-5 text-white ${styles.title}`}>User info</h5>
            <hr />
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <p className={styles.data}>Name</p>
                <p className="text-white">{user?.username}</p>
              </div>
              <div className="col-xl-8 col-lg-8 col-md-6 col-sm-6">
                <p className={styles.data}>Email</p>
                <p className="text-white">{user?.email}</p>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <p className={styles.data}>Face Image</p>
                <ImgPreview
                  alt={user?.username}
                  // src={`${imgPath}/${user?.photo}`}
                  src="../images/person.jpg"
                />
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <p className={styles.data}>Warnings{user?.warnings?.length}</p>
                {warnings?.length > 0 ? <ul className="">
                  {warnings.map((w, index) => <li key={index}><Link className="btn btn-secondary mb-2" href={`/warnings/${w.id}`} >{w.date}
                    <br />
                    status : violence
                  </Link></li>)}</ul> :
                  // eslint-disable-next-line react/no-unescaped-entities
                  <p className={styles.data}>This user doesn't make any violence actions.</p>
                }
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