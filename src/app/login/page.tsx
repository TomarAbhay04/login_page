"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { set } from "mongoose";
import {
  FaFacebook,
  FaLinkedin,
  FaGoogle,
  FaRegEnvelope,
} from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  // const [loading, setLoading] = React.useState(false);

  const onLogin = async () => {
    try {
      // setLoading(true);
      const response = await axios.post("api/users/login", user);
      console.log("login successfully", response.data);
      toast.success("login successfully");
      router.push("/profile");
    } catch (error: any) {
      console.log("login failed", error.message);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className=" min-h-screen flex flex-col items-center justify-center w-full flex-1 px-20 text-center bg-white">
      <div className="bg-white rounded-lg shadow-lg flex max-w-screen ">
        <div className="w-3/5 p-5">
          <div className="text-left text-1.5xl">
            <span className="text-green-500 font-bold">Company</span>
            <span className="font-bold">Name</span>
          </div>
          <div className="py-10">
            <h2 className="text-3xl font-bold text-green-500 mb-2">
              Sign in to Account
            </h2>
            <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
            <div className="flex justify-center my-2">
              <a
                href="#"
                className="border-2 border-gray-200 rounded-full p-3 mx-1"
              >
                <FaFacebook className="text-sm" />
              </a>

              <a
                href="#"
                className="border-2 border-gray-200 rounded-full p-3 mx-1"
              >
                <FaLinkedin className="text-sm" />
              </a>

              <a
                href="#"
                className="border-2 border-gray-200 rounded-full p-3 mx-1"
              >
                <FaGoogle className="text-sm" />
              </a>
            </div>
            <p className="text-gray-400 my-3"></p>
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                <FaRegEnvelope className="text-gray-400 m-2" />
                <label htmlFor="email"> </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  className="bg-gray-100 outline-none text-sm flex-1"
                />
              </div>

              <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                <MdLockOutline className="text-gray-400 m-2" />
                <label htmlFor="password"> </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                  className="bg-gray-100 outline-none text-sm flex-1"
                />
              </div>
              <div className="flex justify-between w-64 mb-5">
                <label className="flex items-center text-xs">
                  <input type="checkbox" name="remember" className="mr-1 " />{" "}
                  Remember me
                </label>
                <a href="#" className="text-xs ">
                  Forgot Password
                </a>
              </div>

              <button
                onClick={onLogin}
                className="border-2 rounded-full border-green-500 text-green-500 px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white"
              >
                Sign In{" "}
              </button>
            </div>
          </div>
        </div>

        <div className="w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
          <h2 className="text-3xl font-bold mb-2">Hello, Friend!</h2>
          <div className="border-2 w-10 border-white inline-block mb-2"></div>
          <p className="mb-10">
            Fill up personal informatioin and start journey with us.
          </p>

          <Link
            href="/signup "
            className="border-2 rounded-full border-white px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500"
          >
            {" "}
            Sign Up{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
