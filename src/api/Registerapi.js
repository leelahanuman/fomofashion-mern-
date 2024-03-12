import axios from "axios";
import { url } from "../constants";

const Registerapi = async(data) => {

const response=await axios({
    url:`${url}/auth/register`,
    method:'POST',
    headers:{'Content-Type':'application/json'},
    data:JSON.stringify(data)

})
return response.data
};
export default Registerapi;
