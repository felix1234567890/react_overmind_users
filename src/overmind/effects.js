export const getUsers = async () => {
  const response = await fetch("../users.json");
  return await response.json();
};
export const shuffleUsers = (users) => {
  if (!users.length > 0) return users;
  for (let i = users.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [users[i], users[j]] = [users[j], users[i]];
  }
  return users;
};
