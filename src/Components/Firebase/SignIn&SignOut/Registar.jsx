import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Contex } from "../../ContexApi/Contex";
import { toast } from "react-toastify";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";

const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { setUser, createNewUser, googleSignIn, updateUserProfile } = useContext(Contex);
    const [error, setError] = useState("");
    const [seePassword, setSeePassword] = useState(false);

    // Handle password visibility toggle
    const handleSeePassword = () => {
        setSeePassword((prev) => !prev);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const name = form.get("name");
        const email = form.get("email");
        const photo = form.get("photo");
        const password = form.get("password");

        // Password validation
        if (password.length < 6) {
            setError("Password must be at least 6 characters long.");
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setError("Password must have at least one uppercase letter.");
            return;
        }
        if (!/[a-z]/.test(password)) {
            setError("Password must have at least one lowercase letter.");
            return;
        }
        setError(""); // Clear any previous errors

        // Create a new user
        createNewUser(email, password)
            .then((result) => {
                const user = result.user
                // Update the user's profile with displayName and photoURL
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({
                            ...user,
                            displayName: name,
                            photoURL: photo,
                        });

                        // Redirect to the intended page
                        const redirectPath = location.state?.from || "/";
                        navigate(redirectPath);

                        toast.success("Account created successfully!");
                    })
                    .catch(() => {
                        toast.error("Failed to update profile. Please try again.");
                    });
            })
            .catch(() => {
                toast.error("Registration failed. Please try again.");
            });
    };

    // Handle Google login
    const handleGoogleLogin = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                setUser(user);

                const redirectPath = location.state?.from || "/";
                navigate(redirectPath);

                toast.success("Logged in with Google!");
            })
            .catch(() => {
                toast.error("Google login failed. Please try again.");
            });
    };

    return (
        <div className="flex items-center justify-center min-h-screen ">
            <div className="bg-white text-black shadow-md rounded-lg px-8 py-6 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
                <form onSubmit={handleSubmit}>
                    {/* Name Input */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Enter your name"
                            className="w-full px-4 py-2 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>

                    {/* Email Input */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email Address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>

                    {/* Photo URL Input */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photoURL">
                            Photo URL
                        </label>
                        <input
                            id="photoURL"
                            name="photo"
                            type="url"
                            placeholder="Enter a photo URL"
                            className="w-full px-4 py-2 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-6 relative">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type={!seePassword ? "password" : "text"}
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                        <button
                            type="button"
                            onClick={handleSeePassword}
                            className="absolute right-3 top-9 text-2xl"
                        >
                            {seePassword ? <IoEyeSharp /> : <IoEyeOffSharp />}
                        </button>
                        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                    </div>

                    {/* Register Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
                    >
                        Register
                    </button>
                </form>

                {/* Social Login */}
                <div className="text-center mt-6">
                    <button
                        className="flex items-center justify-center w-full bg-lime-500 text-white py-2 px-4 rounded-md hover:bg-lime-600 transition duration-200"
                        onClick={handleGoogleLogin}
                    >
                        Sign up with Google
                    </button>
                </div>

                {/* Redirect to Login */}
                <div className="text-center text-sm text-gray-600 mt-4">
                    Already have an account?{" "}
                    <button
                        className="text-blue-500 hover:underline"
                        onClick={() => navigate("/login")}
                    >
                        Log in
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;
