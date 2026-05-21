import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:9000/api/v1/data"
});

export default API;