"use client";

/* lets have the icons for all here 
All icons are pages themselves and parts of portfolio
*/

import { FaFolderClosed } from "react-icons/fa6";
import { useState } from "react";
import FileExplorer from "../components/FileExplorer/FileExplorer";

export default function Desktop(){
    const [fileExplorerState, setFileExplorerState] = useState({
        isOpen: false,
        path: '/'
    });
    
    const handleDoubleClick = (path: string) => {
        // If explorer is already open, close it first and then reopen with new path
        // This ensures the component fully unmounts and remounts with the new path
        if (fileExplorerState.isOpen) {
            setFileExplorerState({
                isOpen: false,
                path: fileExplorerState.path
            });
            
            // Use setTimeout to ensure state updates before reopening
            setTimeout(() => {
                setFileExplorerState({
                    isOpen: true,
                    path
                });
            }, 50);
        } else {
            setFileExplorerState({
                isOpen: true,
                path
            });
        }
    };

    const handleCloseFileExplorer = () => {
        setFileExplorerState({
            ...fileExplorerState,
            isOpen: false
        });
    };

    return (
        <div className="p-4">
            <div className="flex flex-wrap">
                {/* About Me Folder */}
                <div 
                    className="flex flex-col items-center cursor-pointer w-20 ml-4 mt-4" 
                    onDoubleClick={() => handleDoubleClick('/AboutMe')}
                >
                    <FaFolderClosed size={40} color="#FFD700" />
                    <span className="mt-1 text-white text-sm text-center">About Me</span>
                </div>

                {/* Projects Folder */}
                <div 
                    className="flex flex-col items-center cursor-pointer w-20 ml-4 mt-4" 
                    onDoubleClick={() => handleDoubleClick('/Projects')}
                >
                    <FaFolderClosed size={40} color="#FFD700" />
                    <span className="mt-1 text-white text-sm text-center">Projects</span>
                </div>

                {/* Contact Folder */}
                <div 
                    className="flex flex-col items-center cursor-pointer w-20 ml-4 mt-4" 
                    onDoubleClick={() => handleDoubleClick('/Contact')}
                >
                    <FaFolderClosed size={40} color="#FFD700" />
                    <span className="mt-1 text-white text-sm text-center">Contact</span>
                </div>
            </div>

            <FileExplorer 
                isOpen={fileExplorerState.isOpen} 
                onClose={handleCloseFileExplorer}
                initialPath={fileExplorerState.path}
            />
        </div>
    )
}