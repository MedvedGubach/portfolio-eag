import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importar las traducciones
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
    .use(initReactI18next) // Integra i18next con React
    .init({
        resources, // Cargar traducciones directamente desde el código
        lng: "en", // Idioma predeterminado
        fallbackLng: "en", // Idioma a usar si no hay traducción
        debug: true, // Activar logs para depuración
        interpolation: {
            escapeValue: false, // React ya maneja la seguridad de los datos
        },
    });

export default i18n;