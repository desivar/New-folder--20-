
import React from 'react';
import { Award } from 'lucide-react';
const Stickers = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-blue-600">Reward Stickers! 🌟</h2>
      <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
        {['⭐', '🏆', '📖', '💎', '👑', '🎉', '🌈', '⚡', '🔥', '💯', '🎯', '🚀'].map((sticker, i) => (
          <div key={i} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow cursor-pointer">
            <div className="text-4xl mb-2">{sticker}</div>
            <p className="text-xs text-gray-600">Earned!</p>
          </div>
        ))}
      </div>
    </div>
);

export default Stickers;