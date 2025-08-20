/**
 * File System Data Module
 * 
 * This module defines the structure and data for a virtual file system used in the portfolio.
 * It includes interfaces for folders and files, mock data for different sections of the portfolio,
 * and functions to retrieve file system items based on paths.
 */

"use client";

import { FaFileAlt } from 'react-icons/fa';

import { SiReact } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import { FaGithub} from 'react-icons/fa';
import React from 'react';
import Image from 'next/image';

// Custom folder icon component
const FolderIcon = ({ isOpen = false }: { isOpen?: boolean }) => (
  <Image
    src={isOpen ? '/assets/Open Folder.ico' : '/assets/Closed folder.ico'}
    alt={isOpen ? 'Open folder' : 'Closed folder'}
    width={20}
    height={20}
    className="object-contain"
    unoptimized={true}
  />
);

// Core interfaces for the file system
export interface Folder {
  name: string;
  path: string;
  icon: React.ReactNode;
  type: 'folder';
  isOpen?: boolean;
}

export interface File {
  name: string;
  path: string;
  icon: React.ReactNode;
  type: 'file';
  content?: string;
  filePath?: string;  // Path to the actual file in the project
}

export type FileSystemItem = Folder | File;

// Factory functions to create file system items
const createFolder = (name: string, path: string, isOpen: boolean = false): Folder => ({
  name,
  path,
  icon: <FolderIcon isOpen={isOpen} />,
  type: 'folder',
  isOpen
});

const createFile = (name: string, path: string, filePath?: string, icon?: React.ReactNode): File => ({
  name,
  path,
  icon: icon || <FaFileAlt size={20} color="#FFFFFF" />,
  type: 'file',
  filePath
});

// AboutMe file system structure
export const aboutMeFileSystem: FileSystemItem[] = [
  createFile('Bio.tsx', '/AboutMe/Bio', '/pages/AboutMe/Bio.tsx'),
  createFolder('Skills', '/AboutMe/Skills'),
  createFile('Education.tsx', '/AboutMe/Education', '/pages/AboutMe/Education.tsx')
];

// Skills subfolder content
export const skillsFileSystem: FileSystemItem[] = [
  createFile('Frontend.tsx', '/AboutMe/Skills/Frontend', '/pages/AboutMe/Skills/Frontend.tsx')
];

// Projects file system structure
export const projectsFileSystem: FileSystemItem[] = [
  createFolder('Web Development', '/Projects/WebDev')
];

// Web Development subfolder content
export const webDevFileSystem: FileSystemItem[] = [
  createFile('Portfolio.tsx', '/Projects/WebDev/Portfolio', '/pages/Projects/WebDev/Portfolio.tsx', <SiReact size={20} color="#61DAFB" />)
];



// Contact file system structure
export const contactFileSystem: FileSystemItem[] = [
  createFile('Email.tsx', '/Contact/Email', '/pages/Contact/Email.tsx', <MdEmail size={20} color="#FFFFFF" />),
 
  createFolder('Social Media', '/Contact/SocialMedia')
];

// Social Media subfolder content
export const socialMediaFileSystem: FileSystemItem[] = [
  createFile('GitHub.tsx', '/Contact/SocialMedia/GitHub', '/pages/Contact/SocialMedia/GitHub.tsx', <FaGithub size={20} color="#FFFFFF" />)
];

// Root file system structure
export const rootFileSystem: FileSystemItem[] = [
  createFolder('About Me', '/AboutMe'),
  createFolder('Projects', '/Projects'),
  createFolder('Contact', '/Contact'),
  {
    name: 'README.txt',
    path: '/readme',
    icon: <FaFileAlt size={20} color="#FFFFFF" />,
    type: 'file',
    content: 'Welcome to my portfolio! Double-click on folders to explore more about me, my projects, and how to contact me.'
  }
];

// Define the folders for the sidebar
export const sidebarFolders: Folder[] = [
  createFolder('About Me', '/AboutMe'),
  createFolder('Projects', '/Projects'),
  createFolder('Contact', '/Contact')
];

// Function to get file system items based on path
export const getFileSystemItems = (path: string): FileSystemItem[] => {
  // Map paths to their corresponding file systems
  const fileSystemMap: Record<string, FileSystemItem[]> = {
    '/': rootFileSystem,
    '/AboutMe': aboutMeFileSystem,
    '/AboutMe/Skills': skillsFileSystem,
    '/Projects': projectsFileSystem,
    '/Projects/WebDev': webDevFileSystem,
    '/Contact': contactFileSystem,
    '/Contact/SocialMedia': socialMediaFileSystem
  };
  
  return fileSystemMap[path] || [];
};
