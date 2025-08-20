"use client";

import React from 'react';
import { MdEmail } from 'react-icons/md';

const Email = () => {
  return (
    <div className="p-4 text-white">
      <h1 className="text-2xl font-bold mb-4 flex items-center">
        <MdEmail className="mr-2 text-blue-400" size={30} />
        Email Contact
      </h1>
      
      <div className="bg-gray-800 p-6 rounded-lg">
        <p className="text-xl mb-4">
          You can reach me at:
        </p>
        
        <a 
          href="mailto:example@email.com" 
          className="text-2xl text-blue-400 hover:text-blue-300 transition-colors flex items-center justify-center p-4 border border-blue-500 rounded-lg"
        >
          <MdEmail className="mr-2" size={24} />
          example@email.com
        </a>
        
        <p className="mt-6 text-gray-400">
          I typically respond to emails within 24-48 hours. Please feel free to reach out
          for project inquiries, job opportunities, or just to say hello!
        </p>
      </div>
    </div>
  );
};

export default Email;
