// src/components/reading-tracker/ReadingTracker.jsx

import React from 'react';
import { CheckCircle } from 'lucide-react';

const ReadingTracker = ({ books, readingProgress, completedBooks, markChapterComplete, getProgressPercentage, generateCertificate }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-blue-600">Reading Tracker 📖</h2>
      <div className="grid gap-4">
        {books.map((book, bookIndex) => (
          <div key={bookIndex} className="bg-white rounded-xl shadow-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-lg flex items-center">
                {completedBooks.has(bookIndex) && <CheckCircle className="text-green-500 mr-2" size={20} />}
                {book.name}
              </h3>
              <span className="text-sm text-gray-500">{book.chapters} chapters</span>
            </div>
            <div className="grid grid-cols-6 gap-2">
              {Array.from({length: book.chapters}, (_, i) => {
                const chapterNum = i + 1;
                const isCompleted = readingProgress[`${bookIndex}-${chapterNum}`];
                return (
                  <button
                    key={chapterNum}
                    onClick={() => markChapterComplete(bookIndex, chapterNum)}
                    className={`p-2 rounded-lg text-sm font-medium transition-colors ${
                      isCompleted 
                        ? 'bg-green-500 text-white' 
                        : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                  >
                    {chapterNum}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      
      {getProgressPercentage() === 100 && (
        <button
          onClick={generateCertificate}
          className="w-full bg-gold bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-4 rounded-xl font-bold text-lg"
        >
          🎉 Generate My Completion Certificate! 🎉
        </button>
      )}
    </div>
  );
};

export default ReadingTracker;