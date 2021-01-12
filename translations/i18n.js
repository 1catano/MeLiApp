import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import es from "./lang/es";
import en from "./lang/en";

// translation
const resources = {
    en: {
        translation: en,
    },
    es: {
        translation: es,
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: "es",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
