/**
 * Title Bar Component
 * 
 * This component renders the title bar of the file explorer window,
 * including the window title and control buttons (minimize, maximize, close).
 */

import React from 'react';
import { FaMinus } from 'react-icons/fa';
import { FaFolderClosed } from 'react-icons/fa6';
import { AiOutlineClose } from 'react-icons/ai';
import { MdMaximize } from 'react-icons/md';

interface TitleBarProps {
  currentPath: string;
  onClose: () => void;
  onMaximize: () => void;
}

const TitleBar: React.FC<TitleBarProps> = ({ currentPath, onClose, onMaximize }) => (
  <div className="flex items-center justify-between bg-gray-900 p-2 rounded-t-lg title-bar">
    <div className="flex items-center">
      <FaFolderClosed size={20} color="#FFD700" className="mr-2" />
      <span className="text-white font-semibold">File Explorer - {currentPath}</span>
    </div>
    <div className="flex space-x-2">
      <button onClick={onClose} className="p-1 hover:bg-gray-700 rounded">
        <FaMinus size={16} color="#FFFFFF" />
      </button>
      <button onClick={onMaximize} className="p-1 hover:bg-gray-700 rounded">
        <MdMaximize size={16} color="#FFFFFF" />
      </button>
      <button onClick={onClose} className="p-1 hover:bg-gray-700 rounded">
        <AiOutlineClose size={16} color="#FFFFFF" />
      </button>
    </div>
  </div>
);

export default TitleBar;
