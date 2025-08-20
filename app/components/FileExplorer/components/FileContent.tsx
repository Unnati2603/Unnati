/**
 * FileContent Component
 * 
 * This component renders the main content area of the file explorer,
 * displaying either a grid of files/folders or the content of a selected file.
 */

import React from 'react';
import { FileSystemItem, getFileSystemItems } from '../../../data/fileSystemData';
import Image from 'next/image';

interface FileContentProps {
  currentPath: string;
  selectedItem: FileSystemItem | null;
  fileContent: string | null;
  selectedFileComponent: React.ReactNode | null;
  onItemClick: (item: FileSystemItem) => void;
  onItemDoubleClick: (item: FileSystemItem) => void;
}

const FileContent: React.FC<FileContentProps> = ({ 
  currentPath, 
  selectedItem, 
  fileContent, 
  selectedFileComponent,
  onItemClick,
  onItemDoubleClick
}) => {
  // Get items and mark the folders as open if they match the current path
  const items = getFileSystemItems(currentPath).map(item => {
    if (item.type === 'folder' && selectedItem?.path === item.path) {
      return { ...item, isOpen: true, icon: (
        <Image
          src="/assets/Open Folder.ico"
          alt="Open folder"
          width={20}
          height={20}
          className="object-contain"
          unoptimized={true}
        />
      )};
    }
    return item;
  });

  return (
    <div className="flex-1 p-2 overflow-y-auto">
      {selectedFileComponent ? (
        <div className="bg-gray-700 p-4 rounded text-white h-full overflow-y-auto">
          {selectedFileComponent}
        </div>
      ) : fileContent ? (
        <div className="bg-gray-700 p-4 rounded text-white h-full overflow-y-auto">
          <pre className="whitespace-pre-wrap">{fileContent}</pre>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {items.length > 0 ? (
            items.map((item) => (
              <div 
                key={item.path}
                className={`flex flex-col items-center p-2 rounded cursor-pointer
                  ${selectedItem?.path === item.path ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
                onClick={() => onItemClick(item)}
                onDoubleClick={() => onItemDoubleClick(item)}
              >
                {item.icon}
                <span className="mt-1 text-white text-sm text-center">{item.name}</span>
              </div>
            ))
          ) : (
            <div className="col-span-4 text-center text-white p-4">
              No items found in this location
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FileContent;
