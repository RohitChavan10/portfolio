import React from 'react';
import profileIMG from '../assets/LOGO.jfif';

const About = () => {
    return(
        <section id='about' className='min-h-screen px-6 py-20 bg-white flex items-center justify-center'>
        <div className='max-w-5xl w-full mx-auto flex flex-col md:flex-row items-center gap-12'>
        {/*Profile Image */}
        <div className='w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg border-4 border-indigo-600'>
        <img
        src={profileIMG}
        alt='Rohit Chavan'
        className='w-full h-full object-cover '
        />
        </div>
        {/*About text */}
        <div className='text-center md:text-left'>
            <h2 className='text-3xl md:text-4xl font-bold text-indigo-600 mb-4'>
                About Me
            </h2>
            <p className='text-gray-700 text-lg leading-relaxed mb-4'>
                I'm Rohit Chavan, a Full-stack web developer with a passion for building efficient, scalable,
                and beautiful web applications. I love solving problems with clean, reusable code.
            </p>
            <p className='text-gray-600'>
                My current focus is on MERN stack, UI animations, and optimizing user experience.
            </p>


        </div>
        
        </div>
        </section>

    );
}

export default About;