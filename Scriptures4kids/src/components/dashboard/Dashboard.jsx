// src/components/dashboard/Dashboard.jsx

import React from 'react';
import { Star, BookOpen, Trophy, Award } from 'lucide-react';

const Dashboard = ({ getProgressPercentage, chaptersRead, totalChapters, completedBooks }) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Welcome, Scripture Hero! 🌟</h2>
        
        {/* Hero Image Section */}
        <div className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-2xl p-8 mb-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="w-full h-64 bg-white/20 rounded-lg flex items-center justify-center mb-4 border-2 border-dashed border-white/40">
              <div className="text-center text-white">
                <BookOpen size={48} className="mx-auto mb-2 opacity-60" />
                <p className="text-lg font-semibold">Hero Image Placeholder</p>
                <p className="text-sm opacity-80">Add your favorite Book of Mormon hero!</p>
                <p className="text-xs opacity-60 mt-2">(Nephi, Moroni, Captain Moroni, etc.)</p>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Today's Scripture Hero: Nephi</h3>
            <p className="text-white/90 text-sm">"I will go and do the things which the Lord hath commanded" - 1 Nephi 3:7</p>
          </div>
        </div>
        
        <div className="bg-yellow-100 border-2 border-yellow-300 rounded-lg p-4 max-w-2xl mx-auto">
          <div className="marquee overflow-hidden">
            <p className="animate-bounce text-lg text-yellow-800 font-semibold">
              "Search the scriptures; for in them ye think ye have eternal life" - John 5:39 ✨
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-green-400 to-blue-500 text-white p-6 rounded-xl shadow-lg">
          <Trophy className="mb-3" size={32} />
          <h3 className="text-xl font-bold">Reading Progress</h3>
          <p className="text-2xl font-bold">{getProgressPercentage()}%</p>
          <p className="opacity-90">Keep going, hero!</p>
        </div>

        <div className="bg-gradient-to-br from-purple-400 to-pink-500 text-white p-6 rounded-xl shadow-lg">
          <BookOpen className="mb-3" size={32} />
          <h3 className="text-xl font-bold">Chapters Read</h3>
          <p className="text-2xl font-bold">{chaptersRead}</p>
          <p className="opacity-90">of {totalChapters} chapters</p>
        </div>

        <div className="bg-gradient-to-br from-orange-400 to-red-500 text-white p-6 rounded-xl shadow-lg">
          <Award className="mb-3" size={32} />
          <h3 className="text-xl font-bold">Books Completed</h3>
          <p className="text-2xl font-bold">{completedBooks}</p>
          <p className="opacity-90">of 16 books</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <Star className="mr-2 text-yellow-500" />
          Today's Scripture Prompt
        </h3>
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-blue-800 font-medium">
            "And it came to pass that I, Nephi, said unto my father: I will go and do the things which the Lord hath commanded" - 1 Nephi 3:7
          </p>
          <p className="mt-2 text-gray-600">
            Think about: How can you be like Nephi today? What is something hard that you can do with faith?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;