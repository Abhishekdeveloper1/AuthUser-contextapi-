import React, { useState, useContext } from "react";
import { AuthTokenContext } from "./AuthTokenContext";
import "bootstrap/dist/css/bootstrap.min.css";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { setToken } = useContext(AuthTokenContext); // Access the context to set the token

  const loginUser = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage("Please complete the login form.");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      console.log("Response Status:", response.status);

      if (!response.ok) {
        const errorText = await response.text();
        setErrorMessage(`Login failed: ${errorText}`);
        return;
      }

      const data = await response.json();
      console.log("Received Data:", data);

      if (data.token) {
        console.log("Setting Token:", data.token);
        setToken(data.token); // Set the token in context
        window.location.href = "/dashboard"; // Redirect to dashboard
      } else {
        setErrorMessage("No token received.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("An error occurred during login. Please try again.");
    }
  };

  return (
    <>
      <form>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" onClick={loginUser} className="btn btn-primary">
          Submit
        </button>
      </form>
      {errorMessage && (
        <div className="alert alert-danger mt-3" role="alert">
          {errorMessage}
        </div>
      )}
    </>
  );
}

export default Login;
