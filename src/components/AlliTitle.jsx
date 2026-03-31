import AlliLogo from '../assets/images/alli-logo.svg';
import styles from "./AlliTitle.module.scss"
import classNames from "classnames"

const AlliTitle = ({className}) => {
    return (
        <span className={classNames(styles.AlliTitle, styles[className])}>
            <img className={styles.logo} src={AlliLogo} alt="Logo of Alli" />
            <span className={styles.title}>Alli</span>
        </span>
    )
}

export default AlliTitle;