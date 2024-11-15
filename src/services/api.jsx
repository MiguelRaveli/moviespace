// BASE DA URL: https://api.themoviedb.org/3/movie/157336?api_key=7d698b180844208c016ac1118ff91e9b

import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;
