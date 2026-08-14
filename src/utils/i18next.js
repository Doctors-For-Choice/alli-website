import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";
import contactDE from "../assets/locales/contact/de.json"
import contactEN from "../assets/locales/contact/en.json"
import contactRO from "../assets/locales/contact/ro.json"
import aboutUsDE from "../assets/locales/aboutUs/de.json"
import aboutUsEN from "../assets/locales/aboutUs/en.json"
import aboutUsRO from "../assets/locales/aboutUs/ro.json"
import menuDE from "../assets/locales/menu/de.json"
import menuEN from "../assets/locales/menu/en.json"
import menuRO from "../assets/locales/menu/ro.json"
import aboutAlliDE from "../assets/locales/aboutAlli/de.json"
import aboutAlliEN from "../assets/locales/aboutAlli/en.json"
import aboutAlliRO from "../assets/locales/aboutAlli/ro.json"
import imprintDE from "../assets/locales/imprint/de.json"
import imprintEN from "../assets/locales/imprint/en.json"
import imprintRO from "../assets/locales/imprint/ro.json"
import supportUsDE from "../assets/locales/support/de.json"
import supportUsEN from "../assets/locales/support/en.json"
import supportUsRO from "../assets/locales/support/ro.json"
import homeDE from "../assets/locales/home/de.json"
import homeEN from "../assets/locales/home/en.json"
import homeRO from "../assets/locales/home/ro.json"
import feedbackDE from "../assets/locales/feedback/de.json"
import feedbackEN from "../assets/locales/feedback/en.json"
import feedbackRO from "../assets/locales/feedback/ro.json"
import informationDE from "../assets/locales/informationQualifiedPersonell/de.json"
import informationEN from "../assets/locales/informationQualifiedPersonell/en.json"
import informationRO from "../assets/locales/informationQualifiedPersonell/ro.json"
import notFound404DE from "../assets/locales/notFound/de.json"
import notFound404EN from "../assets/locales/notFound/en.json"

const i18n = i18next
    .use(initReactI18next)
    .use(detector)
    .init({
        debug: true,
        resources: {
            de: {
                // this is the "namespace" so we can have more json files
                aboutUs: aboutUsDE,
                aboutAlli: aboutAlliDE,
                contact: contactDE,
                home: homeDE,
                feedback: feedbackDE,
                imprint: imprintDE,
                information: informationDE,
                menu: menuDE,
                notFound: notFound404DE,
                supportUs: supportUsDE,
            },
            en: {
                aboutUs: aboutUsEN,
                aboutAlli: aboutAlliEN,
                contact: contactEN,
                home: homeEN,
                feedback: feedbackEN,
                imprint: imprintEN,
                information: informationEN,
                menu: menuEN,
                notFound: notFound404EN,
                supportUs: supportUsEN,
            },
            ro: {
                aboutUs: aboutUsRO,
                aboutAlli: aboutAlliRO,
                contact: contactRO,
                feedback: feedbackRO,
                home: homeRO,
                imprint: imprintRO,
                information: informationRO,
                menu: menuRO,
                supportUs: supportUsRO
            }
        },
        lng: "de",
        supportedLngs: [ "de", "en", "ro" ],
        languageOptions: [ "de", "en", "ro" ],
        fallbackLng: "de",
        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        }
    },
);

export default i18n;