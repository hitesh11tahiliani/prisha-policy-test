import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { userInfo } from "../helper/apiClients";
import toast, { Toaster } from 'react-hot-toast';

import {
  setUserRole,
  getUserRole,
  setUserId,
  getUserId,
  setUserName,
  getUserName,
  setEmployeeId,
} from "../helper/stateManagment";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const notify = () => toast('Invalid Credentials');


    try {
      const info = await userInfo({ email, password });
      console.log(info);
      setUserRole(info.role);
      setUserId(info.userId);
      setUserName(info.name);
      setEmployeeId(info.employeeId);

      localStorage.setItem("userRole", info.role);
      localStorage.setItem("userId", info.userId.toString());
      localStorage.setItem("userName", info.name);
      localStorage.setItem("employeeId", info.employeeId.toString());

      if (info.role === "Manager") {
        navigate("/hrDashboard");
      } else if (info.role === "Employee") {
        navigate("/empDashboard");
      }
    } catch (err) {
      console.error("An error occurred:", err);
      notify();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-indigo-600 mb-4">
          Log In
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <p className="text-lg font-medium">Log in to your account</p>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm text-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm text-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="bg-indigo-600 text-white w-full p-2 rounded-md text-sm font-medium hover:bg-indigo-700"
           
          >
            Sign In
          </button>
        </form>

        <Toaster />

        <p className="text-center mt-4 text-sm text-gray-500">
          New User?{" "}
          <Link to="/signup" className="text-indigo-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
