import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import ReactStars from 'react-rating-stars-component';

const BooksByCategory = () => {
    const { category } = useParams(); // Get category from URL
    const [books, setBooks] = useState([]);
    const navigate = useNavigate()

    // Fetch books by category
    useEffect(() => {
        axios
            .get(`http://localhost:5000/allBooks/category/${category}`)
            .then((response) => {
                setBooks(response.data);
            })
            .catch((error) => {
                console.error('Error fetching books:', error);
            });
    }, [category]);
    // console.log(books)

    const bookDetails = (id) => {
        navigate(`/book/${id}`)
    }

    return (
        <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-3xl font-semibold text-center mb-8">
                Books in {category}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {books.map((book) => (
                    <div
                        key={book._id}
                        className="card shadow-md border border-gray-300 flex flex-col justify-between p-4"
                    >
                        <img
                            src={book.image}
                            alt={book.name}
                            className="w-full h-48 object-cover mb-4 rounded"
                        />
                        <h2 className="text-xl font-semibold mb-2">
                            {book.name}
                        </h2>
                        <p className="text-sm text-gray-600 mb-2">
                            Author: {book.authorName}
                        </p>
                        <p className="text-sm text-gray-600 mb-2">
                            Quantity: {book.quantity}
                        </p>
                        <p className="text-sm text-gray-600 mb-2">
                            Rating:
                        </p>
                        <ReactStars
                            count={5}
                            value={Number(book.rating)}
                            size={24}
                            activeColor="#ffd700"
                            edit={false}
                        />
                        <button onClick={() => bookDetails(book._id)} className="btn btn-primary flex- w-full mt-4">
                            Details
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BooksByCategory;
