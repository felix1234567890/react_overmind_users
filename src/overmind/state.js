import { derived } from "overmind";
import { filterUsers, sortUsers } from "./effects";
export const state = {
  users: [],
  loading: false,
  search: "",
  language: "en",
  sortOrder: { value: "", label: "None" },
  pagination: {
    pageNumber: 1,
    itemsPerPage: 6,
    pageCount: 0,
  },
  filteredUsers: derived(({ users, search }) => {
    if (!search) return [];
    return filterUsers(users, search);
  }),
  sortedUsers: derived(({ users, sortOrder }) => {
    if (!sortOrder.value) return [];
    return sortUsers([...users], sortOrder);
  }),
};
