/**
 * Component Loader Module
 * 
 * This module handles the dynamic loading of React components based on file paths.
 * It uses lazy loading to improve performance by only loading components when needed.
 */

"use client";

import { lazy, Suspense } from 'react';
import { File } from './fileSystemData';

// Component map for lazy loading - only including components that actually exist
const componentMap: Record<string, React.ComponentType> = {
  'pages/AboutMe/Bio.tsx': lazy(() => import('../pages/AboutMe/Bio')),
  'pages/AboutMe/Education.tsx': lazy(() => import('../pages/AboutMe/Education')),
  'pages/AboutMe/Skills/Frontend.tsx': lazy(() => import('../pages/AboutMe/Skills/Frontend')),
  'pages/Projects/WebDev/Portfolio.tsx': lazy(() => import('../pages/Projects/WebDev/Portfolio')),
  'pages/Contact/Email.tsx': lazy(() => import('../pages/Contact/Email')),
  'pages/Contact/SocialMedia/GitHub.tsx': lazy(() => import('../pages/Contact/SocialMedia/GitHub')),
};

/**
 * Normalizes a file path by removing leading slash if present
 */
const normalizePath = (path: string): string => {
  return path.startsWith('/') ? path.substring(1) : path;
};

/**
 * Loads a React component based on the file's path
 */
export const loadFileComponent = (file: File) => {
  if (!file.filePath) {
    return null;
  }

  const normalizedPath = normalizePath(file.filePath);
  const Component = componentMap[normalizedPath];
  
  if (!Component) {
    console.error(`Component not found for path: ${normalizedPath}`);
    return <div className="p-4 text-white">Component not found: {file.name}</div>;
  }

  return (
    <div className="p-4 text-white">
      <Suspense fallback={<div>Loading {file.name}...</div>}>
        <Component />
      </Suspense>
    </div>
  );
};
