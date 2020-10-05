import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useState } from "../overmind";
import UserItem from "./UserItem";

const UsersList = () => {
  let { users, loading } = useState();
  const { t } = useTranslation();
  return (
    <div className="container">
      {loading && <h1>{t("loading")}</h1>}
      <section className="card-row">
        {users.length > 0 &&
          users.map((user, index) => {
            return <UserItem {...user} key={index} />;
          })}
      </section>
    </div>
  );
};

export default UsersList;
