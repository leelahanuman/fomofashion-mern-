import axios from "axios";
import { url } from "../constants";

const Loginapi = async(data) => {

const response=await axios({
    url:`${url}/auth/login`,
    method:'POST',
    headers:{'Content-Type':'application/json'},
    data:JSON.stringify(data)

})
return response.data
};
export default Loginapi;
