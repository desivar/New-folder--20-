// src/components/challenges/Challenges.jsx

import React from 'react';
import { Users } from 'lucide-react'; // 'Users' is the correct icon name

const Challenges = ({ challenges, selectedChallenge, setSelectedChallenge, userName, setUserName }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-blue-600">Reading Challenge 🎯</h2>
      
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold mb-4">Choose Your Challenge!</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {Object.entries(challenges).map(([key, challenge]) => (
            <button
              key={key}
              onClick={() => setSelectedChallenge(key)}
              className={`p-4 rounded-lg border-2 transition-colors ${
                selectedChallenge === key
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              <h4 className="font-bold">{challenge.name}</h4>
              <p className="text-sm text-gray-600">
                ~{challenge.chaptersPerDay} chapter{challenge.chaptersPerDay > 1 ? 's' : ''} per day
              </p>
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold mb-4">Invite a Friend! 👫</h3>
        <div className="bg-purple-50 p-4 rounded-lg">
          <p className="mb-3">Challenge your friends and family to read with you!</p>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter your name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="flex-1 p-2 border rounded"
            />
            <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
              Send Invite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenges;