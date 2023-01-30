import HeaderTop from '../components/HeaderTop'
import styles from "../styles/Warnings.module.css";

const Warnings = ({title}) => {
  return (
    <div className={styles.Warnings}>
      <HeaderTop title="Warnings"/>
      Warnings
    </div>
  )
}

export default Warnings
