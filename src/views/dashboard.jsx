import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Dashboard=()=>{
    const navigate=useNavigate();
    
    useEffect(()=>{
        const token=localStorage.getItem('humzabaan-token');
        if(!token){
            navigate('/login');
            toast.error("Login First!!");
    
        }
    },[])
    return (
        <>
            <h1>Dashboard</h1>
        </>
    )
}

export default Dashboard;