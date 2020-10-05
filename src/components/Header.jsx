import React from "react";
import { useActions } from "../overmind";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { setSearch, setLanguage } = useActions();
  const { t } = useTranslation();

  return (
    <header className="header">
      <div className="header__title">{t("headerTitle")}</div>
      <div className="header__search">
        <input
          type="search"
          placeholder={t("searchText")}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <span onClick={setLanguage} className="language">
        {t("lng")}
      </span>
    </header>
  );
};

export default Header;
