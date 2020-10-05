import React from "react";
import selectStyles from "../selectStyles";
import Select from "react-select";
import { useTranslation } from "react-i18next";
import { useActions, useState } from "../overmind";

const Filters = () => {
  const { t } = useTranslation();
  const options = [
    { value: "", label: t("none") },
    { value: "asc", label: t("ageAsc") },
    { value: "desc", label: t("ageDesc") },
    { value: "under40", label: t("ageUnder") },
    { value: "over40", label: t("ageOver") },
    { value: "male", label: t("male") },
    { value: "female", label: t("female") },
  ];
  const { sortOrder } = useState();
  const { setSort } = useActions();

  return (
    <div className="sortBy">
      <span>Sort by: </span>
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
