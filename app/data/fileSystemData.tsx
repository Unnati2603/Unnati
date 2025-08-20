/**
 * File System Data Module
 * 
 * This module defines the structure and data for a virtual file system used in the portfolio.
 * It includes interfaces for folders and files, mock data for different sections of the portfolio,
 * and functions to retrieve file system items based on paths.
 */

"use client";

import { FaFileAlt } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiReact, SiNextdotjs } from 'react-icons/si';
import { MdEmail, MdContactPhone, MdContactMail } from 'react-icons/md';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
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
  createFile('Education.tsx', '/AboutMe/Education', '/pages/AboutMe/Education.tsx'),
  createFile('Hobbies.tsx', '/AboutMe/Hobbies', '/pages/AboutMe/Hobbies.tsx')
];

// Skills subfolder content
export const skillsFileSystem: FileSystemItem[] = [
  createFile('Frontend.tsx', '/AboutMe/Skills/Frontend', '/pages/AboutMe/Skills/Frontend.tsx'),
  createFile('Backend.tsx', '/AboutMe/Skills/Backend', '/pages/AboutMe/Skills/Backend.tsx'),
  createFile('Tools.tsx', '/AboutMe/Skills/Tools', '/pages/AboutMe/Skills/Tools.tsx')
];

// Projects file system structure
export const projectsFileSystem: FileSystemItem[] = [
  createFolder('Web Development', '/Projects/WebDev'),
  createFolder('Mobile Apps', '/Projects/MobileApps'),
  createFile('README.tsx', '/Projects/README', '/pages/Projects/README.tsx')
];

// Web Development subfolder content
export const webDevFileSystem: FileSystemItem[] = [
  createFile('Portfolio.tsx', '/Projects/WebDev/Portfolio', '/pages/Projects/WebDev/Portfolio.tsx', <SiReact size={20} color="#61DAFB" />),
  createFile('E-commerce.tsx', '/Projects/WebDev/E-commerce', '/pages/Projects/WebDev/E-commerce.tsx', <IoLogoJavascript size={20} color="#F7DF1E" />),
  createFile('Blog.tsx', '/Projects/WebDev/Blog', '/pages/Projects/WebDev/Blog.tsx', <SiNextdotjs size={20} color="#FFFFFF" />)
];

// Mobile Apps subfolder content
export const mobileAppsFileSystem: FileSystemItem[] = [
  createFile('Fitness-Tracker.tsx', '/Projects/MobileApps/Fitness-Tracker', '/pages/Projects/MobileApps/Fitness-Tracker.tsx', <SiReact size={20} color="#61DAFB" />),
  createFile('Weather-App.tsx', '/Projects/MobileApps/Weather-App', '/pages/Projects/MobileApps/Weather-App.tsx', <SiReact size={20} color="#61DAFB" />)
];

// Contact file system structure
export const contactFileSystem: FileSystemItem[] = [
  createFile('Email.tsx', '/Contact/Email', '/pages/Contact/Email.tsx', <MdEmail size={20} color="#FFFFFF" />),
  createFile('Phone.tsx', '/Contact/Phone', '/pages/Contact/Phone.tsx', <MdContactPhone size={20} color="#FFFFFF" />),
  createFolder('Social Media', '/Contact/SocialMedia'),
  createFile('ContactForm.tsx', '/Contact/ContactForm', '/pages/Contact/ContactForm.tsx', <MdContactMail size={20} color="#FFFFFF" />)
];

// Social Media subfolder content
export const socialMediaFileSystem: FileSystemItem[] = [
  createFile('GitHub.tsx', '/Contact/SocialMedia/GitHub', '/pages/Contact/SocialMedia/GitHub.tsx', <FaGithub size={20} color="#FFFFFF" />),
  createFile('LinkedIn.tsx', '/Contact/SocialMedia/LinkedIn', '/pages/Contact/SocialMedia/LinkedIn.tsx', <FaLinkedin size={20} color="#FFFFFF" />),
  createFile('Twitter.tsx', '/Contact/SocialMedia/Twitter', '/pages/Contact/SocialMedia/Twitter.tsx', <FaTwitter size={20} color="#FFFFFF" />)
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
    '/Projects/MobileApps': mobileAppsFileSystem,
    '/Contact': contactFileSystem,
    '/Contact/SocialMedia': socialMediaFileSystem
  };
  
  return fileSystemMap[path] || [];
};
