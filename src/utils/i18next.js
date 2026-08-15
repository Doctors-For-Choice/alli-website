import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import contactDE from "../assets/locales/contact/de.json"
import aboutUsDE from "../assets/locales/aboutUs/de.json"
import contactEN from "../assets/locales/contact/en.json"
import aboutUsEN from "../assets/locales/aboutUs/en.json"
import menuDE from "../assets/locales/menu/de.json"
import menuEN from "../assets/locales/menu/en.json"
import aboutAlliDE from "../assets/locales/aboutAlli/de.json"
import aboutAlliEN from "../assets/locales/aboutAlli/en.json"
import imprintDE from "../assets/locales/imprint/de.json"
import imprintEN from "../assets/locales/imprint/en.json"
import supportUsDE from "../assets/locales/support/de.json"
import supportUsEN from "../assets/locales/support/en.json"
import homeDE from "../assets/locales/home/de.json"
import homeEN from "../assets/locales/home/en.json"
import feedbackDE from "../assets/locales/feedback/de.json"
import feedbackEN from "../assets/locales/feedback/en.json"
import informationDE from "../assets/locales/informationQualifiedPersonell/de.json"
import informationEN from "../assets/locales/informationQualifiedPersonell/en.json"
import notFound404DE from "../assets/locales/notFound/de.json"
import notFound404EN from "../assets/locales/notFound/en.json"

const { VITE_ENVIRONMENT } = import.meta.env;

const i18n = i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        debug: VITE_ENVIRONMENT === "dev",
        detection: {
            order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
            lookupQuerystring: 'lng',
            lookupCookie: 'i18next',
            lookupLocalStorage: 'i18nextLng',
            lookupSessionStorage: 'i18nextLng',
            // cache user language
            caches: ['localStorage'],
            // optional conversion function used to modify the detected language code
            // we do this because otherwise e.g. en-GB will not count as en
            convertDetectedLanguage: (lng) => lng.split("-")[0]
        },
        resources: {
            de: {
                menu: menuDE,
                contact: contactDE, // this is the "namespace" so we can have more json files
                aboutUs: aboutUsDE,
                aboutAlli: aboutAlliDE,
                imprint: imprintDE,
                supportUs: supportUsDE,
                home: homeDE,
                feedback: feedbackDE,
                information: informationDE,
                notFound: notFound404DE
            },
            en: {
                menu: menuEN,
                contact: contactEN,
                aboutUs: aboutUsEN,
                aboutAlli: aboutAlliEN,
                imprint: imprintEN,
                supportUs: supportUsEN,
                home: homeEN,
                feedback: feedbackEN,
                information: informationEN,
                notFound: notFound404EN
            },
        },
        supportedLngs: [ "en", "de" ],
        languageOptions: [ "en", "de" ],
        fallbackLng: "de",
        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        }
    },
);

export default i18n;