import React from 'react'
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
// import logo from '../../assets/image/main-logo.png'
import { Contex } from '../ContexApi/Contex';
import { FcLibrary } from 'react-icons/fc';


const Navbar = () => {

    const { user, logOut } = useContext(Contex)

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };



    return (

        <header className='sticky top-0 z-50 bg-gray-100'>
            <div className="shadow-md">
                <div className="max-w-7xl md:px-6 lg:px-8 px-3 py-4 mx-auto flex items-center justify-between">
                    {/* Navbar Start: Logo */}
                    <div>
                        <Link to="/" className="text-2xl font-bold ">
                            <div className="flex items-center">
                                <FcLibrary className='mr-3 text-3xl'/>
                                {/* <img src={logo} className='w-10' /> */}
                                <h1>Academia Library</h1>
                            </div>
                        </Link>
                    </div>

                    {/* Navbar Center: Links for larger screens */}
                    <nav className="hidden lg:flex space-x-6">
                        <Link to="/" className="font-semi-bold hover:text-blue-600">Home</Link>
                        <Link to="/all-books" className="font-semi-bold hover:text-blue-600">All Books</Link>
                        <Link to="/add-book" className="font-semi-bold hover:text-blue-600">Add Book</Link>
                        <Link to="/borrowed-books" className="font-semi-bold hover:text-blue-600">Borrowed Books</Link>
                    </nav>


                    {/* Navbar End: Login Button */}
                    <div className="hidden lg:flex items-center gap-5">
                        {
                            user ? (
                                <>
                                    <Link to='my-profile/all-books'>
                                        <div className="relative group">
                                            <img
                                                src={user?.photoURL}
                                                alt="User Avatar"
                                                className="w-10 h-10 rounded-full border border-white cursor-pointer"
                                            />
                                            {/* Display Name Tooltip */}
                                            {/* <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-gray-200 text-black text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                {user?.displayName}
                                            </div> */}
                                        </div>
                                    </Link>
                                    <button onClick={logOut} className="btn text-sm font-medium bg-red-500 text-white ml-4 py-1 px-4 rounded-md hover:bg-red-600">
                                        LogOut
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link to="/login" className="btn bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                                        Login
                                    </Link>
                                    <Link to="/signup" className="btn bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                                    Register
                                    </Link>
                                </>
                            )
                        }


                    </div>

                    {/* Burger Button for small screens */}
                    <div className="lg:hidden flex items-center">
                        <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div onClick={toggleMenu} className="lg:hidden mt-3 shadow-md rounded-md p-4">

                    <ul className="space-y-4">
                        <li>
                            <Link to="/" className="block  hover:text-blue-600">Home</Link>
                        </li>
                        <li>
                            <Link to="/my-profile/all-books" className="block  hover:text-blue-600">All Books</Link>
                        </li>
                        <li>
                            <Link to="/my-profile/add-book" className="block  hover:text-blue-600">Add Book</Link>
                        </li>
                        <li>
                            <Link to="/my-profile/borrowed-books" className="block  hover:text-blue-600">Borrowed Books</Link>
                        </li>
                        {
                            user ? (
                                <>
                                    {/* <li>
                                        <Link to="/my-profile" className=" hover:text-blue-600">
                                            My Profile
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard" className=" hover:text-blue-600">
                                            Dashboard
                                        </Link>
                                    </li> */}
                                    <li>
                                        <button onClick={logOut} className="block  hover:text-blue-600">
                                            LogOut
                                        </button>
                                    </li>
                                </>
                            ) : (
                                <li>
                                    <Link to="/login" className="block hover:text-blue-600">
                                        Login
                                    </Link>
                                </li>
                            )
                        }
                    </ul>
                </div>
            )}
        </header>

    )
}

export default Navbar