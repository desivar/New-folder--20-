
import React from 'react';
import { Download } from 'lucide-react';
const Printables = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-blue-600">Printables & Activities 🖨️</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="font-bold mb-3">Reading Charts</h3>
          <p className="text-gray-600 mb-3">Beautiful charts to track your progress</p>
          <a 
            href="https://etsy.com/search?q=book+of+mormon+reading+chart" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 inline-flex items-center"
          >
            <Download className="mr-2" size={16} />
            View on Etsy
          </a>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="font-bold mb-3">Coloring Pages</h3>
          <p className="text-gray-600 mb-3">Scripture heroes and stories to color</p>
          <a 
            href="https://etsy.com/search?q=book+of+mormon+coloring+pages" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 inline-flex items-center"
          >
            <Download className="mr-2" size={16} />
            View on Etsy
          </a>
        </div>
      </div>
    </div>
  );


export default Printables;