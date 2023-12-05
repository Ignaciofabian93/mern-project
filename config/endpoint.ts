import axios from "axios";

const url = "http://localhost:4001/api";
// const url = "https://mern-project-services-dev-eafs.3.us-1.fl0.io/api";

export const api = axios.create({
  baseURL: url,
});
