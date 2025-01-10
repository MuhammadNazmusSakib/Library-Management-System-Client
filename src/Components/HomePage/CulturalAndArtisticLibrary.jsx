import React from 'react';
import { Link } from 'react-router-dom';

const CulturalAndArtisticLibrary = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Celebrating Stories, Art, and Culture</h1>
          <p className="text-lg font-medium mb-8">
            Explore diverse voices and celebrate creativity through books, exhibits, and events.
          </p>
          <Link to="/discover-programs">
            <button className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-md hover:bg-purple-100 transition">
              Discover Our Programs
            </button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-purple-600 mb-4">Literature from Around the World</h3>
            <p className="text-gray-700">
              Discover books and stories from diverse cultures and languages, bringing global perspectives to your
              reading.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-purple-600 mb-4">Local Author Spotlights</h3>
            <p className="text-gray-700">
              Engage with local authors and their works through book readings, signings, and interactive sessions.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-purple-600 mb-4">Art Exhibitions and Cultural Events</h3>
            <p className="text-gray-700">
              Enjoy rotating art exhibits, cultural festivals, and events that showcase creativity and heritage.
            </p>
          </div>
        </div>
      </div>

      {/* Events Section */}
      <div className="bg-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">Poetry Slam Night</h3>
              <p className="text-gray-700 mb-4">
                Join us for an evening of spoken word and poetry performances by talented local artists.
              </p>
              <p className="text-gray-500 text-sm">Date: January 25, 2025</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">Art and Literature Festival</h3>
              <p className="text-gray-700 mb-4">
                Experience a celebration of art and literature with workshops, exhibits, and guest speakers.
              </p>
              <p className="text-gray-500 text-sm">Date: February 10-12, 2025</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Join the Cultural Celebration</h2>
          <p className="text-lg font-medium mb-8">
            Be part of our vibrant community and explore the rich tapestry of art and culture we offer.
          </p>
          <Link to="/join-book-club">
            <button className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-md hover:bg-indigo-100 transition">
              Become a Member Today
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CulturalAndArtisticLibrary;
