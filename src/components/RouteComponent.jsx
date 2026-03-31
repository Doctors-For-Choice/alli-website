import styles from "./Route.module.scss";

const RouteComponent = ({route}) => {
    return(
        <div aria-hidden="true" className={styles.banner}>
            {route}
        </div>
    )
}

export default RouteComponent;