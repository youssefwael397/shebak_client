import styles from "../styles/Header.module.css";

const HeaderTop = ({ title }) => {

  return (
    <div className={`${styles.HeaderTop} text-center`}>
      <h3>{title}</h3>
    </div>
  );
};

export default HeaderTop;
