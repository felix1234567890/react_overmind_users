import React from "react";
import { useActions } from "../overmind";
import { useTranslation } from "react-i18next";
import { useUsersStore } from "../zustand";

const Header = () => {
  const { setSearch, setLanguage } = useActions();
  const filterUsers = useUsersStore(state=>state.filterUsers)
  const { t } = useTranslation();

  return (
    <header className="header">
      <div className="header__title">{t("headerTitle")}</div>
      <div className="header__search">
        <input
          type="search"
          placeholder={t("searchText")}
          onChange={(e) => filterUsers(e.target.value)}
        />
      </div>
      <span onClick={setLanguage} className="language">
        {t("lng")}
      </span>
    </header>
  );
};

export default Header;
