import React from "react";
import { useState } from "react";
import Registerapi from "../api/Registerapi";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const navigate = useNavigate();
  const handleSumbit = async (e) => {
    e.preventDefault();
    const response = await Registerapi(data);
    // console.log(response.token);
    localStorage.setItem('token',response.token)
    navigate("/");
    window.location.reload()

  };
  return (
    <div>
      <form onSubmit={handleSumbit}>
        <div className="register-page">
          <div className="form">
            <div className="register">
              <div className="register-header">
                <h3>Register</h3>
                <p>Please enter your credentials to Register.</p>
              </div>
            </div>
            {/* <form className="register-form"> */}
              <label htmlFor="exampleInputEmail1" className="form-label">
                Username
              </label>
              <input
                name="username"
                value={data.username}
                onChange={(e) => handleChange(e)}
              />

              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                name="email"
                value={data.email}
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={data.password}
                onChange={(e) => handleChange(e)}
              />

              <button type="submit">
                submit
              </button>
            {/* </form> */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
