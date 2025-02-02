import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
// import ReactStars from 'react-rating-stars-component';
import useDynamicTitle from '../Hooks/useDynamicTitle';
import RatingStars from '../Hooks/RatingStars';

const BooksByCategory = () => {
    useDynamicTitle("Books By Category | Academia Library")

    const { category } = useParams(); // Get category from URL
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()

    // Fetch books by category
    useEffect(() => {
        axios
            .get(`https://library-management-system-server-alpha.vercel.app/allBooks/category/${category}`)
            .then((response) => {
                setBooks(response.data);
                setLoading(false)
            })
        // .catch((error) => {
        //     console.error('Error fetching books:', error);
        // });
    }, [category]);
    // console.log(books)

    const bookDetails = (id) => {
        navigate(`/book/${id}`)
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
            </div>
        )
    }

    return (
        <div className="bg-gray-100">
            <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6'>
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
                            className="w-full h-96 object-cover mb-4 rounded"
                        />
                        <h2 className="text-xl font-semibold mb-2">
                            {book.name}
                        </h2>
                        <p className="text-sm mb-2">
                            <strong>Author: </strong>{book.author}
                        </p>
                        <p className="text-sm mb-2">
                            <strong>Category: </strong> {book.category}
                        </p>
                        <p className="text-sm mb-2">
                            <strong>Quantity: </strong> {book.quantity}
                        </p>
                        <div className="flex items-center gap-3 mb-2">
                            <strong>Rating:</strong>
                            <RatingStars value={Number(book.rating)} />

                            {/* <ReactStars
                                count={5}
                                value={Number(book.rating)}
                                size={24}
                                activeColor="#ffd700"
                                edit={false}
                            /> */}
                        </div>
                        <button onClick={() => bookDetails(book._id)} className="btn btn-primary flex- w-full mt-4">
                            Details
                        </button>
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
};

export default BooksByCategory;
