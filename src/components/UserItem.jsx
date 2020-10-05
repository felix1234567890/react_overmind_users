import React from "react";
import { useTranslation } from "react-i18next";

const UserItem = ({ photo, name, email, country, gender, age }) => {
  const { t } = useTranslation();
  return (
    <article className="card">
      <img src={photo} alt="user avatar" />
      <h3 className="user__name">{name}</h3>
      <div className="user__details">
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>{t("country")}:</strong> {country}
        </p>
        <p>
          <strong>{t("gender")}:</strong> {gender}
        </p>
        <p>
          <strong>{t("age")}:</strong> {age}
        </p>
      </div>
    </article>
  );
};

export default UserItem;
