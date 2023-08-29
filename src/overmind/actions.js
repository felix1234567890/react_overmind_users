export const loadUsers = async ({ effects, state }) => {
  state.loading = true
  const result = await effects.getUsers()
  const users = effects.shuffleUsers(result)
  state.users = users
  state.loading = false
}
export const setSearch = ({ state }, value) => {
  state.search = value
}
export const setSort = ({ state }, value) => {
  state.sortOrder = value
}
export const setLanguage = ({ state }) => {
  state.language === 'en' ? (state.language = 'hr') : (state.language = 'en')
}
export const onInitializeOvermind = async ({
  state,
  actions
}) => {
  const initialData = await actions.loadUsers()
  state.initialData = initialData
}
