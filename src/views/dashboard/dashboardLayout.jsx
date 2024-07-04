import { useEffect } from "react";
import { Routes, useNavigate, Route } from "react-router-dom";
import { toast } from "react-toastify";
import "../../assets/styles/dashboard.scss";
import DashboardSidebar from "../../components/dashboardSidebar";
import Dashboard from "./dashboard";
import EmailIntegration from "./emailIntegration";


const DashboardLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("humzabaan-token");
    if (!token) {
      navigate("/login");
      toast.error("Login First!!");
    }
  }, []);
  return (
    <div className="dashboard d-flex m-0 p-0">
      <DashboardSidebar />
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/email" element={<EmailIntegration/>} />
      </Routes>
    </div>
  );
};

export default DashboardLayout;
