"use client";

import React from 'react';

const Portfolio = () => {
  return (
    <div className="p-4 text-white">
      <h1 className="text-2xl font-bold mb-4">Portfolio Website</h1>
      
      <div className="mb-4 bg-gray-800 p-3 rounded">
        <h2 className="text-xl font-semibold mb-2 text-blue-400">Project Overview</h2>
        <p>
          This portfolio website was built using Next.js, TypeScript, and Tailwind CSS. 
          It features a unique desktop-like interface to showcase my work in an interactive way.
        </p>
      </div>
      
      <div className="mb-4 bg-gray-800 p-3 rounded">
        <h2 className="text-xl font-semibold mb-2 text-blue-400">Technologies Used</h2>
        <ul className="list-disc pl-5">
          <li>Next.js 13 with App Router</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
          <li>React Icons</li>
          <li>React-rnd for window dragging</li>
        </ul>
      </div>
      
      <div className="mb-4 bg-gray-800 p-3 rounded">
        <h2 className="text-xl font-semibold mb-2 text-blue-400">Key Features</h2>
        <ul className="list-disc pl-5">
          <li>Desktop-like interface with draggable windows</li>
          <li>File explorer navigation system</li>
          <li>Responsive design</li>
          <li>Dynamic component loading</li>
          <li>Modern UI with smooth animations</li>
        </ul>
      </div>
      
      <div className="bg-gray-800 p-3 rounded">
        <h2 className="text-xl font-semibold mb-2 text-blue-400">Challenges & Solutions</h2>
        <p className="mb-2">
          One of the main challenges was creating a realistic file explorer experience that could 
          dynamically load components. This was solved by implementing a custom file system structure
          and using Next.js dynamic imports for component loading.
        </p>
        <p>
          Another challenge was ensuring the draggable windows felt natural and responsive. This was
          achieved using react-rnd and custom styling to match the overall theme.
        </p>
      </div>
    </div>
  );
};

export default Portfolio;
