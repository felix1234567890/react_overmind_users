import React, { useEffect } from "react";
import "./App.scss";
import Header from "./components/Header";
import { useTranslation } from "react-i18next";
import { useState } from "./overmind";
import Filters from "./components/Filters";
import UsersList from "./components/UsersList";

function App() {
  const { language } = useState();
  const { i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n, language]);
  return (
    <>
      <Header />
      <Filters />
      <UsersList />
    </>
  );
}

export default App;
