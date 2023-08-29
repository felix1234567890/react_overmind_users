import React, { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import { useTranslation } from "react-i18next";
import { useOvermindState } from "./overmind";
import Filters from "./components/Filters";
import UsersList from "./components/UsersList";
import Pagination from "./components/Pagination";

function App() {
  const { language } = useOvermindState();
  const { i18n } = useTranslation();
  const [pagination, setPagination] = useState({
    pageNumber: 1,
    itemsPerPage: 6,
    pageCount: 0,
  });

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n, language]);

  const increaseNumber = () => {
    setPagination((prevState) => ({
      ...prevState,
      pageNumber: prevState.pageNumber + 1,
    }));
  };

  const decreaseNumber = () => {
    setPagination((prevState) => ({
      ...prevState,
      pageNumber: prevState.pageNumber - 1,
    }));
  };
  return (
    <>
      <Header />
      <Filters />
      <UsersList setPagination={setPagination} pagination={pagination} />
      <Pagination
        pageCount={pagination.pageCount}
        pageNumber={pagination.pageNumber}
        increaseNumber={increaseNumber}
        decreaseNumber={decreaseNumber}
      />
    </>
  );
}

export default App;
