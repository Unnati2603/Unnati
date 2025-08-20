/**
 * Navigation Bar Component
 * 
 * This component renders the navigation bar of the file explorer,
 * including back/forward buttons and the current path display.
 */

import React from 'react';
import { IoMdArrowBack, IoMdArrowForward } from 'react-icons/io';

interface NavigationBarProps {
  currentPath: string;
  onBack: () => void;
  onForward: () => void;
  canGoBack: boolean;
  canGoForward: boolean;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ 
  currentPath, 
  onBack, 
  onForward, 
  canGoBack, 
  canGoForward 
}) => (
  <div className="flex items-center bg-gray-800 p-2 border-b border-gray-700">
    <button 
      onClick={onBack} 
      disabled={!canGoBack}
      className={`p-1 mr-1 rounded ${!canGoBack ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700'}`}
    >
      <IoMdArrowBack size={16} color="#FFFFFF" />
    </button>
    <button 
      onClick={onForward} 
      disabled={!canGoForward}
      className={`p-1 mr-3 rounded ${!canGoForward ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700'}`}
    >
      <IoMdArrowForward size={16} color="#FFFFFF" />
    </button>
    <div className="bg-gray-700 flex-1 p-2 rounded text-white">
      {currentPath}
    </div>
  </div>
);

export default NavigationBar;
