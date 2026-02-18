export const filterUsers = (users, search, status) => {
  return users.filter((user) => {
    const searchTerm = search ? search.trim().toLowerCase() : "";
    const matchSearch = searchTerm === "" || user.name
      .toLowerCase()
      .includes(searchTerm);

    const matchStatus = status ? user.status === status : true;

    return matchSearch && matchStatus;
  });
};

export const getStats = (users) => {
  const active = users.filter((u) => u.status === "Active").length;
  const inactive = users.filter((u) => u.status === "Inactive").length;

  return {
    active,
    inactive,
    total: users.length,
  };
};
