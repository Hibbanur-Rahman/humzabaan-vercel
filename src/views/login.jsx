import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/LOGO.svg";
import signupImg1 from "../assets/images/login-img-2.svg";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import DOMAIN from "../../environmentVariables";
import loadingGif from '../assets/images/loading.gif';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmiting, setIsSubmiting] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }
    try {
      setIsSubmiting(true);
      const response = await axios.post(`${DOMAIN}/login`, { email, password });
      if (response.status === 200) {
        setIsSubmiting(false);
        toast.success("Login successfull!!");
        const token = response.data.data.token;
        localStorage.setItem("humzabaan-token", token);
        setEmail("");
        setPassword("");

        navigate("/dashboard");
      }
    } catch (error) {
      setIsSubmiting(false);

      toast.error("Failed to login");
    }
  };

  return (
    <div className="login row m-0 p-0 align-items-center justify-content-center">
      <div className="login-container p-4 pt-5 pb-5 col-xl-3 col-sm-6 bg-light rounded-4 d-flex flex-column align-items-center justify-content-center">
        <h5 className="m-0 p-0 fw-bold fs-3">Login to Account</h5>
        <p>Please enter your email and password to continue</p>
        <form onSubmit={handleSubmit} className="row m-0 p-0 mt-2">
          <label htmlFor="email" className="w-100  m-0 p-0 mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="hibbanrahmanhyt@gmail.com"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="row m-0  mb-3 p-2 rounded-3 bg-transparent border-2 "
          />
          <label htmlFor="password" className="w-100  m-0 p-0 mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="1234"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="row m-0 mb-3 p-2 rounded-3 bg-transparent border-2 "
          />
          {isSubmiting ? (
            <button
              type="button"
              disabled
              className="text-white m-0 p-0 d-flex align-items-center justify-content-center rounded-3 w-100 justify-center items-center text-xl py-2"
              style={{cursor:'not-allowed'}}
            >
              <img src={loadingGif} alt="" style={{height:'30px',width:'30px'}} className="me-2"/>
              Submiting...
            </button>
          ) : (
            <button
              type="submit"
              className="text-white m-0 p-0 rounded-3 w-100 justify-center items-center text-xl py-2"
            >
              Sign In
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
