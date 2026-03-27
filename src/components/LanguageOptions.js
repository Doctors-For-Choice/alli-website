import i18n from '../utils/i18next.js';
import styles from "./Header.module.scss";

const LanguageOptions = () => {
    const languageOptions = i18n.languages.map(option => {
        return (
            <button
                className={styles.languageButton}
                onClick={() => console.log(option.code)}
            >
                { option.title }
            </button>
        )
    })
    return (
        <>
            {languageOptions}
        </>
    )
}

export default LanguageOptions;