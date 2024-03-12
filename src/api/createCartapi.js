import axios from "axios";
import { url } from "../constants";

const createCartapi = async (id) => {
  const token=localStorage.getItem('token')
  try {
    const response = await axios({
      url: `${url}/cart/`,
      method: "POST",
      headers: { "Content-Type": "application/json", authtoken:token,productid:id },
    });
    return response.data;
  } catch (error) {
    if(error.response && error.response.status===400){
      alert('This product is already added to cart')
    }
    if(error.response && error.response.status===401){
      alert('Not authenticated')
    }
  }
    
};
export default createCartapi;
