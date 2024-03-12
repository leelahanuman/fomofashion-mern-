import axios from "axios";
import { url } from "../constants";

const getProductsapi = async () => {
  const response = await axios({
    url: `${url}/products`,
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
};
export default getProductsapi;
