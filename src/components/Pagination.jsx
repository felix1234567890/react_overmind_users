import React from "react";
import { useTranslation } from "react-i18next";
import { useState } from "../overmind";

const Pagination = () => {
  const { t } = useTranslation();
  const {
    pagination: { pageCount, pageNumber },
  } = useState();

  return (
    <div className="buttons">
      {`${pageNumber} / ${pageCount}`}
      {pageNumber > 1 && <button>{t("previous")}</button>}
      {pageNumber < pageCount && <button>{t("next")}</button>}
    </div>
  );
};

export default Pagination;
