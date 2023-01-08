import axios from "axios";
const baseURL = process.env.BACKEND_URL;

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 10000, // 10 seconds for heroku spinup
  headers: {
    "Content-Type": "application/json",
    accept: "application/json"
  },
})

export function cancelled(err: any): boolean {
  if (axios.isCancel(err)) return true
  return false
}

export default axiosInstance;