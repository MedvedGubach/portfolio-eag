import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "../constants/translations/en-translation.json";
import esTranslation from "../constants/translations/es-translation.json";

const resources = {
    en: {
        translation: enTranslation,
    },
    es: {
        translation: esTranslation,
    },
};

i18n
    .use(initReactI18next) 
    .init({
        resources, 
        lng: "en", 
        fallbackLng: "en", 
        debug: false, 
        interpolation: {
            escapeValue: false, 
        },
    });

export default i18n;