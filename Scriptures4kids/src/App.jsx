import React, { useState, useEffect } from 'react';
import { Star, BookOpen, Trophy, Gift, Users, Download, Calendar, CheckCircle, Award, Target } from 'lucide-react';
import { books, challenges, studyIdeas, qaQuestions } from './data';


import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./components/dashboard/Dashboard";
import ReadingTracker from './components/reading-tracker/ReadingTracker';
import Challenge from './components/challenges/Challenges';
import QASection from './components/qa/QASection';
import StudyIdeas from './components/study-ideas/StudyIdeas';
import Printables from './components/printables/Printables';
import Stickers from './components/stickers/Stickers';
import Certificate from './components/common/Certificate';

const totalChapters = books.reduce((sum, book) => sum + book.chapters, 0);

const App = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [readingProgress, setReadingProgress] = useState({});
  const [selectedChallenge, setSelectedChallenge] = useState('3months');
  const [userName, setUserName] = useState('');
  const [showCertificate, setShowCertificate] = useState(false);
  const [completedBooks, setCompletedBooks] = useState(new Set());

  const getProgressPercentage = () => {
    const completed = Object.values(readingProgress).filter(Boolean).length;
    return Math.round((completed / totalChapters) * 100);
  };

  const markChapterComplete = (bookIndex, chapter) => {
    const key = `${bookIndex}-${chapter}`;
    const newReadingProgress = { ...readingProgress, [key]: !readingProgress[key] };
    setReadingProgress(newReadingProgress);

    const bookChapters = books[bookIndex].chapters;
    const isBookCompleted = Array.from({ length: bookChapters }, (_, i) =>
      newReadingProgress[`${bookIndex}-${i + 1}`]
    ).every(Boolean);

    if (isBookCompleted) {
      setCompletedBooks(prev => new Set([...prev, bookIndex]));
    }
  };

  const generateCertificate = () => {
    if (getProgressPercentage() >= 80) { // Assuming 80% is the passing grade
      setShowCertificate(true);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 p-6 overflow-y-auto">
        {activeTab === 'dashboard' && <Dashboard getProgressPercentage={getProgressPercentage} chaptersRead={Object.values(readingProgress).filter(Boolean).length} totalChapters={totalChapters} completedBooks={completedBooks.size} />}
        {activeTab === 'reading' && <ReadingTracker books={books} readingProgress={readingProgress} completedBooks={completedBooks} markChapterComplete={markChapterComplete} getProgressPercentage={getProgressPercentage} generateCertificate={generateCertificate} />}
        {activeTab === 'challenge' && <Challenge challenges={challenges} selectedChallenge={selectedChallenge} setSelectedChallenge={setSelectedChallenge} userName={userName} setUserName={setUserName} />}
        {activeTab === 'qa' && <QASection qaQuestions={qaQuestions} />}
        {activeTab === 'ideas' && <StudyIdeas studyIdeas={studyIdeas} />}
        {activeTab === 'printables' && <Printables />}
        {activeTab === 'stickers' && <Stickers />}
        <Certificate showCertificate={showCertificate} userName={userName} onClose={() => setShowCertificate(false)} />
      </main>
    </div>
  );
};

export default App;