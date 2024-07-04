import { useEffect } from "react";
import { Routes, useNavigate, Route } from "react-router-dom";
import { toast } from "react-toastify";
import "../../assets/styles/dashboard.scss";
import DashboardSidebar from "../../components/dashboardSidebar";
import Dashboard from "./dashboard";
import EmailIntegration from "./emailIntegration";
import Testimonial from "./testimonial";
import Profile from "./profile";

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
    <div className="dashboard d-flex  m-0 p-0">
      <DashboardSidebar />
      <div className=" row m-0 p-0 w-100">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/email" element={<EmailIntegration />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
};

export default DashboardLayout;
