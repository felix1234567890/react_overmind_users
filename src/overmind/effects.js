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

export const filterUsers = (users, value) => {
  const val = new RegExp(value.toLowerCase(), "g");
  const searchedUsers = users.filter((user) => {
    if (user.country.toLowerCase().match(val)) return true;
    return false;
  });
  searchedUsers.sort((a, b) => a.country - b.country);
  return searchedUsers;
};
export const sortUsers = (users, { value }) => {
  let sortedUsers;
  switch (value) {
    case "desc":
      sortedUsers = users.sort((a, b) => {
        return b.age - a.age;
      });
      break;
    case "asc":
      sortedUsers = users.sort((a, b) => {
        return a.age - b.age;
      });
      break;
    case "under40":
      sortedUsers = users
        .filter((user) => user.age < 40)
        .sort((a, b) => a.age - b.age);
      break;
    case "over40":
      sortedUsers = users
        .filter((user) => user.age > 40)
        .sort((a, b) => a.age - b.age);
      break;
    case "female":
      sortedUsers = users.filter((user) => user.gender === "female");
      break;
    case "male":
      sortedUsers = users.filter((user) => user.gender === "male");
      break;
    default:
      return users;
  }
  return sortedUsers;
};
