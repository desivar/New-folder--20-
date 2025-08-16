//src/components/qa/QASection.jsx
import React, { useState } from 'react';
import { qaQuestions } from '../../data.js'; // Import the data

const QASection = () => {
  const [currentQ, setCurrentQ] = useState(0);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-blue-600">Q&A Fun Time! 🤔</h2>
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="text-center mb-4">
          <h3 className="text-lg font-bold mb-2">Question {currentQ + 1}</h3>
          <p className="text-gray-700 mb-4">{qaQuestions[currentQ].q}</p>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-green-800">{qaQuestions[currentQ].a}</p>
          </div>
        </div>
        <div className="flex justify-center space-x-2 mt-4">
          {qaQuestions.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentQ(i)}
              className={`w-8 h-8 rounded-full ${
                i === currentQ ? 'bg-blue-500 text-white' : 'bg-gray-300'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QASection;
