"use client";

import Image from 'next/image';

interface FolderProps {
  name: string;
  path: string;
  onDoubleClick: (path: string) => void;
  isOpen?: boolean;
}

export default function Folder({ name, path, onDoubleClick, isOpen = false }: FolderProps) {
  return (
    <div 
      className="flex flex-col items-center cursor-pointer w-20 mb-4"
      onDoubleClick={() => onDoubleClick(path)}
    >
      <div className="relative w-10 h-10">
        <Image
          src={isOpen ? '/assets/Open Folder.ico' : '/assets/Closed folder.ico'}
          alt={`${name} folder`}
          width={40}
          height={40}
          className="object-contain"
          priority={true}
          unoptimized={true} // This is important for ICO files to work correctly
        />
      </div>
      <span className="mt-1 text-white text-sm text-center">{name}</span>
    </div>
  );
}
