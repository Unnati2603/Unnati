"use client";

/* lets have the icons for all here 
All icons are pages themselves and parts of portfolio
*/

import { FaFolderClosed } from "react-icons/fa6";
import { useState } from "react";
import FileExplorer from "../components/FileExplorer/FileExplorer";

export default function Desktop(){
    const [isFileExplorerOpen, setIsFileExplorerOpen] = useState(false);
    
    const handleDoubleClick = () => {
        setIsFileExplorerOpen(true);
    };

    const handleCloseFileExplorer = () => {
        setIsFileExplorerOpen(false);
    };

    return (
        <div className="p-4">
            <div 
                className="flex flex-col items-center cursor-pointer w-20 ml-4 mt-4" 
                onDoubleClick={handleDoubleClick}
                onClick={() => {}}
            >
                <FaFolderClosed size={40} color="#FFD700" />
                <span className="mt-1 text-white text-sm text-center">My Files</span>
            </div>

            <FileExplorer 
                isOpen={isFileExplorerOpen} 
                onClose={handleCloseFileExplorer} 
            />
        </div>
    )
}