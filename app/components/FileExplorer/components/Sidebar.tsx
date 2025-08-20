/**
 * Sidebar Component
 * 
 * This component renders the sidebar of the file explorer,
 * showing quick access folders for navigation.
 */

import React from 'react';
import { FileSystemItem } from '../../../data/fileSystemData';
import Image from 'next/image';

interface SidebarProps {
  folders: FileSystemItem[];
  onItemClick: (item: FileSystemItem) => void;
  onItemDoubleClick: (item: FileSystemItem) => void;
  currentPath: string;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  folders, 
  onItemClick, 
  onItemDoubleClick,
  currentPath
}) => (
  <div className="w-1/4 bg-gray-800 p-2 border-r border-gray-700 overflow-y-auto">
    <h3 className="text-white font-semibold mb-2">Quick access</h3>
    {folders.map((folder) => {
      const isSelected = currentPath.startsWith(folder.path);
      return (
        <div 
          key={folder.path}
          className="flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer"
          onClick={() => onItemClick(folder)}
          onDoubleClick={() => onItemDoubleClick(folder)}
        >
          <Image
            src={isSelected ? '/assets/Open Folder.ico' : '/assets/Closed folder.ico'}
            alt={isSelected ? 'Open folder' : 'Closed folder'}
            width={20}
            height={20}
            className="object-contain"
            unoptimized={true}
          />
          <span className="ml-2 text-white">{folder.name}</span>
        </div>
      );
    })}
  </div>
);

export default Sidebar;
