import React from "react";
import { useActions } from "../overmind";

const Header = () => {
  const { setSearch, setLanguage } = useActions();
  return (
    <header className="header">
      <div className="header__title">Users Search app</div>
      <div className="header__search">
        <input
          type="search"
          placeholder="Search by country"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <span onClick={setLanguage} className="language">
        EN
      </span>
    </header>
  );
};

export default Header;
