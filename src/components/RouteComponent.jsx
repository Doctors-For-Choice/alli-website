import styles from "./Route.module.scss";
import LanguageOptions from "./LanguageOptions.jsx";

const RouteComponent = ({route}) => {
    return(
        <>
            <div aria-hidden="true" className={styles.banner}>
                {route}
                <LanguageOptions />
            </div>
        </>
    )
}

export default RouteComponent;