/* import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        alert("Login functionality goes here!");
        navigate("/documents"); // Navigate to the documents page after login
    };

    const handleGoogleSignIn = () => {
        alert("Sign in with Google functionality goes here!");
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                
                <img
                    src="src/assets/5968517.png" // Replace this with the correct path to your icon
                    alt="Google Docs Icon"
                    className="docs-icon"
                />
                <h1>Sign in</h1>
                <p>to continue to Google Docs</p>
                
                
                <button className="google-btn" onClick={handleGoogleSignIn}>
                    <img
                        src="https://w7.pngwing.com/pngs/882/225/png-transparent-google-logo-google-logo-google-search-icon-google-text-logo-business-thumbnail.png"
                        alt="Google Icon"
                    />
                    Sign in with Google
                </button>
                
                <hr className="divider" />
                
                
                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Email or phone"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className="auth-btn">
                        Next
                    </button>
                </form>
                
                
                <p className="footer">
                    Don't have an account?{" "}
                    <button onClick={() => navigate("/signup")} className="signup-link">
                        Create account
                    </button>
                </p>
            </div>
        </div>
    );
};

export default LoginPage; */
// src/components/LoginPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Logging in with", email, password);
    navigate("/dashboard"); // Redirect to dashboard on successful login
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Sign in to DocNova</h1>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email or phone"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="auth-btn">
            Sign In
          </button>
        </form>
        <p className="footer">
          Don't have an account?{" "}
          <button onClick={() => navigate("/signup")} className="signup-link">
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
