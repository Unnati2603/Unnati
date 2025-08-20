/**
 * FileExplorer Component
 * 
 * This component creates a resizable, draggable file explorer window that allows users to
 * navigate through a virtual file system. It displays folders and files, handles navigation
 * with back/forward functionality, and can render file contents or components.
 */

"use client";
import { useState, useEffect } from 'react';
import { Rnd } from 'react-rnd';
import { FileSystemItem, File, sidebarFolders } from '../../data/fileSystemData';
import { loadFileComponent } from '../../data/componentLoader';

// Import extracted components
import TitleBar from './components/TitleBar';
import NavigationBar from './components/NavigationBar';
import Sidebar from './components/Sidebar';
import FileContent from './components/FileContent';
import StatusBar from './components/StatusBar';

interface FileExplorerProps {
  isOpen: boolean;
  onClose: () => void;
  initialPath?: string;
}

const FileExplorer: React.FC<FileExplorerProps> = ({ 
  isOpen, 
  onClose,
  initialPath = '/'
}) => {
  // State management for navigation and UI
  const [currentPath, setCurrentPath] = useState<string>(initialPath);
  const [history, setHistory] = useState<string[]>([initialPath]);
  const [historyIndex, setHistoryIndex] = useState<number>(0);
  const [isMaximized, setIsMaximized] = useState<boolean>(false);
  const [windowSize, setWindowSize] = useState({ width: 800, height: 600 });
  const [windowPosition, setWindowPosition] = useState({ x: 0, y: 0 });
  
  // State for file/folder selection and content display
  const [selectedItem, setSelectedItem] = useState<FileSystemItem | null>(null);
  const [fileContent, setFileContent] = useState<string | null>(null);
  const [selectedFileComponent, setSelectedFileComponent] = useState<React.ReactNode | null>(null);
  
  // Update state when initialPath changes
  useEffect(() => {
    if (initialPath) {
      setCurrentPath(initialPath);
      setHistory([initialPath]);
      setHistoryIndex(0);
      // Clear file content and component when initialPath changes
      setFileContent(null);
      setSelectedFileComponent(null);
      setSelectedItem(null);
    }
  }, [initialPath]);
  
  // Initialize window position when component mounts
  useEffect(() => {
    if (isOpen && typeof window !== 'undefined') {
      // Center the window in the viewport
      const x = (window.innerWidth - windowSize.width) / 2;
      const y = (window.innerHeight - windowSize.height) / 2;
      setWindowPosition({ x, y });
    }
  }, [isOpen, windowSize.width, windowSize.height]);

  /**
   * Handle item selection - updates selected item state and loads content
   */
  const handleItemClick = (item: FileSystemItem) => {
    setSelectedItem(item);
    if (item.type === 'file') {
      loadFileContent(item as File);
    } else {
      clearFileContent();
    }
  };

  /**
   * Handle double-click on items - for files, same as click, for folders navigate into them
   */
  const handleItemDoubleClick = (item: FileSystemItem) => {
    if (item.type === 'folder') {
      navigateTo(item.path);
    } else if (item.type === 'file') {
      loadFileContent(item as File);
    }
  };

  /**
   * Load file content or component based on file properties
   */
  const loadFileContent = (fileItem: File) => {
    if (fileItem.filePath) {
      // If there's a filePath, try to load the component
      setSelectedFileComponent(loadFileComponent(fileItem));
      setFileContent(null);
    } else if (fileItem.content) {
      // Fall back to content if no filePath
      setFileContent(fileItem.content);
      setSelectedFileComponent(null);
    } else {
      setFileContent('No content available');
      setSelectedFileComponent(null);
    }
  };

  /**
   * Clear file content and component state
   */
  const clearFileContent = () => {
    setFileContent(null);
    setSelectedFileComponent(null);
  };

  /**
   * Navigate to a specific path
   * Updates path, history, and clears file content
   */
  const navigateTo = (path: string) => {
    setCurrentPath(path);
    updateHistory(path);
    clearFileContent();
  };

  /**
   * Update navigation history when navigating to a new path
   */
  const updateHistory = (path: string) => {
    // Only keep history up to current index before adding new path
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(path);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  /**
   * Navigate back in history
   */
  const handleBack = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      setCurrentPath(history[historyIndex - 1]);
      clearFileContent();
    }
  };

  /**
   * Navigate forward in history
   */
  const handleForward = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
      setCurrentPath(history[historyIndex + 1]);
      clearFileContent();
    }
  };

  /**
   * Toggle window maximized state
   */
  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  // Don't render anything if the explorer is closed
  if (!isOpen) return null;

  return (
    <Rnd
      default={{
        x: windowPosition.x,
        y: windowPosition.y,
        width: windowSize.width,
        height: windowSize.height,
      }}
      minWidth={600}
      minHeight={400}
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
      <TitleBar 
        currentPath={currentPath} 
        onClose={onClose} 
        onMaximize={handleMaximize} 
      />
      
      <NavigationBar 
        currentPath={currentPath} 
        onBack={handleBack} 
        onForward={handleForward}
        canGoBack={historyIndex > 0}
        canGoForward={historyIndex < history.length - 1}
      />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar 
          folders={sidebarFolders}
          onItemClick={handleItemClick}
          onItemDoubleClick={handleItemDoubleClick}
          currentPath={currentPath}
        />
        
        <FileContent 
          currentPath={currentPath}
          selectedItem={selectedItem}
          fileContent={fileContent}
          selectedFileComponent={selectedFileComponent}
          onItemClick={handleItemClick}
          onItemDoubleClick={handleItemDoubleClick}
        />
      </div>
      
      <StatusBar selectedItem={selectedItem} />
    </Rnd>
  );
};

export default FileExplorer;
