import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSelect from "../LanguageSelect/LanguageSelect";

export const LanguageControl = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState("");

  useEffect(() => {
    let lang = localStorage.getItem("lang");
    if (!lang) {
      lang = "EN";
      localStorage.setItem("lang", lang);
    }
    i18n.changeLanguage(lang);
    setCurrentLanguage(lang);
  }, []);

  const changeLanguage = code => {
    localStorage.setItem("lang", code);
    setCurrentLanguage(code);
    i18n.changeLanguage(code);
  };

  return (
    <LanguageSelect
      currentLanguage={currentLanguage}
      languages={["EN", "RU"]}
      onSelect={changeLanguage}
    />
  );
};
