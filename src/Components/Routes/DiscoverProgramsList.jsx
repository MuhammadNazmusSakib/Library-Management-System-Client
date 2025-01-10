import React from 'react';

const programs = [
  {
    title: "Literary Evenings",
    description: "Join us for enchanting evenings filled with book readings, author meet-and-greets, and literary discussions.",
  },
  {
    title: "Art Exhibitions",
    description: "Experience the creativity of local and international artists in our curated art exhibitions.",
  },
  {
    title: "Cultural Workshops",
    description: "Dive into diverse cultural traditions through hands-on workshops and activities.",
  },
  {
    title: "Storytelling Sessions",
    description: "Relive the magic of stories with our engaging storytelling events for all age groups.",
  },
  {
    title: "Book Clubs",
    description: "Connect with fellow book enthusiasts in our weekly book club meetings.",
  },
  {
    title: "Film and Media Series",
    description: "Explore the intersection of literature and cinema with screenings and discussions.",
  },
  {
    title: "Youth Programs",
    description: "Interactive activities designed for young learners to spark their curiosity and creativity.",
  },
];

const DiscoverProgramsList = () => {
  return (
    <section className="py-16 px-3 bg-gray-100">
      <div className="max-w-7xl md:px-6 lg:px-8 mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Discover Our Programs
        </h2>
        <ul className=" list-inside space-y-6 text-gray-700">
          {programs.map((program, index) => (
            <li key={index}>
              <h3 className="text-2xl font-semibold text-purple-600">
                {program.title}
              </h3>
              <p className="text-gray-600">{program.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default DiscoverProgramsList;
