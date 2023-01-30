import styles from "../styles/Header.module.css";

const HeaderTop = ({title}) => {

  return (
    <div className={styles.contNav}>
          <div className={styles.HeaderTop}>
            <h3 className="mt-3">{title}</h3>
          </div>
    </div>
  );
};

export default HeaderTop;
