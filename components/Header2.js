import styles from "../styles/Header.module.css";
import Link from "next/link";
import { useState } from "react";
import { VideoCameraOutlined , WarningOutlined , TeamOutlined} from '@ant-design/icons';

const Header = () => {

  const [active, setActive] = useState("")

  return (
    <div className={styles.contNav}>
      <div className="">
        <nav
          className={`${styles.navbar} navbar navbar-expand-lg navbar-light position-absolute top-0`}
        >
          <div className="">
            <div className="d-flex justify-content-center">
              <ul className="list-unstyled mx-5">
                <li className="nav-item">
                  <a className={`rounded-5 ${styles.logo}`} href="#">
                    <img src="images/Logo1.png" className="d-flex align-items-center" />
                  </a>
                </li>
                <li className="nav-item mx-auto mt-3">
                  <Link href="/" className={`nav-link fs-5 d-flex align-items-center text-white ${styles.active}`}>
                    <VideoCameraOutlined />
                    <span className="ms-3">Streams</span>
                  </Link>
                </li>
                <li className="nav-item mx-auto mt-3">
                  <Link href="#" className="nav-link fs-5 d-flex align-items-center">
                  <TeamOutlined />
                  <span className="ms-3">Students</span>
                  </Link>
                </li>
                <li className="nav-item mx-auto mt-3">
                  <Link href="#" className="nav-link fs-5 d-flex align-items-center">
                  <WarningOutlined />
                  <span className="ms-3"> Warnings</span>
                  </Link>
                </li>
                <li className="nav-item mx-auto mt-3">
                  <Link href="#" className="nav-link fs-5 d-flex align-items-center">
                  <TeamOutlined />
                  <span className="ms-3"> People</span>
                  </Link>
                </li>



                <li className="nav-item mx-auto mt-3">
                  <Link href="#" className="nav-link fs-5 d-flex align-items-center">
                  <WarningOutlined />
                  <span className="ms-3"> Warnings</span>
                  </Link>
                </li>
                <li className="nav-item mx-auto mt-3">
                  <Link href="#" className="nav-link fs-5 d-flex align-items-center">
                  <WarningOutlined />
                  <span className="ms-3"> Warnings</span>
                  </Link>
                </li>
                <li className="nav-item mx-auto mt-3">
                  <Link href="#" className="nav-link fs-5 d-flex align-items-center">
                  <WarningOutlined />
                  <span className="ms-3"> Warnings</span>
                  </Link>
                </li>
                <li className="nav-item mx-auto mt-3">
                  <Link href="#" className="nav-link fs-5 d-flex align-items-center">
                  <WarningOutlined />
                  <span className="ms-3"> Warnings</span>
                  </Link>
                </li>
                <li className="nav-item mx-auto mt-3">
                  <Link href="#" className="nav-link fs-5 d-flex align-items-center">
                  <WarningOutlined />
                  <span className="ms-3"> Warnings</span>
                  </Link>
                </li>
                <li className="nav-item mx-auto mt-3">
                  <Link href="#" className="nav-link fs-5 d-flex align-items-center">
                  <WarningOutlined />
                  <span className="ms-3"> Warnings</span>
                  </Link>
                </li>
                <li className="nav-item mx-auto mt-3">
                  <Link href="#" className="nav-link fs-5 d-flex align-items-center">
                  <WarningOutlined />
                  <span className="ms-3"> Warnings</span>
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
