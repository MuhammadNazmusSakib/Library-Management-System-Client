import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Contex } from '../../ContexApi/Contex';
import axios from 'axios';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useDynamicTitle from '../../Hooks/useDynamicTitle';

const AllBooks = () => {
    useDynamicTitle("All Books | Academia Library")

    const { user } = useContext(Contex);
    const [books, setBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [view, setView] = useState('card');
    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState('all books')
    const [showAvailable, setShowAvailable] = useState(false);
    const [loading, setLoading] = useState(true)
    const axiosSecure = useAxiosSecure()

    // Fetch all books
    useEffect(() => {
        if (user) {
            axiosSecure.get('allBooks')
                .then((response) => {
                    setBooks(response.data);
                    setFilteredBooks(response.data);
                    setLoading(false)
                })
            // .catch((error) => console.error('Failed to load books.'));
        }
    }, [user]);

    // Fetch categories 
    useEffect(() => {
        axios
            .get('https://library-management-system-server-alpha.vercel.app/categories')
            .then((response) => {
                const books = response.data;
                setCategories(books)
            })
        // .catch((error) => {
        //     console.error('Error fetching categories:', error);
        // });
    }, []);



    // Filter books by availability
    const filterAvailableBooks = () => {
        setShowAvailable(!showAvailable);
        if (!showAvailable) {
            setFilteredBooks(
                books.filter(book => book.quantity > 0 && (category === 'all books' || book.category === category))
            );
        } else {
            setFilteredBooks(category === 'all books' ? books : books.filter(book => book.category === category));
        }
    };

    // Toggle between card and table view
    const toggleView = (viewType) => {
        setView(viewType);
    };

    // filter by category
    const filterCategory = (selectedCategory) => {
        setCategory(selectedCategory)
        if (selectedCategory === 'all books') {
            setFilteredBooks(books);
        } else {
            setFilteredBooks(books.filter(book => book.category === selectedCategory));
        }
    }
    // console.log(category)

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
            </div>
        )
    }

    return (
        <div className="bg-gray-100">
            <div className='max-w-7xl md:px-6 lg:px-4 mx-auto px-4 py-10'>
                <h1 className="text-4xl text-gray-700 font-extrabold text-center mb-4">All Books</h1>

                {/* Filter by category */}
                <div className="mb-4 md:flex items-center justify-between py-10">

                    <div className='space-x-4 mb-4'>
                        <select
                            onChange={(e) => filterCategory(e.target.value)}
                            value={category}
                            className="w-full px-4 py-2 border rounded-md"
                        >
                            <option value="all books">All Books</option>
                            {
                                categories.map((item, index) => (
                                    <option key={index} value={item}>{item}</option>
                                ))
                            }

                        </select>
                    </div>

                    <div className="space-x-4 mb-4">
                        <button
                            // onClick={() => setShowAvailable(!showAvailable)} 
                            onClick={() => filterAvailableBooks()}
                            className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                        >
                            {showAvailable ? 'Show All Books' : 'Show Available Books'}
                        </button>
                        {/* <button 
                        onClick={() => filterAvailableBooks()} 
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                    >
                        Filter
                    </button> */}
                    </div>
                    <div>
                        <select
                            onChange={(e) => toggleView(e.target.value)}
                            value={view}
                            className="w-full px-4 py-2 border rounded-md"
                        >
                            <option value="card">Card View</option>
                            <option value="table">Table View</option>
                        </select>
                    </div>
                </div>

                {/* Card View */}
                {view === 'card' ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {filteredBooks.map((book) => (
                            <div key={book._id} className="card shadow-lg rounded-lg overflow-hidden border border-gray-300 flex flex-col justify-between">
                                <img
                                    src={book.image}
                                    alt={book.name}
                                    className="w-full h-96 object-cover"
                                />
                                <div className="p-4">
                                    <h2 className="text-xl font-semibold">{book.name}</h2>
                                    <p className="text-sm text-gray-600">{book.author}</p>
                                    <p className="text-sm text-gray-800">{book.category}</p>
                                    <p className="text-sm text-yellow-500">Rating: {book.rating}</p>
                                    <p className="text-sm">Quantity: {book.quantity}</p>
                                    <div className="mt-4">
                                        <Link to={`/book/${book._id}`}>
                                            <button className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                                                View Details
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
                                            <Link to={`/book/${book._id}`}>
                                                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                                                    View
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
        </div>
    );
};

export default AllBooks;
