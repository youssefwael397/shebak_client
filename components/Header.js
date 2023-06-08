import styles from "../styles/Header.module.css";
import Link from "next/link";
import { useRouter } from 'next/router';
import { useState } from "react";
import { VideoCameraOutlined, WarningOutlined, TeamOutlined, UserAddOutlined } from '@ant-design/icons';

const Header = () => {

  const router = useRouter();

  return (
    <div className={`${styles.contNav} position-fixed`}>
      <div className="">
        {/* <nav
          className={`${styles.navbar} navbar navbar-expand-lg navbar-light d-flex justify-content-center`}
        >
          <div className="">
            <div className="d-flex justify-content-center align-items-start">
              <ul className="list-unstyled mx-5">
                <li className="nav-item">
                  <a className={`rounded-5 ${styles.logo}`} href="/">
                    <img src="/images/Logo.png" className="d-flex align-items-center" />
                  </a>
                </li>
                <li className="nav-item ms-3 mt-3">
                  <Link href="/" className={`nav-link d-flex align-items-center ${router.pathname == "/" ? styles.active : " "}`}>
                    <VideoCameraOutlined />
                    <span className="ms-3">Streams</span>
                  </Link>
                </li>
                <li className="nav-item ms-3 mt-3">
                  <Link href="/users" className={`nav-link d-flex align-items-center ${router.pathname == "/users" ? styles.active : " "}`}>
                    <TeamOutlined />
                    <span className="ms-3">Users</span>
                  </Link>
                </li>
                <li className="nav-item ms-3 mt-3">
                  <Link href="/warnings" className={`nav-link d-flex align-items-center ${router.pathname == "/warnings" ? styles.active : " "}`}>
                    <WarningOutlined />
                    <span className="ms-3"> Warnings</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav> */}

        <nav
          className={`${styles.navbar} ms-4 navbar navbar-expand-lg navbar-light d-flex justify-content-center`}
        >
          <div className="">
            <div className="nav-item d-flex justify-content-center ms-3">
              <Link className={`rounded-5 ${styles.logo}`} href="/">
                <img
                  src="/images/logo6.png"
                  className="d-flex align-items-center"
                  width="100px"
                />
              </Link>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <ul className="list-unstyled p-4 rounded-5">
                <li className="nav-item">
                  <Link
                    href="/"
                    className={`nav-link d-flex align-items-center ${
                      router.pathname == '/' ? styles.active : ' '
                    }`}
                  >
                    <VideoCameraOutlined className={` ${styles.icon}`} />
                    <span className={`${styles.link}`}>Streams</span>
                  </Link>
                </li>
                <li className="nav-item mt-5">
                  <Link
                    href="/users"
                    className={`nav-link d-flex align-items-center ${
                      router.pathname.includes('/users') ? styles.active : ' '
                    }`}
                  >
                    <TeamOutlined />
                    <span className={`${styles.link}`}>Users</span>
                  </Link>
                </li>
                <li className="nav-item mt-5">
                  <Link
                    href="/warnings"
                    className={`nav-link d-flex align-items-center ${
                      router.pathname.includes('/warnings')
                        ? styles.active
                        : ' '
                    }`}
                  >
                    <WarningOutlined />
                    <span className={`${styles.link}`}> Warnings</span>
                  </Link>
                </li>
                <li className="nav-item mt-5">
                  <Link href="/signUp" className={`nav-link d-flex align-items-center ${router.pathname == "/signUp" ? styles.active : " "}`}>
                    <UserAddOutlined />
                    <span className={`${styles.link}`}>Add user</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
