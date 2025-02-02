import React from "react";
import { useNavigate } from "react-router-dom";

const JoinBookClub = () => {
const navigate = useNavigate()
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl px-3 md:px-6 lg:px-8 mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Left: Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://i.ibb.co.com/k095ccH/book-club.jpg"
            alt="Book Club"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-1/2 md:text-left">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Join Our Book Club
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Immerse yourself in a world of literary wonders. Our book club offers
            a unique space to explore, discuss, and celebrate stories that inspire and
            captivate. Whether you're a voracious reader or just starting out, there's
            always a place for you here.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Connect with fellow book lovers, participate in engaging discussions,
            and enjoy exclusive access to curated reading lists, author meetups, and
            much more. Let's turn pages together!
          </p>
          <button onClick={() => navigate("/join-book-club")} className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
            Join Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default JoinBookClub;



