import axios from "axios";
import { url } from "../constants";

const getSingleProductsapi = async (id) => {
    // console.log(id);
  const response = await axios({
    url: `${url}/products/${id}`,
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
};
export default getSingleProductsapi;
