"use client";

import React from 'react';
import { FaGithub } from 'react-icons/fa';

const GitHub = () => {
  return (
    <div className="p-4 text-white">
      <h1 className="text-2xl font-bold mb-4 flex items-center">
        <FaGithub className="mr-2 text-white" size={30} />
        GitHub Profile
      </h1>
      
      <div className="bg-gray-800 p-6 rounded-lg">
        <p className="text-xl mb-4">
          Check out my code and projects on GitHub:
        </p>
        
        <a 
          href="https://github.com/yourusername" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-white hover:text-gray-300 transition-colors flex items-center justify-center p-4 border border-gray-600 rounded-lg bg-gray-900"
        >
          <FaGithub className="mr-2" size={24} />
          github.com/yourusername
        </a>
        
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Featured Repositories:</h2>
          <ul className="list-disc pl-5">
            <li className="mb-2">
              <a href="#" className="text-blue-400 hover:underline">portfolio-website</a>
              <p className="text-gray-400">My personal portfolio website built with Next.js</p>
            </li>
            <li className="mb-2">
              <a href="#" className="text-blue-400 hover:underline">react-weather-app</a>
              <p className="text-gray-400">A weather application with location services</p>
            </li>
            <li>
              <a href="#" className="text-blue-400 hover:underline">ecommerce-platform</a>
              <p className="text-gray-400">Full-stack e-commerce solution with React and Node.js</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GitHub;
