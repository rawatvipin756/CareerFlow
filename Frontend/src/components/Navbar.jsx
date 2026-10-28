import "./Navbar.css";
import {useNavigate} from "react-router-dom";

const Navbar=()=>{
    const navigate=useNavigate();
    const handleLogout=()=> {
        localStorage.removeItem("token");
        navigate("/login",{replace:true});
    };
    return(
        <div className="header">
            <header>
                <h1>CareerFlow</h1>
                <p>Track your job applications in one place.</p>
                <button onClick={handleLogout}>Logout</button>
            </header>
        </div>
    );
};

export default Navbar;