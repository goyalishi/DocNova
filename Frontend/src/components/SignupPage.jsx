import React, { useState } from "react";

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
                        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
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
