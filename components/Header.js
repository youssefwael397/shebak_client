import styles from "../styles/Header.module.css";

const Header = () => {
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
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link fs-5 fw-bold"
                    aria-current="page"
                    href="#"
                  >
                    Streams
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fs-5 fw-bold" href="#">
                    Students
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fs-5 fw-bold" href="#">
                    Warnings
                  </a>
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
