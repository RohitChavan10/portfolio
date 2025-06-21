import React from 'react';
import skills from '../data/skills';

const Skills = ()=> {
    return(
        <section id="skills" className="min-h-screen px-6 py-20 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-12">Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 bg-indigo-50 p-4 rounded-lg shadow hover:scale-105 transition-transform"
            >
              <div className="text-4xl">{skill.icon}</div>
              <span className="text-sm font-medium text-gray-700">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
};

export default Skills;