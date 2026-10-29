import {useState} from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import "./login.css";

function Login(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate();

    const handleLogin=async(e)=> {
        e.preventDefault();
        try{
            const response=await axios.post(
                "http://localhost:5000/api/auth/login",
                {email,password}
            );
            localStorage.setItem("token",response.data.token);
            navigate("/");
        }catch(error){
            alert(error.response?.data?.message || "Login Failed");
        }
    }
    return(
        <div className="login-page">
            <div className="login-brand">
                <div className="brand-icon">
                    <span>CareerFlow</span>
                </div>
                <div className="login-card">
                    <div className="login-heading">
                        <span className="login-label">Welcome Back</span>
                        <h1>Sign in to your account</h1>
                        <p>Continue your journey toward your dream career.</p>
                    </div>
                <form onSubmit={handleLogin}>
                    <input type="email" placeholder="Enter Your Email" value={email}
                    onChange={(e)=> setEmail(e.target.value)} required />
                    <input type="password" placeholder="Enter Password" value={password}
                    onChange={(e)=> setPassword(e.target.value)} required />
                    <button className="login-button" type="submit">Sign in <span>→</span></button>
                </form>
                <p className="login-switch">
                    Don't have an account? <Link to="/signup">Sign up</Link>
                </p>
            </div>
            <p className="auth-footer">
                YOUR NEXT OPPORTUNITY STARTS HERE.
            </p>
            </div>
        </div>
    );
}

export default Login;