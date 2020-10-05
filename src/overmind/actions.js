import { pipe, mutate } from "overmind";

export const loadUsers = async ({ effects, state }) => {
  state.loading = true;
  const result = await effects.getUsers();
  const users = effects.shuffleUsers(result);
  state.pagination.pageCount = Math.ceil(
    state.users.length / state.pagination.itemsPerPage
  );
  // state.users = effects.paginateUsers(users);
  state.users = users;
  state.loading = false;
};
export const setSearch = ({ state }, value) => {
  state.search = value;
};
export const setLanguage = ({ state }) => {
  state.language === "en" ? (state.language = "hr") : (state.language = "en");
};
// export const filterUsers = pipe(
//   mutate(({ state }, value) => {
//     state.search = value;
//   }),
//   mutate(({ state, effects }) => {
//     const filteredUsers = effects.filterUsers(state.users, state.search);
//     state.pagination.pageCount = Math.ceil(
//       state.filteredUsers.length / state.pagination.itemsPerPage
//     );
//     state.filteredUsers = filteredUsers;
//   })
// );
