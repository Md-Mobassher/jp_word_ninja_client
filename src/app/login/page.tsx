/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import setAccessToken from "@/services/actions/setAccessToken";
import { setToLocalStorage } from "@/utils/local-storage";
import { verifyToken } from "@/utils/verifyToken";
import { Spin } from "antd";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in all fields");
      return; // Prevent further execution
    }

    setLoading(true);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/login`,
        { email, password }
      );
      // console.log(response.data.data.accessToken);
      if (response.status === 200) {
        toast.success(response.data.message || "Login successful");

        if (response?.data?.data?.accessToken) {
          setToLocalStorage("authKey", response.data.data.accessToken);
          setAccessToken(response.data.data.accessToken);
          const user = await verifyToken(response?.data?.data?.accessToken);
          console.log(user);
          if (user?.role === "admin") {
            router.push("/dashboard");
          } else if (user.role === "super_admin") {
            router.push("/dashboard");
          } else if (user.role === "user") {
            router.push("/tutorials");
          }
        }
      } else {
        toast.error(response.data.message || "Login failed");
        return; // Stop further execution
      }
    } catch (err: any) {
      console.error("Login failed:", err);
      toast.error(
        err?.response?.data?.message || "An error occurred during login"
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-4">Login</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-5">
          Don&apos;t have an account?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
