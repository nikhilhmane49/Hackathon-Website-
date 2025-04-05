import React, { useState, useContext, useEffect } from 'react';
import { Appcontext } from '../Context/Context';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const [state, setstate] = useState("Sign up");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const { backendurl, token, settoken } = useContext(Appcontext);

    const onsubmiite = async (e) => {
        e.preventDefault();

        try {
            let response;

            if (state === "Sign up") {
                response = await axios.post(`${backendurl}/api/user/user-resgretration`, { name, email, password });

                if (response.data.success) {
                    localStorage.setItem('token', response.data.token);
                    settoken(response.data.token);
                    toast.success("Registration successful!");
                    navigate('/');
                } else {
                    toast.error(response.data.message || "Something went wrong");
                }
            } else {
                response = await axios.post(`${backendurl}/api/user/user-login`, { email, password });

                if (response.data.success) {
                    localStorage.setItem('token', response.data.token);
                    settoken(response.data.token);
                    toast.success("Login successful!");
                    navigate('/');
                } else {
                    toast.error(response.data.message || "Something went wrong");
                }
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong");
        }
    };

    useEffect(() => {
        if (token) {
            navigate('/');
        }
    }, [token, navigate]);

    return (
        <div className="flex justify-center items-center h-screen bg-gray-50">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                    {state === "Sign up" ? "Create Account" : "Login"}
                </h2>
                <p className="text-gray-600 mb-6 text-center">
                    {state === "Sign up" ? "Please sign up to book an appointment" : "Please login to book an appointment"}
                </p>

                <form onSubmit={onsubmiite}>
                    {state === "Sign up" && (
                        <div className="mb-4">
                            <label htmlFor="full-name" className="block text-gray-700 text-sm font-semibold mb-2">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="full-name"
                                placeholder="Full Name"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                        </div>
                    )}

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </div>

                    <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200">
                        {state === "Sign up" ? "Create Account" : "Login"}
                    </button>

                    <p className="text-center text-gray-600 mt-2">
                        {state === "Sign up" ? "Already have an account?" : "Don't have an account?"}{" "}
                        <span
                            className={`cursor-pointer underline ${state === "Sign up" ? "text-blue-600" : "text-gray-600"}`}
                            onClick={() => setstate(state === "Sign up" ? "Login" : "Sign up")}
                        >
                            {state === "Sign up" ? "Login" : "Sign up"}
                        </span>
                    </p>
                </form>

                <ToastContainer />
            </div>
        </div>
    );
}

export default Login;