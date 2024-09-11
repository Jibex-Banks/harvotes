import React, { useState } from "react";
import axios from 'axios';
import './Login.css';
import LoggedInPage from './LoggedInPage';

// Define the base URL for your API
const API_BASE_URL = 'http://localhost:5000';

function Login() {
  const [isActive, setIsActive] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  // Function to handle form switching
  const handleSignUpClick = () => {
    setIsActive(true);
    setError("");
  };

  const handleSignInClick = () => {
    setIsActive(false);
    setError("");
  };

  // Function to handle login form submission
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const loginData = {
      username,
      password,
    };
    try {
      const response = await axios.post(`${API_BASE_URL}/api/login`, loginData);
      if (response.data.success) {
        setIsLoggedIn(true);
      } else {
        setError(response.data.message || "Login failed");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setError(error.response.data.message || "Login failed");
      } else if (error.request) {
        // The request was made but no response was received
        setError("No response from server. Please try again later.");
      } else {
        // Something happened in setting up the request that triggered an Error
        setError("An error occurred. Please try again.");
      }
    }
  };

  // Function to handle sign-up form submission
  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const signUpData = {
      username,
      email,
      password,
    };
    try {
      const response = await axios.post(`${API_BASE_URL}/api/signup`, signUpData);
      if (response.data.success) {
        alert("Sign-up successful");
        setIsActive(false); // Switch to login form
      } else {
        setError(response.data.message || "Sign-up failed");
      }
    } catch (error) {
      console.error("Error signing up:", error);
      if (error.response) {
        setError(error.response.data.message || "Sign-up failed");
      } else if (error.request) {
        setError("No response from server. Please try again later.");
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  // Logout function
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  if (isLoggedIn) {
    return <LoggedInPage username={username} onLogout={handleLogout} />;
  }

  return (
    <div className={`wrapper ${isActive ? 'active' : ''}`}>
      {/* Sign In Form */}
      <div className="form-wrapper sign-in">
        <form onSubmit={handleLoginSubmit}>
          <h2>Login</h2>
          <div className="input-group">
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Username</label>
          </div>
          <div className="input-group">
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>
          <div className="remember">
            <label><input type="checkbox" /> Remember me</label>
          </div>
          <button type="submit">Login</button>
          <div className="signUp-link">
            <p>Don't have an account? <a href="#" className="signUpBtn-link" onClick={handleSignUpClick}>Sign Up</a></p>
          </div>
        </form>
      </div>

      {/* Sign Up Form */}
      <div className="form-wrapper sign-up">
        <form onSubmit={handleSignUpSubmit}>
          <h2>Sign Up</h2>
          <div className="input-group">
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Username</label>
          </div>
          <div className="input-group">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email</label>
          </div>
          <div className="input-group">
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>
          <div className="remember">
            <label><input type="checkbox" /> I agree to the terms & conditions</label>
          </div>
          <button type="submit">Sign Up</button>
          <div className="signUp-link">
            <p>Already have an account? <a href="#" className="signInBtn-link" onClick={handleSignInClick}>Sign In</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;