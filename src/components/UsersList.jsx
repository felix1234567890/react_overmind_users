import React from "react";
import { useTranslation } from "react-i18next";
import { useState } from "../overmind";
import UserItem from "./UserItem";

const UsersList = () => {
  let { filteredUsers, users, loading } = useState();
  const { t } = useTranslation();
  return (
    <div className="container">
      {loading && <h1>{t("loading")}</h1>}
      <section className="card-row">
        {filteredUsers.length > 0
          ? filteredUsers.map((user, index) => {
              return <UserItem {...user} key={index} />;
            })
          : users.map((user, index) => {
              return <UserItem {...user} key={index} />;
            })}
      </section>
    </div>
  );
};

export default UsersList;
