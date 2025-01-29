import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslation from "./../en.json";
import arTranslation from "./../ar.json";

i18n
    .use(LanguageDetector) // Auto-detect language
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: enTranslation },
            ar: { translation: arTranslation },
        },
        lng: localStorage.getItem("i18nextLng") || "en", // Load stored language
        fallbackLng: "en",
        interpolation: { escapeValue: false },
    });

// Ensure language is stored when changed
i18n.on("languageChanged", (lng) => {
    localStorage.setItem("i18nextLng", lng);
});

export default i18n;
