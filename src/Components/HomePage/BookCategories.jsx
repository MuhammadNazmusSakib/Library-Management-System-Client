import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const BookCategories = () => {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    

    // Fetch categories 
    useEffect(() => {
        axios
            .get('http://localhost:5000/categories')
            .then((response) => {
                const books = response.data;
                setCategories(books.slice(0, 4)); // Show only 4 categories
            })
            // .catch((error) => {
            //     console.error('Error fetching categories:', error);
            // });
    }, []);

    // Navigate to the filtered books page
    const handleCategoryClick = (category) => {
        navigate(`/books/${category}`);
    };

    return (
        <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-3xl font-semibold text-center mb-8">
                Book Categories
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="card shadow-md bg-gray-100 p-4 hover:shadow-lg cursor-pointer"
                        onClick={() => handleCategoryClick(category)}
                    >
                        <h2 className="text-xl font-semibold text-center mb-2">
                            {category}
                        </h2>
                        <p className="text-center text-gray-600">
                            Explore the best books in {category}.
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookCategories;
