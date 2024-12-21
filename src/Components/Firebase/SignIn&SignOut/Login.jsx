import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Contex } from "../../ContexApi/Contex";

import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import { toast } from "react-toastify";


const Login = () => {

  const { userLogin, setUser, googleSignIn } = useContext(Contex)
  const [seePassword, setSeePassword] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()



  //  Handle Google Login 
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user
        setUser(user)

        const redirectPath = location.state?.from || "/"
        navigate(redirectPath)
      })
      .catch(() => {
        toast('Google login Failed. Please try again.');
      })
  };


  // see Password
  const handleSeePassword = () => {
    setSeePassword((prev) => (!prev))
  }


  const handleSubmit = (e) => {
    e.preventDefault()

    const form = new FormData(e.target)
    const email = form.get("email")
    const password = form.get("password")


    userLogin(email, password)
      .then(result => {
        const user = result.user
        setUser(user)
        const redirectPath = location.state?.from || "/"
        navigate(redirectPath)
      })
      .catch(() => {
        toast("Incorrect Email or Password. Please try again.", {
          position: "top-center",
          autoClose: 2000, // Close after 2 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

      })
  }

  // Redirect to Register with Location State
  const handleNavigateToRegister = () => {
    navigate('/signup', { state: { from: location.state?.from || '/' } });
  }


  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        {/* Title */}
        <h1 className="text-2xl font-bold text-center mb-6">
          Login
        </h1>

        {/* Social Login Buttons */}
        <div className="w-full mb-4">
          <button
            onClick={handleGoogleLogin}
            className="flex gap-4 w-full justify-center items-center bg-lime-500 text-white px-4 py-2 rounded-lg shadow hover:bg-lime-600 mr-2"
          >
            <img
              src="https://img.icons8.com/color/24/google-logo.png"
              alt="Google"
              className=""
            />
            <p className="">Sign in with Google</p>
          </button>

        </div>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-4 text-gray-500">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address or username
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4 relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type={!seePassword ? "password" : "text"}
              id="password"
              name="password"
              className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your password"
            />
            <button type="button" onClick={handleSeePassword}
              className="absolute mt-2 -ml-10 text-2xl">
              {seePassword ? <IoEyeSharp /> : <IoEyeOffSharp />}

            </button>
          </div>
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="text-green-500 mr-2"
              />
              <span className="text-sm text-gray-700">
                Remember me on this computer
              </span>
            </label>
            <button
              className="text-sm text-green-500 hover:underline"
            >
              Forgot your password?
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600"
          >
            Log in
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="text-center text-sm text-gray-700 mt-4">
          Don't have an account yet?{" "}
          <button onClick={handleNavigateToRegister}>
            <p className="text-green-500 font-medium hover:underline">
              Sign up. It's free and takes five seconds.
            </p>
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
