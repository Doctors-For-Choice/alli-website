import styles from "./ContentSection.module.scss"

const ContentSection = ({children}) => {
    return(
        <div className={styles.contentSection}>
            {children}
        </div>
    )
}

export default ContentSection;