import {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup(){
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const navigate = useNavigate();
    const handleSignup = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post(
        "http://localhost:5000/api/auth/signup",
            {
                name,
                email,
                password
            }
        );
            alert("Signup successful! Please log in.");
            navigate("/login");
        }catch (error) {
            alert(error.response?.data?.message || "Signup failed");
        }
    };
    return(
        <div className="signup-container">
            <h1>Create Account</h1>
            <p>Create your CarrerFlow account</p>
            <form onSubmit={handleSignup}>
                <input type="text" placeholder="Enter your name" value={name} 
                onChange={(e)=>setName(e.target.value)}></input>
                <input type="email" placeholder="Enter your email" value={email} 
                onChange={(e)=>setEmail(e.target.value)}></input>
                <input type="password" placeholder="create Password" value={password} 
                onChange={(e)=>setPassword(e.target.value)}></input>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default Signup;