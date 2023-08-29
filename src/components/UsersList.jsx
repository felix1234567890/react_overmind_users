import React, { useEffect, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { useOvermindState } from "../overmind";
import UserItem from "./UserItem";

const UsersList = ({ setPagination, pagination }) => {
  const {
    filteredUsers,
    users,
    sortedUsers,
    loading,
    search,
    sortOrder,
  } = useOvermindState();
  const [currentUsers, setCurrentUsers] = useState([]);
  const [shownUsers, setShownUsers] = useState([]);

  const paginateUsers = useCallback(
    (pageNumber, itemsPerPage = 6) => {
      const skip = (pageNumber - 1) * itemsPerPage;
      if (currentUsers.length > 0) {
        const shownUsers = currentUsers.slice(skip, skip + itemsPerPage);
        return shownUsers;
      } else return [];
    },
    [currentUsers]
  );

  useEffect(() => {
    setPagination((prevState) => ({
      ...prevState,
      pageCount: Math.ceil(users.length / prevState.itemsPerPage),
    }));
    setCurrentUsers(users);
  }, [setPagination, users]);

  useEffect(() => {
    if (search) {
      setPagination((prevState) => ({
        ...prevState,
        pageNumber: 1,
        pageCount: Math.ceil(filteredUsers.length / prevState.itemsPerPage),
      }));
      setCurrentUsers(filteredUsers);
    }
  }, [filteredUsers, search, setPagination]);

  useEffect(() => {
    if (sortOrder.value !== "") {
      setPagination((prevState) => ({
        ...prevState,
        pageNumber: 1,
        pageCount: Math.ceil(sortedUsers.length / prevState.itemsPerPage),
      }));
      setCurrentUsers(sortedUsers);
    }
  }, [setPagination, sortOrder, sortedUsers]);
  useEffect(() => {
    setShownUsers(paginateUsers(pagination.pageNumber));
  }, [paginateUsers, pagination.pageNumber]);
  const { t } = useTranslation();
  return (
    <div className="container">
      {loading && <h1>{t("loading")}</h1>}
      <section className="card-row">
        {shownUsers.map((user, index) => {
          return <UserItem {...user} key={index} />;
        })}
      </section>
    </div>
  );
};
UsersList.propTypes = {
  setPagination: PropTypes.func.isRequired,
  pagination: PropTypes.shape({
    pageNumber: PropTypes.number.isRequired,
    itemsPerPage: PropTypes.number.isRequired,
    pageCount: PropTypes.number.isRequired,
  }),
};
export default UsersList;
