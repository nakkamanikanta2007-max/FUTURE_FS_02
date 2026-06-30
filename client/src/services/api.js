import axios from "axios";

const API = axios.create({
  baseURL: "https://future-fs-02-td9y.onrender.com/api",
});

export default API;