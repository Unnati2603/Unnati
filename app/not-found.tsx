"use client";

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-blue-900 text-white p-4">
      <div className="bg-blue-800 p-8 rounded-lg max-w-md w-full">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold">Windows XP Error</h1>
          <div className="flex">
            <span className="p-1 mx-1 cursor-pointer">-</span>
            <span className="p-1 mx-1 cursor-pointer">□</span>
            <span className="p-1 mx-1 cursor-pointer">×</span>
          </div>
        </div>
        
        <div className="flex items-center mb-4">
          <div className="mr-4 text-4xl">⚠️</div>
          <div>
            <h2 className="text-lg font-semibold">404 - Page Not Found</h2>
            <p>The page you are looking for might have been deleted or moved.</p>
          </div>
        </div>
        
        <div className="text-sm mb-6">
          <p>The requested page cannot be found. Please check the URL or navigate back to a known page.</p>
        </div>
        
        <div className="flex justify-end">
          <Link href="/Desktop">
            <button className="bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded">
              Return to Desktop
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
