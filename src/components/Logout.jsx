import React from "react";
import { Link } from "react-router-dom";
import "./LogoutPage.css";

const LogoutPage = () => {
  return (
    <div className="logout-page">
      <h1>You have been logged out!</h1>
      <p>Thank you for using DocNova.</p>
      <Link to="/signup">
        <button className="go-back-btn">Go to Signup Page</button>
      </Link>
    </div>
  );
};

export default LogoutPage;
