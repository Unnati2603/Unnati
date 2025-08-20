/**
 * Sidebar Component
 * 
 * This component renders the sidebar of the file explorer,
 * showing quick access folders for navigation.
 */

import React from 'react';
import { FileSystemItem } from '../../../data/fileSystemData';

interface SidebarProps {
  folders: FileSystemItem[];
  onItemClick: (item: FileSystemItem) => void;
  onItemDoubleClick: (item: FileSystemItem) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  folders, 
  onItemClick, 
  onItemDoubleClick 
}) => (
  <div className="w-1/4 bg-gray-800 p-2 border-r border-gray-700 overflow-y-auto">
    <h3 className="text-white font-semibold mb-2">Quick access</h3>
    {folders.map((folder) => (
      <div 
        key={folder.path}
        className="flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer"
        onClick={() => onItemClick(folder)}
        onDoubleClick={() => onItemDoubleClick(folder)}
      >
        {folder.icon}
        <span className="ml-2 text-white">{folder.name}</span>
      </div>
    ))}
  </div>
);

export default Sidebar;
