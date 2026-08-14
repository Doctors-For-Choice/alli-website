
import styles from "./Header.module.scss";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const LanguageOptions = () => {
    let { t, i18n } = useTranslation("menu");

    const languageOptions = [ "de", "en", "ro" ]

    const [chosenLanguageIndex, setChosenLanguageIndex] = useState(0);
    const nextLanguage = async () => {
        const index = (chosenLanguageIndex + 1) % languageOptions.length;
        setChosenLanguageIndex(index);
        const lng = languageOptions[index];
        await i18n.changeLanguage(lng);
    }

    return (
        <button
            className={styles.languageButton}
            onClick={() => nextLanguage()}
            aria-label={`language: ${t("language")}`}
        >
            {t("language")}
        </button>
    )
}

export default LanguageOptions;