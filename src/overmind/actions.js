export const loadUsers = async ({ effects, state }) => {
  state.users = await effects.getUsers();
};
