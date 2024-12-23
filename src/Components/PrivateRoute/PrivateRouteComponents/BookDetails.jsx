import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import ReactStars from 'react-rating-stars-component';
import { Contex } from '../../ContexApi/Contex';

const BookDetails = () => {
    const { id } = useParams(); // Get book ID from URL
    const navigate = useNavigate();
    const [book, setBook] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [returnDate, setReturnDate] = useState('');
    const { user } = useContext(Contex)
    // Fetch book details
    useEffect(() => {
        axios
            .get(`http://localhost:5000/allBooks/${id}`)
            .then((response) => setBook(response.data))
            .catch((error) => {
                console.error('Error fetching book details:', error);
                toast.error('Failed to fetch book details.');
            });
    }, [id]);

    // Handle borrow book submission
    const handleBorrow = () => {
        if (!returnDate) {
            toast.error('Please select a return date.');
            return;
        }
        const currentDate = new Date();
        const selectedDate = new Date(returnDate);
        if (selectedDate <= currentDate) {
            toast.error('Return date must be a future date.');
            return;
        }

        axios
            .put(`http://localhost:5000/allBooks/borrowed/${id}`)
            .then(() => {
                toast.success('Book borrowed successfully!');
                setIsModalOpen(false);
                setBook((prevBook) => ({
                    ...prevBook,
                    quantity: prevBook.quantity - 1,
                }));
                // Working------------------------------->>>>>>>>>>>>
                axios
                    .post(`http://localhost:5000/allBorrowed`, {
                        bookId: id,
                        email: user.email,
                        returnDate,
                        book
                    })
                    .then(() => console.log('successfull store of borrowed book'))
                    .catch((error) => console.log('ERROR =>', error))
            })
            .catch((error) => {
                console.error('Error borrowing book:', error);
                toast.error('Failed to borrow book.');
            });
    };

    if (!book) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
            </div>
        )
    }

    return (
        <div className="max-w-2xl mx-auto p-6 rounded-lg shadow-md border border-gray-300 my-10">
            <img
                src={book.image}
                alt={book.name}
                className="w-full h-64 object-cover rounded mb-6"
            />
            <h1 className="text-3xl font-semibold mb-6">{book.name}</h1>
            <p className="mb-4">
                <strong>Author:</strong> {book.author}
            </p>
            <p className="mb-4">
                <strong>Category:</strong> {book.category}
            </p>
            <p className="mb-4">
                <strong>Quantity:</strong> {book.quantity}
            </p>
            <div className="flex items-center gap-3 mb-4">
                <strong>Rating:</strong>

                <ReactStars
                    count={5}
                    value={Number(book.rating)}
                    size={24}
                    activeColor="#ffd700"
                    edit={false}
                />
            </div>
            <p className="mb-4">
                <strong>Description:</strong> {book.shortDescription}
            </p>
            <button
                className="btn btn-primary w-full"
                onClick={() => setIsModalOpen(true)}
                disabled={book.quantity === 0}
            >
                {book.quantity === 0 ? 'Out of Stock' : 'Borrow'}
            </button>

            {/* Borrow Modal */}
            {isModalOpen && (
                <div className="modal modal-open">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Borrow Book</h3>
                        <p className="py-4">
                            <strong>Book Name:</strong> {book.name}
                        </p>
                        <p>
                            <strong>User Name:</strong> {user.displayName}
                        </p>
                        <p>
                            <strong>User Email:</strong> {user.email}
                        </p>
                        <div className="form-control">
                            <label className="label">Return Date</label>
                            <input
                                type="date"
                                className="input input-bordered"
                                value={returnDate}
                                onChange={(e) => setReturnDate(e.target.value)}
                                required
                            />
                        </div>
                        <div className="modal-action">
                            <button
                                className="btn btn-success"
                                onClick={handleBorrow}
                            >
                                Confirm Borrow
                            </button>
                            <button
                                className="btn btn-error"
                                onClick={() => setIsModalOpen(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookDetails;
