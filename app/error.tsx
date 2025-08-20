"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Error occurred:", error);
  }, [error]);

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
          <div className="mr-4 text-4xl">❌</div>
          <div>
            <h2 className="text-lg font-semibold">Something went wrong!</h2>
            <p>An unexpected error has occurred.</p>
          </div>
        </div>
        
        <div className="text-sm mb-6">
          <p>The system has encountered an unexpected error. You can try to recover by clicking the buttons below.</p>
          {error.digest && (
            <p className="mt-2 text-gray-400">Error digest: {error.digest}</p>
          )}
        </div>
        
        <div className="flex justify-between">
          <button
            onClick={reset}
            className="bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded"
          >
            Try again
          </button>
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
