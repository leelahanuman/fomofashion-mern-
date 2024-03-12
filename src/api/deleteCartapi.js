import axios from "axios";
import { url } from "../constants";

const deleteCartapi = async (id) => {
  const authtoken=localStorage.getItem('token')
  const response = await axios({
    url: `${url}/cart/`,
    method: "DELETE",
    headers: { "Content-Type": "application/json", authtoken, cartid:id },
  });
  return response.data;
};
export default deleteCartapi;
