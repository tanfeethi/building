import React, { useEffect } from "react";
import "./App.css";
import AppRouter from "./routes/AppRouter";
import ScrollSidebar from "./components/ScrollSidebar/ScrollSidebar";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();

  // Update direction and language attribute
  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <>
      <ScrollSidebar />
      <AppRouter />
    </>
  );
}

export default App;
