import React from "react";

const AboutLibrary = () => {
  return (
    <section className="py-12 bg-gray-100 rounded shadow-md">
      <div className="max-w-7xl px-3 md:px-6 lg:px-8 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        {/* Left: Image */}
        <div className="flex justify-center lg:justify-start">
          <img
            src="https://i.ibb.co.com/dQRXrcy/Cleveland-Public-Library-July-2018.jpg"
            alt="Library Interior"
            className="w-full md:max-w-2xl lg:max-w-lg rounded shadow-lg"
          />
        </div>

        {/* Right: Description */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">About Our Library</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our library is more than just a repository of books; it is a haven
            for knowledge, creativity, and community engagement. Featuring a
            modern design and state-of-the-art facilities, our library is the
            perfect space for students, professionals, and book lovers alike.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            From workshops and reading clubs to quiet study areas and digital
            resources, we offer a variety of services to meet the needs of our
            diverse audience. We invite you to visit us and experience the
            difference.
          </p>
        </div>
      </div>

      {/* Google Map */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Find Us Here:
        </h3>
        <div className="w-full h-96 rounded shadow-lg overflow-hidden">
          <iframe
            title="Library Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2494.0123978734837!2d-81.69429264971735!3d41.50111300000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8830f0801b3a6365%3A0xc243ac8e9a770985!2sCleveland%20Public%20Library!5e1!3m2!1sen!2sbd!4v1735051151077!5m2!1sen!2sbd"
            className="w-full h-full"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      </div>
    </section>
  );
};

export default AboutLibrary;
