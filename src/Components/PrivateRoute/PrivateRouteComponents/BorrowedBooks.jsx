import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Contex } from '../../ContexApi/Contex';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useDynamicTitle from '../../Hooks/useDynamicTitle';

const BorrowedBooks = () => {
  useDynamicTitle("Borrowed Books | Academia Library")

  const { user } = useContext(Contex); // Get logged-in user's details
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const axiosSecure = useAxiosSecure()

  // Fetch borrowed books for the logged-in user
  useEffect(() => {
    axiosSecure
      .get(`allBorrowed/email/${user.email}`)
      .then((response) => setBorrowedBooks(response.data))
      .catch((error) => {
        console.error('Error fetching borrowed books:', error);
        toast.error('Failed to load borrowed books.');
      });
  }, [user.email]);

  // Handle return book
  const handleReturn = (bookId, id) => {
    axiosSecure
      .put(`allBooks/returned/${bookId}`, { $inc: { quantity: 1 } }) // Increment quantity
      .then(() => {
        axiosSecure
          .delete(`allBorrowed/${id}`) // Remove from borrowed list
          .then(() => {
            toast.success('Book returned successfully!');
            setBorrowedBooks((prevBooks) =>
              prevBooks.filter((book) => book.bookId !== bookId)
            );
          })
          .catch((error) => {
            console.error('Error removing book:', error);
            toast.error('Failed to return book.');
          });
      })
      .catch((error) => {
        console.error('Error updating book quantity:', error);
        toast.error('Failed to update book quantity.');
      });
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6">My Borrowed Books</h1>
      {borrowedBooks.length === 0 ? (
        <div className='h-screen'>
          <p className="text-gray-600">You have not borrowed any books yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {borrowedBooks.map((book) => (
            <div key={book.bookId} className="p-4 border flex flex-col justify-between rounded-lg shadow-md">
              <img
                src={book.image}
                alt={book.name}
                className="w-full h-96 object-cover rounded mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{book.name}</h2>
              <p className="mb-2">
                <strong>Category:</strong> {book.category}
              </p>
              <p className="mb-2">
                <strong>Borrowed Date:</strong>{' '}
                {new Date(book.createdAt).toLocaleDateString('en-CA')} {/* 'en-CA' ensures the format is YYYY-MM-DD */}
              </p>
              <p className="mb-4">
                <strong>Return Date:</strong>{' '}
                {new Date(book.returnDate).toLocaleDateString()}
              </p>
              <button
                className="btn btn-error w-full"
                onClick={() => handleReturn(book.bookId, book._id)}
              >
                Return Book
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BorrowedBooks;
