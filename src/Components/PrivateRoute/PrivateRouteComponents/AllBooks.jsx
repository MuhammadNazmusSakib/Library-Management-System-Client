import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Contex } from '../../ContexApi/Contex';
import axios from 'axios';

const AllBooks = () => {
    const { user } = useContext(Contex);
    const [books, setBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [view, setView] = useState('card');
    const [showAvailable, setShowAvailable] = useState(false);

    // Fetch all books
    useEffect(() => {
        if (user) {
            axios.get('http://localhost:5000/allBooks')
                .then((response) => {
                    setBooks(response.data);
                    setFilteredBooks(response.data);
                })
                .catch((error) => console.error('Failed to load books.'));
        }
    }, [user]);

    // Filter books by availability
    const filterAvailableBooks = () => {
        if (showAvailable) {
            setFilteredBooks(books.filter(book => book.quantity > 0));
        } else {
            setFilteredBooks(books);
        }
    };

    // Toggle between card and table view
    const toggleView = (viewType) => {
        setView(viewType);
    };

    return (
        <div className="container mx-auto p-4 py-10">
            <h1 className="text-2xl font-semibold mb-4">All Books</h1>
            
            {/* Filter and View Toggle Section */}
            <div className="mb-4 flex items-center justify-between">
                <div className="space-x-4">
                    <button 
                        onClick={() => setShowAvailable(!showAvailable)} 
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                    >
                        {showAvailable ? 'Show All Books' : 'Show Available Books'}
                    </button>
                    <button 
                        onClick={() => filterAvailableBooks()} 
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                    >
                        Filter
                    </button>
                </div>
                <div>
                    <select 
                        onChange={(e) => toggleView(e.target.value)} 
                        value={view} 
                        className="px-4 py-2 border rounded-md"
                    >
                        <option value="card">Card View</option>
                        <option value="table">Table View</option>
                    </select>
                </div>
            </div>

            {/* Card View */}
            {view === 'card' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredBooks.map((book) => (
                        <div key={book._id} className="card shadow-lg rounded-lg overflow-hidden border border-gray-300">
                            <img 
                                src={book.image} 
                                alt={book.name} 
                                className="w-full h-48 object-cover" 
                            />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold">{book.name}</h2>
                                <p className="text-sm text-gray-600">{book.author}</p>
                                <p className="text-sm text-gray-500">{book.category}</p>
                                <p className="text-sm text-yellow-500">Rating: {book.rating}</p>
                                <p className="text-sm">Quantity: {book.quantity}</p>
                                <div className="mt-4">
                                    <Link to={`/update-book/${book._id}`}>
                                        <button className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                                            Update
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border-collapse">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="px-4 py-2 text-left">Image</th>
                                <th className="px-4 py-2 text-left">Name</th>
                                <th className="px-4 py-2 text-left">Author</th>
                                <th className="px-4 py-2 text-left">Category</th>
                                <th className="px-4 py-2 text-left">Rating</th>
                                <th className="px-4 py-2 text-left">Quantity</th>
                                <th className="px-4 py-2 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredBooks.map((book) => (
                                <tr key={book._id} className="border-b">
                                    <td className="px-4 py-2"><img src={book.image} alt={book.name} className="w-16 h-16 object-cover rounded" /></td>
                                    <td className="px-4 py-2">{book.name}</td>
                                    <td className="px-4 py-2">{book.author}</td>
                                    <td className="px-4 py-2">{book.category}</td>
                                    <td className="px-4 py-2">{book.rating}</td>
                                    <td className="px-4 py-2">{book.quantity}</td>
                                    <td className="px-4 py-2">
                                        <Link to={`/update-book/${book._id}`}>
                                            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                                                Update
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default AllBooks;