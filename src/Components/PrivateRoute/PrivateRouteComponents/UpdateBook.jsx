import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const UpdateBook = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure()
    const [book, setBook] = useState({
        image: '',
        name: '',
        author: '',
        category: '',
        rating: '',
    });

    // Fetch the book details
    useEffect(() => {
        axiosSecure.get(`allBooks/${id}`)
            .then((response) => {
                setBook(response.data);
            })
            .catch(() => {
                toast.error('Failed to load book details.');
            });
    }, [id]);

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook((prev) => ({ ...prev, [name]: value }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(id, book)

        axiosSecure.put(`allBooks/${id}`, book)
            .then(() => {
                toast.success('Book updated successfully!');
                navigate('/all-books');  // Redirect after update
            })
            .catch(() => {
                toast.error('Failed to update book.');
            });
    };

    return (
        <div className="flex justify-center items-center min-h-screen py-8">
            <div className="bg-white p-8 border border-gray-300 rounded-xl shadow-lg w-full max-w-lg">
                <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">Update Book</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Image URL</label>
                        <input
                            type="url"
                            name="image"
                            value={book.image}
                            onChange={handleChange}
                            required
                            className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Title</label>
                        <input
                            type="text"
                            name="name"
                            value={book.name}
                            onChange={handleChange}
                            required
                            className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Author Name</label>
                        <input
                            type="text"
                            name="author"
                            value={book.authorName}
                            onChange={handleChange}
                            required
                            className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Category</label>
                        <select
                            name="category"
                            value={book.category}
                            onChange={handleChange}
                            required
                            className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="Novel">Novel</option>
                            <option value="Thriller">Thriller</option>
                            <option value="History">History</option>
                            <option value="Drama">Drama</option>
                            <option value="Sci-Fi">Sci-Fi</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Rating (1-5)</label>
                        <input
                            type="number"
                            name="rating"
                            value={book.rating}
                            onChange={handleChange}
                            min="1"
                            max="5"
                            required
                            className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-500 text-white rounded-lg font-semibold text-lg transition duration-300 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Update Book
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateBook;
