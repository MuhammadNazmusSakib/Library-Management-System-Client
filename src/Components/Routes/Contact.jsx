import React from "react";
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare, FaWhatsappSquare } from "react-icons/fa";
import { FaLocationDot, FaSquarePhone } from "react-icons/fa6"
import { IoTime } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Contact = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-10">Get In Touch</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Contact Form */}
                <div>
                    <form className="space-y-6">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="input input-bordered w-full"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="input input-bordered w-full"
                        />
                        <input
                            type="text"
                            placeholder="Subject"
                            className="input input-bordered w-full"
                        />
                        <textarea
                            placeholder="Write Message"
                            className="textarea textarea-bordered w-full h-32"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
                        >
                            SEND MESSAGE
                        </button>
                    </form>
                </div>

                {/* Contact Information */}
                <div className="space-y-6">
                    <div>
                        <h3 className="font-bold text-3xl pb-6">Contact Information</h3>
                        <div className="grid grid-col-1 sm:grid-cols-2 gap-8 py-5">
                            <div className="flex items-center gap-4">
                                <div className="text-blue-500 text-5xl">
                                    <FaSquarePhone />
                                </div>
                                <div>
                                    <p className="font-semibold">Phone Number:</p>
                                    <p>(208) 555-0112</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="text-blue-500 text-5xl">
                                    <MdEmail />
                                </div>
                                <div>
                                    <p className="font-semibold">Email Address:</p>
                                    <p>helpvisa@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="text-blue-500 text-5xl">
                                    <FaLocationDot />
                                </div>
                                <div>
                                    <p className="font-semibold">Our Address:</p>
                                    <p>1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="text-blue-500 text-5xl">
                                    <IoTime />
                                </div>
                                <div>
                                    <p className="font-semibold">Working Time:</p>
                                    <p>Monday to Friday: 10 AM - 6 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="font-bold text-3xl mt-12 mb-4">Follow The Social Media:</h3>
                        <div className="flex gap-4 py-5">
                            <div  className="text-blue-500 text-5xl cursor-pointer">
                            <FaFacebookSquare />
                            </div>
                            <div href="#" className="text-blue-500 text-5xl cursor-pointer">
                                <FaTwitterSquare/>
                            </div>
                            <div href="#" className="text-blue-500 text-5xl cursor-pointer">
                            <FaWhatsappSquare/>
                            </div>
                            <div href="#" className="text-blue-500 text-5xl cursor-pointer">
                                <FaLinkedin/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
