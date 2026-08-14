
import styles from "./Header.module.scss";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const LanguageOptions = () => {
    let { _, i18n } = useTranslation();

    const languageOptions = [
        { code: "de", title: "Deutsch" },
        { code: "en", title: "English" },
        { code: "ro", title: "Romanian" }
    ]
    const [chosenLanguageIndex, setChosenLanguageIndex] = useState(0);
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setChosenLanguage(lng);
    };


    const nextIndex = () => {
        const index = (chosenLanguageIndex + 1) % languageOptions.length;
        setChosenLanguageIndex(index);
        const lng = languageOptions[index];
        changeLanguage(lng.code);
        console.log(lngCode);
        return index
    }


    return (
        <button
            className={styles.languageButton}
            onClick={() => nextIndex()}
        >
            {languageOptions[chosenLanguageIndex].title}
        </button>
    )
}

export default LanguageOptions;