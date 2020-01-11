import axios from "axios";

const api = axios.create({
  baseURL: "https://agendamento-consultas-backend.herokuapp.com"
});

export default api;
