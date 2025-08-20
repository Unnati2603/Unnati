/**
 * Bio Component
 * 
 * This component displays the personal biography section of the portfolio.
 * It presents a brief introduction about the developer, their professional approach,
 * and some personal interests.
 */

"use client";

import React from 'react';

const Bio = () => {
  return (
    <div className="p-4 text-white">
      <h1 className="text-2xl font-bold mb-4">About Me</h1>
      
      <p className="mb-3">
        I am a passionate developer with expertise in web technologies and a love for creating 
        intuitive user experiences. With several years of experience in the industry, I've worked 
        on a variety of projects ranging from small business websites to complex enterprise applications.
      </p>
      
      <p className="mb-3">
        My approach to development focuses on writing clean, maintainable code that delivers 
        exceptional user experiences. I believe in continuous learning and staying up-to-date 
        with the latest technologies and best practices.
      </p>
      
      <p>
        When I'm not coding, you can find me exploring the outdoors, reading, or experimenting 
        with new recipes in the kitchen.
      </p>
    </div>
  );
};

export default Bio;
