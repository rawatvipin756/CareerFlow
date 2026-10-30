import axios from "axios";

const API =axios.create({
    baseURL:"https://careerflow-yw0a.onrender.com/api/applications"
});

API.interceptors.request.use((config)=> {
    const token=localStorage.getItem("token");
    if(token){
        config.headers.Authorization=`Bearer ${token}`;
    }
    return config;
});

export default API;