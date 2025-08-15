"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaFolderClosed, FaFolder } from 'react-icons/fa6';
import { FaFileAlt, FaMinus } from 'react-icons/fa';
import { IoMdArrowBack, IoMdArrowForward } from 'react-icons/io';
import { AiOutlineClose } from 'react-icons/ai';
import { MdMaximize } from 'react-icons/md';
import { Rnd } from 'react-rnd';

interface Folder {
  name: string;
  path: string;
  icon: React.ReactNode;
  type: 'folder';
}

interface File {
  name: string;
  path: string;
  icon: React.ReactNode;
  type: 'file';
  content?: string;
}

type FileSystemItem = Folder | File;

const FileExplorer: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ 
  isOpen, 
  onClose 
}) => {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState<string>('/');
  const [history, setHistory] = useState<string[]>(['/']);
  const [historyIndex, setHistoryIndex] = useState<number>(0);
  const [isMaximized, setIsMaximized] = useState<boolean>(false);
  const [windowSize, setWindowSize] = useState({ width: 800, height: 600 });
  const [windowPosition, setWindowPosition] = useState({ x: 0, y: 0 });
  
  // Initialize window position when component mounts
  useEffect(() => {
    if (isOpen && typeof window !== 'undefined') {
      // Center the window in the viewport
      const x = (window.innerWidth - windowSize.width) / 2;
      const y = (window.innerHeight - windowSize.height) / 2;
      setWindowPosition({ x, y });
    }
  }, [isOpen, windowSize.width, windowSize.height]);

  // Define the folders for the sidebar
  const sidebarFolders: Folder[] = [
    { 
      name: 'About Me', 
      path: '/components/AboutMe', 
      icon: <FaFolder size={20} color="#FFD700" />,
      type: 'folder'
    },
    { 
      name: 'Projects', 
      path: '/components/Projects', 
      icon: <FaFolder size={20} color="#FFD700" />,
      type: 'folder'
    }
  ];

  // Define the files and folders for the main area based on the current path
  const getFileSystemItems = (path: string): FileSystemItem[] => {
    switch (path) {
      case '/':
        return [
          ...sidebarFolders,
          { 
            name: 'README.txt', 
            path: '/readme', 
            icon: <FaFileAlt size={20} color="#FFFFFF" />,
            type: 'file',
            content: 'Welcome to my portfolio! Double-click on folders to explore more about me and my projects.'
          }
        ];
      case '/components/AboutMe':
        return [
          { 
            name: 'Bio.txt', 
            path: '/components/AboutMe/bio', 
            icon: <FaFileAlt size={20} color="#FFFFFF" />,
            type: 'file',
            content: 'I am a passionate developer with expertise in web technologies.'
          },
          { 
            name: 'Skills.txt', 
            path: '/components/AboutMe/skills', 
            icon: <FaFileAlt size={20} color="#FFFFFF" />,
            type: 'file',
            content: 'My skills include: React, Next.js, TypeScript, Tailwind CSS, and more.'
          }
        ];
      case '/components/Projects':
        return [
          { 
            name: 'Project1.txt', 
            path: '/components/Projects/project1', 
            icon: <FaFileAlt size={20} color="#FFFFFF" />,
            type: 'file',
            content: 'This is a description of Project 1.'
          },
          { 
            name: 'Project2.txt', 
            path: '/components/Projects/project2', 
            icon: <FaFileAlt size={20} color="#FFFFFF" />,
            type: 'file',
            content: 'This is a description of Project 2.'
          }
        ];
      default:
        return [];
    }
  };

  const [selectedItem, setSelectedItem] = useState<FileSystemItem | null>(null);
  const [fileContent, setFileContent] = useState<string | null>(null);

  const handleItemClick = (item: FileSystemItem) => {
    setSelectedItem(item);
    if (item.type === 'file') {
      setFileContent((item as File).content || '');
    } else {
      setFileContent(null);
    }
  };

  const handleItemDoubleClick = (item: FileSystemItem) => {
    if (item.type === 'folder') {
      navigateTo(item.path);
    } else if (item.type === 'file') {
      setFileContent((item as File).content || '');
    }
  };

  const navigateTo = (path: string) => {
    setCurrentPath(path);
    
    // Update history
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(path);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
    
    // For folders that correspond to actual Next.js routes, navigate there
    if (path === '/components/AboutMe' || path === '/components/Projects') {
      router.push(path);
    }
  };

  const handleBack = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      setCurrentPath(history[historyIndex - 1]);
    }
  };

  const handleForward = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
      setCurrentPath(history[historyIndex + 1]);
    }
  };

  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  if (!isOpen) return null;

  return (
    <Rnd
      default={{
        x: windowPosition.x,
        y: windowPosition.y,
        width: windowSize.width,
        height: windowSize.height,
      }}
      minWidth={400}
      minHeight={300}
      disableDragging={isMaximized}
      enableResizing={!isMaximized}
      dragHandleClassName="title-bar"
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: '#1f2937', // bg-gray-800
        borderRadius: '0.5rem',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        border: '1px solid #374151', // border-gray-700
        zIndex: 50,
        ...(isMaximized ? {
          width: '100vw !important',
          height: '100vh !important',
          top: '0 !important',
          left: '0 !important',
          borderRadius: '0',
        } : {})
      }}
      onDragStop={(e, d) => {
        setWindowPosition({ x: d.x, y: d.y });
      }}
      onResizeStop={(e, direction, ref, delta, position) => {
        setWindowSize({
          width: parseInt(ref.style.width),
          height: parseInt(ref.style.height),
        });
        setWindowPosition(position);
      }}
    >
      {/* Title bar */}
      <div className="flex items-center justify-between bg-gray-900 p-2 rounded-t-lg title-bar">
        <div className="flex items-center">
          <FaFolderClosed size={20} color="#FFD700" className="mr-2" />
          <span className="text-white font-semibold">File Explorer - {currentPath}</span>
        </div>
        <div className="flex space-x-2">
          <button onClick={onClose} className="p-1 hover:bg-gray-700 rounded">
            <FaMinus size={16} color="#FFFFFF" />
          </button>
          <button onClick={handleMaximize} className="p-1 hover:bg-gray-700 rounded">
            <MdMaximize size={16} color="#FFFFFF" />
          </button>
          <button onClick={onClose} className="p-1 hover:bg-gray-700 rounded">
            <AiOutlineClose size={16} color="#FFFFFF" />
          </button>
        </div>
      </div>
      
      {/* Toolbar */}
      <div className="flex items-center bg-gray-800 p-2 border-b border-gray-700">
        <button 
          onClick={handleBack} 
          disabled={historyIndex <= 0}
          className={`p-1 mr-1 rounded ${historyIndex <= 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700'}`}
        >
          <IoMdArrowBack size={16} color="#FFFFFF" />
        </button>
        <button 
          onClick={handleForward} 
          disabled={historyIndex >= history.length - 1}
          className={`p-1 mr-3 rounded ${historyIndex >= history.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700'}`}
        >
          <IoMdArrowForward size={16} color="#FFFFFF" />
        </button>
        <div className="bg-gray-700 flex-1 p-2 rounded text-white">
          {currentPath}
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-1/4 bg-gray-800 p-2 border-r border-gray-700 overflow-y-auto">
          <h3 className="text-white font-semibold mb-2">Quick access</h3>
          {sidebarFolders.map((folder) => (
            <div 
              key={folder.path}
              className="flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer"
              onClick={() => handleItemClick(folder)}
              onDoubleClick={() => handleItemDoubleClick(folder)}
            >
              {folder.icon}
              <span className="ml-2 text-white">{folder.name}</span>
            </div>
          ))}
        </div>
        
        {/* File list */}
        <div className="flex-1 p-2 overflow-y-auto">
          {fileContent ? (
            <div className="bg-gray-700 p-4 rounded text-white h-full overflow-y-auto">
              <pre className="whitespace-pre-wrap">{fileContent}</pre>
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-4">
              {getFileSystemItems(currentPath).map((item) => (
                <div 
                  key={item.path}
                  className={`flex flex-col items-center p-2 rounded cursor-pointer
                    ${selectedItem?.path === item.path ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
                  onClick={() => handleItemClick(item)}
                  onDoubleClick={() => handleItemDoubleClick(item)}
                >
                  {item.icon}
                  <span className="mt-1 text-white text-sm text-center">{item.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Status bar */}
      <div className="bg-gray-900 p-1 text-gray-400 text-xs border-t border-gray-700 rounded-b-lg">
        {selectedItem ? `${selectedItem.name} - ${selectedItem.type}` : 'Ready'}
      </div>
    </Rnd>
  );
};

export default FileExplorer;
