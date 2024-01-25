import axios from "axios";

export default axios.create({
  //CORS access
  baseURL: "http://localhost:8081/",
  headers: {"Access-Control-Allow-Origin": "*"}
  // headers: { "ngrok-skip-browser-warning": "true" },
});