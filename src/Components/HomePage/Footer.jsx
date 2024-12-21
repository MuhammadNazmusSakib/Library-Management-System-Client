import { FaSquareFacebook, FaSquareInstagram, FaSquareTwitter } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";

const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-300 py-10">
        <div className="container mx-auto px-4">
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
            <div>
              <h2 className="text-xl font-bold text-white mb-4">Quick Links</h2>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="hover:text-blue-400">Home</a>
                </li>
                <li>
                  <a href="/books" className="hover:text-blue-400">All Books</a>
                </li>
                <li>
                  <a href="/borrowed" className="hover:text-blue-400">Borrowed Books</a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-blue-400">Contact Us</a>
                </li>
              </ul>
            </div>
  
            {/* Social Media */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">Follow Us</h2>
              <div className="flex space-x-4">
                <a href="#" className="text-3xl text-gray-300 hover:text-blue-400">
                   <FaSquareFacebook />
                </a>
                <a href="#" className="text-3xl text-gray-300 hover:text-blue-400">
                <FaSquareTwitter />
                </a>
                <a href="#" className="text-3xl text-gray-300 hover:text-blue-400">
                <FaSquareInstagram />
                </a>
                <a href="#" className="text-3xl text-gray-300 hover:text-blue-400">
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
  