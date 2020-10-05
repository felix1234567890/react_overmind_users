export const loadUsers = async ({ effects, state }) => {
  state.loading = true;
  state.users = await effects.getUsers();
  state.loading = false;
};
export const setSearch = ({ state }, value) => {
  state.search = value;
};
export const setLanguage = ({ state }) => {
  state.language === "en" ? (state.language = "hr") : (state.language = "en");
};
