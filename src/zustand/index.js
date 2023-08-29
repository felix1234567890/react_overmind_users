import { create } from "zustand";

export const filterUsersAction = (users, value) => {
  const val = new RegExp(value.toLowerCase(), "g");
  const searchedUsers = users.filter((user) => {
    return user.country.toLowerCase().match(val);
  });
  searchedUsers.sort((a, b) => a.country - b.country);
  return searchedUsers;
};

export const loadUsersAction = async () => {
  const response = await fetch("../users.json");
  const users = await response.json();
  if (!users.length > 0) return users;
  for (let i = users.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [users[i], users[j]] = [users[j], users[i]];
  }
  return users;
};

export const useUsersStore = create((set, get) => ({
  users: [],
  loading: false,
  search: "",
  language: "en",
  sortOrder: { value: "", label: "None" },
  loadUsers: async () => {
    set(() => ({ loading: true }));
    const users = await loadUsersAction();
    set(() => ({ users, loading: false }));
  },
  filterUsers: (search) => {
    if (!search) return;
    const users = get().users;
    const filteredUsers = filterUsersAction(users, search);
    set(() => ({ users: filteredUsers }));
  },
}));
