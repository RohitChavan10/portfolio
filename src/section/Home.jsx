import React from 'react';

const Home = () =>{
    return(
    <section
  id="home"
  className="w-full min-h-screen flex items-center justify-center text-center bg-gradient-to-br from-indigo-100 to-white px-6"
>
  <div className="w-screen">
    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-4">
      Hi, I'm <span className="text-indigo-600">Rohit</span>
    </h1>
    <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto mb-6">
      A passionate Full-stack Developer focused on building impactful web applications.
    </p>
    <a
      href="#projects"
      className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full text-base font-medium hover:bg-indigo-700 transition"
    >
      View My Work
    </a>
  </div>
</section>

    );
};

export default Home;