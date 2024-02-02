import axios from "axios";

export default axios.create({
  //CORS access
  baseURL: "http://localhost:8081/",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
  // headers: { "ngrok-skip-browser-warning": "true" },
});