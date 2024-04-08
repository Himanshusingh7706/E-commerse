import React, { useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Login = ({ isAuth, setIsAuth }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const loginHandler = (e) => {
        e.preventDefault();
        if (!email || !password) {
            return toast.error('Please fill all details!');
        }
        localStorage.setItem("auth", true);
        setIsAuth(true);
        navigate("/");
    }

    if (isAuth) {
        return <Navigate to={"/"} />
    }
    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={loginHandler}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Login</button>

            </form>

        </div>
    );
};

export default Login;