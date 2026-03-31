
import styles from "./Header.module.scss";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const LanguageOptions = () => {
    // eslint-disable-next-line no-unused-vars
    let { _, i18n } = useTranslation();
    // eslint-disable-next-line no-unused-vars
    const [active, setActive] = useState(false);
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setActive(true);
    };

    const languageOptions = [
        { code: "de", title: "Deutsch" },
        { code: "en", title: "English" }
    ].map((option, index) => {
        return (
            <button
                key={index}
                className={styles.languageButton}
                onClick={() => changeLanguage(option.code)}
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