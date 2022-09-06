import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="NotFound">
      <h3>404 error ! Page Not Found</h3>
      <button onClick={() => navigate("/")}>Redirect Login Page</button>
    </div>
  );
};

export default NotFound;
