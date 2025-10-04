"use client";

/* lets have the icons for all here 
All icons are pages themselves and parts of portfolio
*/

import { useState } from "react";
import dynamic from 'next/dynamic';
import Folder from "../components/Folder/Folder";

// Dynamically import FileExplorer with no SSR to avoid hydration issues
const FileExplorer = dynamic(() => import("../components/FileExplorer/FileExplorer"), {
    ssr: false,
});

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
            <div className="flex flex-col">
                {/* About Me Folder */}
                <Folder 
                    name="About Me"
                    path="/AboutMe"
                    onDoubleClick={handleDoubleClick}
                    isOpen={fileExplorerState.isOpen && fileExplorerState.path === '/AboutMe'}
                />

                {/* Projects Folder */}
                <Folder 
                    name="Projects"
                    path="/Projects"
                    onDoubleClick={handleDoubleClick}
                    isOpen={fileExplorerState.isOpen && fileExplorerState.path === '/Projects'}
                />

                {/* Contact Folder */}
                <Folder 
                    name="Contact"
                    path="/Contact"
                    onDoubleClick={handleDoubleClick}
                    isOpen={fileExplorerState.isOpen && fileExplorerState.path === '/Contact'}
                />
            </div>

            <FileExplorer 
                isOpen={fileExplorerState.isOpen} 
                onClose={handleCloseFileExplorer}
                initialPath={fileExplorerState.path}
            />
        </div>
    );
}
    };
    };

    return (
        <div className="p-4">
            <div className="flex flex-col">
                {/* About Me Folder */}
                <Folder 
                    name="About Me"
                    path="/AboutMe"
                    onDoubleClick={handleDoubleClick}
                    isOpen={fileExplorerState.isOpen && fileExplorerState.path === '/AboutMe'}
                />

                {/* Projects Folder */}
                <Folder 
                    name="Projects"
                    path="/Projects"
                    onDoubleClick={handleDoubleClick}
                    isOpen={fileExplorerState.isOpen && fileExplorerState.path === '/Projects'}
                />

                {/* Contact Folder */}
                <Folder 
                    name="Contact"
                    path="/Contact"
                    onDoubleClick={handleDoubleClick}
                    isOpen={fileExplorerState.isOpen && fileExplorerState.path === '/Contact'}
                />
            </div>

            <FileExplorer 
                isOpen={fileExplorerState.isOpen} 
                onClose={handleCloseFileExplorer}
                initialPath={fileExplorerState.path}
            />
        </div>
    )
}