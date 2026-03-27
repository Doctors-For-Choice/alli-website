import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";
import { translations_de } from "./de.js";
import { translations_en } from "./en.js";

const i18n = i18next
    .use(initReactI18next)
    .use(detector)
    .init({
        resources: {
            de: { translations: translations_de },
            en: { translations: translations_en }
        },
        fallbackLng: "de",
        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        }
    },
);

i18n.languages = [
    { code: 'de', title: 'Deutsch' },
    { code: 'en', title: 'English' }
]

export default i18n;