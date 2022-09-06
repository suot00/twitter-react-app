import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const getData = (e) => {
    const { value, name } = e.target;
    console.log(value, name);
    setInputValue(() => {
      return {
        ...inputValue,
        [name]: value,
      };
    });
  };
  const addData = () => {
    const getUserArr = localStorage.getItem("user");

    const { email, password } = inputValue;
    if (email === "") {
      alert("Please enter a email");
    } else if (!email.includes("@")) {
      alert("Please enter valid email address");
    } else if (password === "") {
      alert("Please enter a password");
    } else if (password.length < 5) {
      alert("Password length greater five");
    } else {
      if (getUserArr && getUserArr.length) {
        const userData = JSON.parse(getUserArr);
        console.log(userData);
        const userLogin = userData.filter((el, k) => {
          return el.email === email && el.password === password;
        });
        if (userLogin.length === 0) {
          alert("Invalid");
        } else {
          console.log("login successfully");
          localStorage.setItem("user_login", JSON.stringify(userLogin));

          navigate("/layout");
        }
      }
    }
  };
  return (
    <div className="login">
      <div className="login__container">
        <div className="login__left">
          <img
            src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png"
            alt=""
          />
        </div>

        <div className="login__right">
          <input
            type="text"
            name="email"
            onChange={getData}
            placeholder="E-mail Address"
            className="login__textBox"
          />
          <input
            type="password"
            name="password"
            onChange={getData}
            placeholder="Password"
            className="login__textBox"
          />
          <button onClick={addData} className="login__btn">
            Login
          </button>

          <div>
            <Link to="/reset">Forgot Password</Link>
          </div>
          <div>
            Don't have an account? <Link to="/register">Register</Link> now.
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
