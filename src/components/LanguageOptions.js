
import styles from "./Header.module.scss";
import { useTranslation } from "react-i18next";

const LanguageOptions = () => {
    let { _, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const languageOptions = ["de", "en"].map((option, index) => {
        return (
            <button key={index}
                className={styles.languageButton}
                onClick={() => changeLanguage(option)}
            >
                { option }
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