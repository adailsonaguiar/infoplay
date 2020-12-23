import axios from "axios";

const baseURL = (url) =>
  url === 1
    ? "https://www.omdbapi.com"
    : "https://api.streamingmoviesright.com";

const api = (url) =>
  axios.create({
    baseURL: baseURL(url),
  });

export default api;
