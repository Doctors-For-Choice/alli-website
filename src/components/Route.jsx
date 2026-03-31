import styles from "./Route.module.scss";

const Route = ({route}) => {
    return(
        <div aria-hidden="true" className={styles.banner}>
            {route}
        </div>
    )
}

export default Route;