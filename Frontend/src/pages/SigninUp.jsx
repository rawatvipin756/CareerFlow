import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./auth.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://careerflow-yw0a.onrender.com/api/auth/signup",
        { name, email, password }
      );

      alert("Signup successful! Please log in.");
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-brand">
        <div className="brand-icon">
          <span>CareerFlow</span>
        </div>
      </div>

      <div className="auth-card">
        <div className="auth-heading">
          <span className="auth-label">GET STARTED</span>
          <h1>Create your account</h1>
          <p>Start organizing your job search in one place.</p>
        </div>

        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

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

          <button className="auth-button" type="submit">
            Create Account <span>→</span>
          </button>
        </form>

        <p className="auth-switch">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>

      <p className="auth-footer">
        YOUR NEXT OPPORTUNITY STARTS HERE.
      </p>
    </div>
  );
}

export default Signup;
