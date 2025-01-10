import React, { useState } from "react";
import { useForm } from "react-hook-form";


const JoinPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isModalOpen, setIsModalOpen] = useState(false);


    const onSubmit = (data) => {
        // Handle form submission here
        // console.log(data);
        setIsModalOpen(true); // Open the modal after submission
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section className="py-16 px-4 md:px-16">
            <div className="container mx-auto flex flex-col items-center gap-8">
                {/* Description and Image */}
                <div className="w-full lg:w-2/3 text-center">
                    <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Welcome to Our Book Club!</h2>
                    <p className="text-left text-lg text-gray-600 mb-6">
                        Immerse yourself in a world of literary wonders. Our book club offers a unique space to explore, discuss, and celebrate stories that inspire and captivate. Whether you're a voracious reader or just starting out, there's always a place for you here.
                    </p>
                    <p className="text-left text-lg text-gray-600 mb-6">
                        Connect with fellow book lovers, participate in engaging discussions, and enjoy exclusive access to curated reading lists, author meetups, and much more. Let's turn pages together!
                    </p>
                    <img
                        src="https://i.ibb.co.com/k095ccH/book-club.jpg"
                        alt="Book Club"
                        className="rounded-lg shadow-lg w-full"
                    />
                </div>

                {/* Form */}
                <div className="w-full lg:w-2/3 text-center">
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">Join the Club</h3>
                    <p className="text-lg text-gray-600 mb-6">
                        We're excited to have you join us in exploring the world of books! Please fill out the form below, and we'll get in touch with you soon.
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <input
                                type="text"
                                placeholder="Full Name"
                                {...register("fullName", { required: "Name is required" })}
                                className="px-4 py-2 border border-gray-300 rounded w-full"
                            />
                            {errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>}
                        </div>

                        <div>
                            <input
                                type="email"
                                placeholder="Email Address"
                                {...register("email", { required: "Email is required" })}
                                className="px-4 py-2 border border-gray-300 rounded w-full"
                            />
                            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                        </div>

                        <div>
                            <textarea
                                placeholder="Why do you want to join?"
                                {...register("message", { required: "Message is required" })}
                                className="px-4 py-2 border border-gray-300 rounded w-full"
                            />
                            {errors.message && <p className="text-red-500">{errors.message.message}</p>}
                        </div>

                        <button
                            type="submit"
                            className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>

            {/* Modal */}
            {
                isModalOpen && (
                    <div className="modal modal-open">
                        <div className="modal-box py-10">

                            <h2 className="text-2xl font-bold text-gray-800 text-center">Thank you for Submition!</h2>
                            <p className="text-lg text-gray-600 mt-4 text-center">
                                We appreciate your interest in our Book Club! You will be informed within 2 days.
                            </p>
                            <div className="flex justify-center mt-6">
                                <button
                                    onClick={closeModal}
                                    className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>

                )
            }

        </section>
    );
};

export default JoinPage;



