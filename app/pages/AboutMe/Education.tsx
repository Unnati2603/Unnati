/**
 * Education Component
 * 
 * This component displays the educational background of the portfolio owner.
 * It presents academic qualifications including degrees, institutions, dates,
 * and notable achievements in a structured format.
 */

"use client";

import React from 'react';

const Education = () => {
  return (
    <div className="p-4 text-white">
      <h1 className="text-2xl font-bold mb-4">Education</h1>
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-blue-400">Master of Science in Software Engineering</h2>
        <h3 className="text-lg text-gray-300">Stanford University</h3>
        <p className="text-gray-400">2018 - 2020</p>
        <ul className="list-disc pl-5 mt-2">
          <li>Specialized in Human-Computer Interaction</li>
          <li>Thesis: "Improving User Experience in Progressive Web Applications"</li>
          <li>GPA: 3.9/4.0</li>
        </ul>
      </div>
      
      <div>
        <h2 className="text-xl font-semibold text-blue-400">Bachelor of Science in Computer Science</h2>
        <h3 className="text-lg text-gray-300">MIT</h3>
        <p className="text-gray-400">2014 - 2018</p>
        <ul className="list-disc pl-5 mt-2">
          <li>Minor in Mathematics</li>
          <li>Dean&apos;s List all semesters</li>
          <li>Research Assistant in the AI Lab</li>
          <li>GPA: 3.8/4.0</li>
        </ul>
      </div>
    </div>
  );
};

export default Education;
