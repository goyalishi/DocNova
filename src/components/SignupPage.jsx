/* import React, { useState } from "react";

const SignupPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignup = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        alert("Signup functionality goes here!");
    };

    const handleGoogleSignUp = () => {
        alert("Sign up with Google functionality goes here!");
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h1>Create your Google Account</h1>
                <button className="google-btn" onClick={handleGoogleSignUp}>
                    <img
                        src="https://w7.pngwing.com/pngs/882/225/png-transparent-google-logo-google-logo-google-search-icon-google-text-logo-business-thumbnail.png"
                        alt="Google Icon"
                    />
                    Sign up with Google
                </button>
                <hr className="divider" />
                <form onSubmit={handleSignup}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Create a password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className="auth-btn">
                        Next
                    </button>
                </form>
                <p className="footer">
                    Already have an account? <a href="/login">Sign in instead</a>
                </p>
            </div>
        </div>
    );
};

export default SignupPage;
 */
// src/pages/SignupPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignupPage.css";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      return;
    }
    // Handle signup logic here
    console.log("Signing up with", email, password);
    navigate("/login"); // Redirect to login page on successful signup
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Sign Up for DocNova</h1>
        <form onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Email or phone"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit" className="auth-btn">
            Sign Up
          </button>
        </form>
        <p className="footer">
          Already have an account?{" "}
          <button onClick={() => navigate("/login")} className="login-link">
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
