// src/components/sidebar/Sidebar.jsx

import React from 'react';
import { Star, BookOpen, Trophy, Gift, Download, Award, Target } from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab }) => {
  return (
    <div className="w-64 bg-gradient-to-b from-blue-500 to-purple-600 text-white p-4 h-full">
      <div className="text-center mb-8">
        <BookOpen className="mx-auto mb-2" size={40} />
        <h1 className="text-xl font-bold">Book of Mormon Heroes</h1>
        <p className="text-sm opacity-80">Scripture Adventure!</p>
      </div>
      
      <nav className="space-y-3">
        {[
          { id: 'dashboard', label: 'Dashboard', icon: Star },
          { id: 'reading', label: 'Reading Tracker', icon: BookOpen },
          { id: 'challenge', label: 'Reading Challenge', icon: Target },
          { id: 'qa', label: 'Q&A Fun', icon: Gift },
          { id: 'ideas', label: 'Study Ideas', icon: Trophy },
          { id: 'printables', label: 'Printables', icon: Download },
          { id: 'stickers', label: 'Reward Stickers', icon: Award }
        ].map(item => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                activeTab === item.id ? 'bg-white/20' : 'hover:bg-white/10'
              }`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;