import axios from 'axios';

const api = axios.create({
  baseURL: "https://proffy.polijrinternal.com",
  headers: {"Access-Control-Allow-Origin": "*"}
})

export default api;