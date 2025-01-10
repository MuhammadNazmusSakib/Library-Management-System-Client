import { FaSquareFacebook, FaSquareInstagram, FaSquareTwitter } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <footer className="bg-gray-700 text-white py-10">
        <div className="max-w-7xl md:px-6 lg:px-8 mx-auto px-4">
          {/* Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">Contact Us</h2>
              <p>123 School Road</p>
              <p>Library City, 12345</p>
              <p>Email: info@schoollibrary.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
  
            {/* Quick Links */}
            <div className="justify-end">
              <h2 className="text-xl font-bold text-white mb-4">Quick Links</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:text-blue-400">Home</Link>
                </li>
                <li>
                  <Link to="/all-books" className="hover:text-blue-400">All Books</Link>
                </li>
                <li>
                  <Link to="/borrowed-books" className="hover:text-blue-400">Borrowed Books</Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-blue-400">Contact Us</Link>
                </li>
              </ul>
            </div>
  
            {/* Social Media */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">Follow Us</h2>
              <div className="flex space-x-4">
                <a href="#" className="text-3xl text-white hover:text-blue-400">
                   <FaSquareFacebook />
                </a>
                <a href="#" className="text-3xl text-white hover:text-blue-400">
                <FaSquareTwitter />
                </a>
                <a href="#" className="text-3xl text-white hover:text-blue-400">
                <FaSquareInstagram />
                </a>
                <a href="#" className="text-3xl text-white hover:text-blue-400">
                <GrLinkedin />
                </a>
              </div>
            </div>
          </div>
  
          {/* Bottom Section */}
          <div className="border-t border-gray-700 mt-8 pt-4 text-center">
            <p>&copy; {new Date().getFullYear()} School Library. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  