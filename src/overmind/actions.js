export const loadUsers = async ({ effects, state }) => {
  state.loading = true;
  const result = await effects.getUsers();
  const users = effects.shuffleUsers(result);
  state.users = users;
  state.pagination.pageCount = Math.ceil(
    state.users.length / state.pagination.itemsPerPage
  );
  state.loading = false;
};
export const setSearch = ({ state }, value) => {
  state.search = value;
};
export const setLanguage = ({ state }) => {
  state.language === "en" ? (state.language = "hr") : (state.language = "en");
};
