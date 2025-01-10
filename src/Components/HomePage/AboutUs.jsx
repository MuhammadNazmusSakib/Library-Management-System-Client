import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate()
  return (
    <section className="py-12 bg-gray-100 rounded shadow-md">
      <div className="max-w-7xl md:px-6 lg:px-8 px-3 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-3 items-center">
        {/* Left: Description */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to our library! We are dedicated to fostering a love for
            reading and learning in our community. With a vast collection of
            books spanning various genres and categories, we aim to provide an
            inclusive and inspiring space for everyone.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Whether you're here to study, explore new worlds through literature,
            or simply enjoy the quiet ambiance, our library is the perfect place
            for you. Join us in our mission to promote knowledge and discovery!
          </p>
          <button onClick={() => navigate("/about-library")} className="px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-500 transition">
            Learn More
          </button>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://i.ibb.co.com/G0pSMcF/aboutUs.jpg"
            alt="Library Image"
            className="rounded-lg shadow-lg w-full lg:max-w-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
