import axios from "axios";

const url = "http://localhost:4001/api";

export const api = axios.create({
  baseURL: url,
});
