import React from 'react'
import { useState } from 'react'
import Loginapi from '../api/Loginapi'
import { useNavigate } from 'react-router-dom'
// import image78 from '../Images/loginlogo.jpg'
import { Link } from 'react-router-dom'

const Login = () => {
    const[data,setData]=useState({
        email:"",password:""
    })
    const handleChange=(e)=>{
        const {name,value}=e.target
        setData({...data,[name]:value})
    }
    const navigate=useNavigate()
    const handleSumbit= async(e)=>{
        e.preventDefault()
        const response=await Loginapi(data)
        if(!response.token){
          // alert(response.data.message)
          return false;
        } else navigate('/') 
        localStorage.setItem('token',response.token)
        // console.log(response);
     
          window.location.reload()
     
    }

  return (
    <>
     <form onSubmit={handleSumbit}>
  
    <div className="login-page">
      <div className="form">
        <div className="login">
          <div className="login-header">
            <h3>LOGIN</h3>
            <p>Please enter your credentials to login.</p>
          </div>
        </div>
        {/* <form className="login-form"> */}
          <input type="text" name="email" placeholder="email" value={data.email}
                onChange={(e) => handleChange(e)}/>
          <input type="password" placeholder="password" name="password" value={data.password}
                onChange={(e) => handleChange(e)}/>
          <button>login</button>
          <p className="message">Not registered? <Link to="/register">Register</Link></p>
        {/* </form> */}
      </div>
    </div>

</form>
   
        
        </>
  )
}

export default Login