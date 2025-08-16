import { Trophy } from 'lucide-react';

const Certificate = ({ showCertificate, userName, onClose }) => {
  if (!showCertificate) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-xl max-w-md w-full mx-4 text-center">
        <Trophy className="mx-auto text-yellow-500 mb-4" size={48} />
        <h2 className="text-2xl font-bold mb-4">Congratulations! 🎉</h2>
        <p className="mb-4">You have completed the entire Book of Mormon!</p>
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-4 rounded-lg mb-4">
          <h3 className="font-bold">Certificate of Completion</h3>
          <p>Awarded to: {userName || 'Scripture Hero'}</p>
          <p>Date: {new Date().toLocaleDateString()}</p>
        </div>
        <button onClick={onClose} className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
          Close
        </button>
      </div>
    </div>
  );
};

export default Certificate;