import axios from "axios";
import { url } from "../constants";

const getCartapi = async () => {
  const authtoken = localStorage.getItem('token')
  const response = await axios({
    url: `${url}/cart/`,
    method: "GET",
    headers: { "Content-Type": "application/json",authtoken },
  });
  return response.data;
};
export default getCartapi;
