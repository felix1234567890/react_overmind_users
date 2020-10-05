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
export const paginateUsers = (users, pageNumber = 1, itemsPerPage = 6) => {
  const skip = (pageNumber - 1) * itemsPerPage;
  if (users.length > 0) {
    const shownUsers = users.slice(skip, skip + itemsPerPage);
    return shownUsers;
  } else return [];
};

export const filterUsers = (users, value) => {
  const val = new RegExp(value.toLowerCase(), "g");
  const searchedUsers = users.filter((user) => {
    console.log(user);
    if (user.country.toLowerCase().match(val)) return true;
    return false;
  });
  searchedUsers.sort((a, b) => a.country - b.country);
  return searchedUsers;
};
