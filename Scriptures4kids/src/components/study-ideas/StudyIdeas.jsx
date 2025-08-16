
import React from 'react';
import{studyIdeas} from '../../data.js'; // Import the data
const StudyIdeas = () => (

    <div className="space-y-6">

      <h2 className="text-2xl font-bold text-blue-600">Fun Study Ideas! 💡</h2>

      <div className="grid md:grid-cols-2 gap-4">

        {studyIdeas.map((idea, i) => (

          <div key={i} className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-shadow">

            <p className="text-gray-700">{idea}</p>

          </div>

        ))}

      </div>

    </div>

  );

export default StudyIdeas;
