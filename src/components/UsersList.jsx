import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useState as useOvermindState } from "../overmind";
import UserItem from "./UserItem";

const UsersList = () => {
  const { filteredUsers, users, sortedUsers, loading } = useOvermindState();
  const [currentUsers, setCurrentUsers] = useState([]);

  useEffect(() => {
    setCurrentUsers(users);
  }, [users]);

  useEffect(() => {
    if (filteredUsers.length > 0) {
      setCurrentUsers(filteredUsers);
    }
  }, [filteredUsers]);

  useEffect(() => {
    if (sortedUsers.length > 0) {
      setCurrentUsers(sortedUsers);
    }
  }, [sortedUsers]);

  const { t } = useTranslation();
  return (
    <div className="container">
      {loading && <h1>{t("loading")}</h1>}
      <section className="card-row">
        {/* {filteredUsers.length > 0
          ? filteredUsers.map((user, index) => {
              return <UserItem {...user} key={index} />;
            })
          : sortedUsers.length > 0
          ? sortedUsers.map((user, index) => {
              return <UserItem {...user} key={index} />;
            })
          : users.map((user, index) => {
              return <UserItem {...user} key={index} />;
            })} */}
        {currentUsers.map((user, index) => {
          return <UserItem {...user} key={index} />;
        })}
      </section>
    </div>
  );
};

export default UsersList;
