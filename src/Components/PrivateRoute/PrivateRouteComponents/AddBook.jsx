import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useDynamicTitle from '../../Hooks/useDynamicTitle';

const AddBook = () => {
    useDynamicTitle("Add Book | Academia Library")

    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure()
    const [book, setBook] = useState({
        image: '',
        name: '',
        quantity: '',
        author: '',
        category: '',
        shortDescription: '',
        rating: '',
        bookContent: 'This is a great book that everyone should read.',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(book)
        axiosSecure
            .post('allBooks', book)
            .then(() => {
                toast.success('Book added successfully!');
                navigate('/all-books'); // Redirect to the all books page after successful submission
            })
            .catch(() => {
                toast.error('Failed to add book.');
            });
    };

    return (
        <div className="max-w-2xl mx-auto p-6 rounded-lg shadow-md border border-gray-300 mt-10 my-10">
            <h1 className="text-3xl font-semibold text-center mb-6">Add New Book</h1>
            <form onSubmit={handleSubmit}>
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-6"> */}
                    {/* Image URL */}
                    <div className="form-control">
                        <label className="label">Image URL</label>
                        <input
                            type="url"
                            name="image"
                            value={book.image}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Book Title */}
                    <div className="form-control">
                        <label className="label">Book Title</label>
                        <input
                            type="text"
                            name="name"
                            value={book.name}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Quantity */}
                    <div className="form-control">
                        <label className="label">Quantity</label>
                        <input
                            type="number"
                            name="quantity"
                            value={book.quantity}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            min="1"
                            required
                        />
                    </div>

                    {/* Author Name */}
                    <div className="form-control">
                        <label className="label">Author Name</label>
                        <input
                            type="text"
                            name="author"
                            value={book.author}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Category */}
                    <div className="form-control">
                        <label className="label">Category</label>
                        <select
                            name="category"
                            value={book.category}
                            onChange={handleChange}
                            className="select select-bordered w-full"
                            required
                        >
                            <option value="" disabled>Select a category</option>
                            <option value="Novel">Novel</option>
                            <option value="Business">Business</option>
                            <option value="History">History</option>
                            <option value="Social Sciences">Social Sciences</option>
                            <option value="Science">Science</option>
                        </select>
                        {/* {book.category === "" && (
                            <span className="text-red-500 text-sm mt-2">Category is Required.</span>
                        )} */}
                    </div>

                    {/* Short Description */}
                    <div className="form-control">
                        <label className="label">Short Description</label>
                        <textarea
                            name="shortDescription"
                            value={book.shortDescription}
                            onChange={handleChange}
                            className="textarea textarea-bordered w-full"
                            rows="4"
                            required
                        />
                    </div>

                    {/* Rating */}
                    <div className="form-control">
                        <label className="label">Rating (1-5)</label>
                        <input
                            type="number"
                            name="rating"
                            value={book.rating}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            min="1"
                            max="5"
                            required
                        />
                    </div>

                    {/* Book Content */}
                    <div className="form-control col-span-2">
                        <label className="label">Book Content</label>
                        <textarea
                            name="bookContent"
                            value={book.bookContent}
                            onChange={handleChange}
                            className="textarea textarea-bordered w-full"
                            rows="4"
                            readOnly
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="form-control col-span-2 text-center">
                        <button
                            type="submit"
                            className="btn btn-primary w-full mt-5"
                        >
                            Add Book
                        </button>
                    </div>
                {/* </div> */}
            </form>
        </div>
    );
};

export default AddBook;
