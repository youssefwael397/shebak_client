import styles from "../styles/Header.module.css";
import Link from "next/link";
import { useState } from "react";

const Header = () => {

  const [active , setActive]= useState("")

  return (
    <div className={styles.contNav}>
      <div className="container">
        <nav
          className={`${styles.navbar} mt-1 navbar navbar-expand-lg navbar-light`}
        >
          <div className="container-fluid">
            <a className={`rounded-5 ${styles.logo}`} href="#">
              <img src="images/Logo1.png" width="90px" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbar Nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-4">
                <li className="nav-item">
                  <Link href="/" className={`nav-link fs-5 ${styles.active}`}>
                    Streams
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="#" className="nav-link fs-5">
                    Students
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="#" className="nav-link fs-5">
                    Warnings
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
