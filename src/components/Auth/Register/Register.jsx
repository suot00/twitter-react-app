import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
function Register() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    name: "",
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
  const addData = (e) => {
    e.preventDefault();
    const { name, email, password } = inputValue;
    if (name === "") {
      alert("Please enter a name");
    } else if (email === "") {
      alert("Please enter a email");
    } else if (!email.includes("@")) {
      alert("Please enter valid email address");
    } else if (password === "") {
      alert("Please enter a password");
    } else if (password.length < 5) {
      alert("Password length greater five");
    } else {
      alert("data added successfully");
      let registerOldData = JSON.parse(localStorage.getItem("user"));

      if (registerOldData <= 0) {
        localStorage.setItem("user", JSON.stringify([inputValue]));
        // console.log(registerOldData.length);
      } else {
        localStorage.setItem(
          "user",
          JSON.stringify([...registerOldData, inputValue])
        );
      }

      navigate("/");
    }
  };

  return (
    <div className="register">
      <div className="register__container">
        <h1>Register</h1>
        <input
          type="text"
          className="register__textBox"
          name="name"
          onChange={getData}
          placeholder="Full Name"
        />
        <input
          type="text"
          className="register__textBox"
          name="email"
          onChange={getData}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="register__textBox"
          name="password"
          onChange={getData}
          placeholder="Password"
        />
        <button className="register__btn" onClick={addData}>
          Register
        </button>

        <div>
          Already have an account? <Link to="/">Login</Link> now.
        </div>
      </div>
    </div>
  );
}
export default Register;
