import React from "react";
import { useTranslation } from "react-i18next";

const Pagination = ({
  pageNumber,
  pageCount,
  increaseNumber,
  decreaseNumber,
}) => {
  const { t } = useTranslation();

  return (
    <div className="buttons">
      {`${pageNumber} / ${pageCount}`}
      {pageNumber > 1 && (
        <button onClick={decreaseNumber}>{t("previous")}</button>
      )}
      {pageNumber < pageCount && (
        <button onClick={increaseNumber}>{t("next")}</button>
      )}
    </div>
  );
};

export default Pagination;
