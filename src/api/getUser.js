import axios from "axios";
import { url } from "../constants";

const getUserapi = async () => {
  const token = localStorage.getItem("token");

  const response = await axios({
    url: `${url}/auth/getuser`,
    method: "GET",
    headers: { "Content-Type": "application/json", authtoken: token },
  });
  return response.data;
};
export default getUserapi;
