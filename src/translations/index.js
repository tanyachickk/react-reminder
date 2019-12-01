import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from "./en.json";
import ruTranslations from "./ru.json";

const resources = {
  EN: {
    translation: enTranslations
  },
  RU: {
    translation: ruTranslations
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "RU"
});

export default i18n;
