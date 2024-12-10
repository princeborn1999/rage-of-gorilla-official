
import React from 'react';

function MangaChapter() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 text-gray-800 py-12 px-6">
    <div className="container mx-auto text-center">
      {/* Page Title */}
      <h2 className="text-3xl font-semibold text-gray-900 mb-8">Manga Chapters</h2>

      {/* Chapter List */}
      <div className="space-y-4">
        <a
          href="#chapter-1"
          target="_blank"
          className="text-xl text-amber-500 hover:text-amber-700 transition-colors"
        >
          Chapter 1: The Awakening
        </a>
        <a
          href="#chapter-2"
          target="_blank"
          className="text-xl text-amber-500 hover:text-amber-700 transition-colors"
        >
          Chapter 2: The Journey Begins
        </a>
        <a
          href="#chapter-3"
          target="_blank"
          className="text-xl text-amber-500 hover:text-amber-700 transition-colors"
        >
          Chapter 3: The First Battle
        </a>
        {/* Add more chapters as needed */}
      </div>
    </div>
  </div>
  )
}
export default MangaChapter;
