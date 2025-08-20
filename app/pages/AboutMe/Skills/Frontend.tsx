/**
 * Frontend Skills Component
 * 
 * This component displays the frontend development skills of the portfolio owner.
 * It presents a visual representation of skill proficiency levels using progress bars
 * for various frontend technologies and frameworks.
 */

"use client";

import React from 'react';

const Frontend = () => {
  // Skill data with name and proficiency level
  const skills = [
    { name: 'React', level: 95 },
    { name: 'Vue.js', level: 85 },
    { name: 'Angular', level: 75 },
    { name: 'TypeScript', level: 90 },
    { name: 'JavaScript', level: 95 },
    { name: 'HTML5', level: 98 },
    { name: 'CSS3', level: 92 },
    { name: 'Tailwind CSS', level: 88 },
    { name: 'SASS/SCSS', level: 85 },
    { name: 'Next.js', level: 90 },
  ];

  return (
    <div className="p-4 text-white">
      <h1 className="text-2xl font-bold mb-4">Frontend Skills</h1>
      
      <div className="grid gap-4">
        {skills.map((skill) => (
          <div key={skill.name} className="mb-2">
            <div className="flex justify-between mb-1">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-600 rounded-full h-2.5">
              <div 
                className="bg-blue-500 h-2.5 rounded-full" 
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frontend;
