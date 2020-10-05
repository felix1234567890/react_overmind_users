export const state = {
  users: [],
  loading: false,
  search: "",
  language: "en",
  sortOrder: { value: "", label: "None" },
  pagination: {
    pageNumber: 1,
    itemsPerPage: 6,
    pageCount: 0,
  },
};
