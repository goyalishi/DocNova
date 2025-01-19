import React, { useState } from "react";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        alert("Login functionality goes here!");
    };

    const handleGoogleSignIn = () => {
        alert("Sign in with Google functionality goes here!");
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h1>Sign in</h1>
                <p>to continue to Google Docs</p>
                <button className="google-btn" onClick={handleGoogleSignIn}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
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
                    Don't have an account? <a href="/signup">Create account</a>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
