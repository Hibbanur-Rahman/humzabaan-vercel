import { Link } from 'react-router-dom';
import logo from '../assets/images/LOGO.svg'
import signupImg1 from '../assets/images/login-img-2.svg';
import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import DOMAIN from '../../environmentVariables';
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            toast.error("Please fill in all fields");
            return;
        }
        try {
            const response=await axios.post(`${DOMAIN}/login`,{email,password});
            if(response.status===200){
                toast.success("Login successfull!!");
                const token=response.data.data.token;
                localStorage.setItem('humzabaan-token',token);
                setEmail('');
                setPassword('');
            }
        } catch (error) {
            toast.error("Failed to login");
        }
    };

    return (
        <div className="login  row m-0 p-0 justify-content-center align-items-center">
            <div className="wrapper m-0 p-0 col-md-9 col-11 rounded-4 d-flex flex-wrap">
                <div className="col-md-6 col-12 m-0 p-lg-5 p-2 d-flex flex-column ">
                    <h1 className="text-white text-center text-4xl mb-1">Hello Again!</h1>
                    <p className="text-light text-center">Welcome back, you&apos;ve been missed!</p>
                    <form onSubmit={handleSubmit} className="row m-0 p-0 mt-2">
                        <label htmlFor="email" className="w-100 text-white m-0 p-0 mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="hibbanrahmanhyt@gmail.com"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="row m-0  mb-3 p-2 text-white rounded-3 bg-transparent border-2 "
                        />
                        <label htmlFor="password" className="w-100 text-white m-0 p-0 mb-1">Password</label>
                        <input
                            type="password"
                            placeholder="1234"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="row m-0 mb-3 p-2 text-white rounded-3 bg-transparent border-2 "
                        />
                        <button
                            type="submit"
                            className="text-white m-0 p-0 rounded-3 w-100 justify-center items-center text-xl py-3"
                        >
                            Sign In
                        </button>
                    </form>
                  
                </div>
                <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">
                    <img src={signupImg1} alt="Signup Image" />
                </div>
            </div>
        </div>
    );
};

export default Login;