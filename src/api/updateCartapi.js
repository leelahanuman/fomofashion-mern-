import axios from "axios";
import { url } from "../constants";

const updateCartapi = async (data,id) => {
  const authtoken=localStorage.getItem('token')
  const response = await axios({
    url: `${url}/cart/`,
    method: "PUT",
    headers: { "Content-Type": "application/json",authtoken,cartid:id },
    data:JSON.stringify({quantity:data})
  });
  return response.data;
};
export default updateCartapi;
