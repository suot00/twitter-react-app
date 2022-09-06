import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Reset.css";
function Reset() {
  const [email, setEmail] = useState("");

  return (
    <div className="reset">
      <div className="reset__container">
        <h1>Find your Twitter account</h1>
        <input
          type="text"
          className="reset__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <button className="reset__btn">Send password reset email</button>
        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
    </div>
  );
}
export default Reset;
