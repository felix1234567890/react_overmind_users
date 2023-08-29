import React from "react";
import selectStyles from "../selectStyles";
import Select from "react-select";
import { useTranslation } from "react-i18next";
import { useActions, useOvermindState } from "../overmind";

const Filters = () => {
  const { t } = useTranslation();
  const { sortOrder } = useOvermindState();
  const { setSort } = useActions();

  const options = [
    { value: "", label: t("none") },
    { value: "asc", label: t("ageAsc") },
    { value: "desc", label: t("ageDesc") },
    { value: "under40", label: t("ageUnder") },
    { value: "over40", label: t("ageOver") },
    { value: "male", label: t("male") },
    { value: "female", label: t("female") },
  ];

  return (
    <div className="sortBy">
      <span>{t("sortBy")} </span>
      <Select
        styles={selectStyles}
        defaultValue={options[0]}
        value={sortOrder}
        onChange={setSort}
        options={options}
      />
    </div>
  );
};

export default Filters;
