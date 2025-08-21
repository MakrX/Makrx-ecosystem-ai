'use client';

import React, { useState } from 'react';

export const dynamic = 'force-dynamic';

export default function TestReloadPage() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Hot Reload Test Page
          </h1>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              This page tests hot reload functionality. The counter should work without page refresh.
            </p>
            
            <div className="flex items-center justify-center gap-4 mb-6">
              <button
                onClick={() => setCount(count - 1)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
              >
                -
              </button>
              
              <span className="text-2xl font-bold text-makrx-blue dark:text-makrx-yellow">
                {count}
              </span>
              
              <button
                onClick={() => setCount(count + 1)}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
              >
                +
              </button>
            </div>
            
            <button
              onClick={() => setCount(0)}
              className="px-6 py-2 bg-makrx-blue text-white rounded-lg hover:bg-makrx-blue/90 transition-colors"
            >
              Reset
            </button>
          </div>
          
          <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
            Last updated: {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
  );
}
