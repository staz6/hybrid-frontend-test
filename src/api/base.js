import axios from "axios";

// default axios object to use through out the app
const defaultAxios = axios.create({
  baseURL: "http://hn.algolia.com/api/v1/",

  withCredentials: false,
});

export const Endpoint = {
  getSearchResult: async (data) =>
    defaultAxios.get("search", { params: { query: data } }),
  getPostById: async (id) => defaultAxios.get(`items/${id}`),
};
