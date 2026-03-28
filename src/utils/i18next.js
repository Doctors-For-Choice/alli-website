import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";
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

const i18n = i18next
    .use(initReactI18next)
    .use(detector)
    .init({
        debug: true,
        resources: {
            de: {
                menu: menuDE,
                contact: contactDE, // this is the "namespace" so we can have more json files
                aboutUs: aboutUsDE,
                aboutAlli: aboutAlliDE,
                imprint: imprintDE,
            },
            en: {
                menu: menuEN,
                contact: contactEN,
                aboutUs: aboutUsEN,
                aboutAlli: aboutAlliEN,
                imprint: imprintEN,
            },
        },
        supportedLngs: [ "de", "en" ],
        languageOptions: [ "de", "en" ],
        fallbackLng: "sv",
        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        }
    },
);

export default i18n;