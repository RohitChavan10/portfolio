import React from 'react';
import projects from '../data/project';

const Projects = () => {
    return(
        <section id='projects' className='min-h-screen px-6py-20 bg-gray-100'>
            <div className='max-w-6xl mx-auto text-center'>
                <h2 className='text-3xl md:text-4xl font-bold text-indigo-600 mh-12'>
                    Projects
                </h2>
                <div className='grid gap-8 md:grid-cols-2'>
                    {projects.map((project)=> (
                        <div key={project.id} className='bg-white rounded-xl shadow-md overflow-hidden'>

                            <img src={project.image} alt={project.title} className='w-full h-56 object-cover'/>
                                <div className='p-6'>
                                    <h3 className='text-xl font-semibold text-gray-800'>
                                        {project.title}
                                    </h3>
                                    <p className='text-gray-600 my-3'>
                                        {project.description}
                                    </p>
                                    <div className='flex gap-4'>
                                        <a 
                                        href={project.github}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='text-indigo-600 hover:underline'
                                        >
                                            GitHub
                                        </a>
                                        <a
                                        href={project.demo}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='text-indigo-600 hover:underline'
                                        >
                                            Live Demo
                                        </a>
                                    </div>

                                </div>
                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default Projects;