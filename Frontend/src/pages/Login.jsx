import {useState} from "react";
import axios from "axios";

function Login(){
    const handleLogin=async(e)=> {
        e.preventDefault();
        try{
            const response=await axios.post(
                "http://localhost:5000/api/auth/login",
                {email,password}
            );
            localStorage.setItem("token",response.data.token);
            alert("Login Successful");
            window.location.href="/dashboard";
        }catch(error){
            alert(error.response?.data?.message || "Login Failed");
        }
    }
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    return(
        <div className="login-container">
            <h1>Welcome Back</h1>
            <p>Login to your CareerFlow account</p>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Enter Your Email" value={email}
                onChange={(e)=> setEmail(e.target.value)} required />
                <input type="password" placeholder="Enter Password" value={password}
                onChange={(e)=> setPassword(e.target.value)} required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;