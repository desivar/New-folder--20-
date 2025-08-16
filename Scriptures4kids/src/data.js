export const books = [
  { name: "Introduction & Witnesses", chapters: 1 },
  { name: "1 Nephi", chapters: 22 },
  { name: "2 Nephi", chapters: 33 },
  { name: "Jacob", chapters: 7 },
  { name: "Enos", chapters: 1 },
  { name: "Jarom", chapters: 1 },
  { name: "Omni", chapters: 1 },
  { name: "Words of Mormon", chapters: 1 },
  { name: "Mosiah", chapters: 29 },
  { name: "Alma", chapters: 63 },
  { name: "Helaman", chapters: 16 },
  { name: "3 Nephi", chapters: 30 },
  { name: "4 Nephi", chapters: 1 },
  { name: "Mormon", chapters: 9 },
  { name: "Ether", chapters: 15 },
  { name: "Moroni", chapters: 10 }
];

export const challenges = {
  '3months': { name: '3 Months', days: 90, chaptersPerDay: Math.ceil(books.reduce((sum, book) => sum + book.chapters, 0) / 90) },
  '6months': { name: '6 Months', days: 180, chaptersPerDay: Math.ceil(books.reduce((sum, book) => sum + book.chapters, 0) / 180) },
  '9months': { name: '9 Months', days: 270, chaptersPerDay: Math.ceil(books.reduce((sum, book) => sum + book.chapters, 0) / 270) },
  '1year': { name: '1 Year', days: 365, chaptersPerDay: Math.ceil(books.reduce((sum, book) => sum + book.chapters, 0) / 365) }
};

export const studyIdeas = [
  "🎨 Draw your favorite scripture hero",
  "📝 Write about what you learned today",
  "🎭 Act out a scripture story with family",
  "🎵 Sing a song about the scriptures",
  "🗺️ Make a map of the Book of Mormon lands",
  "📚 Create a scripture journal",
  "🌟 Share a favorite verse with a friend",
  "🏠 Build Nephi's ship with blocks or Legos"
];

export const qaQuestions = [
  { q: "Who was the first prophet in the Book of Mormon?", a: "Lehi was the first prophet we read about in the Book of Mormon!" },
  { q: "What did Nephi build to cross the ocean?", a: "Nephi built a ship with help from the Lord!" },
  { q: "Who is Jesus Christ in the Book of Mormon?", a: "Jesus Christ is our Savior who visited the people in America!" },
  { q: "What does it mean to have faith?", a: "Faith means believing and trusting in Jesus Christ, even when we can't see Him!" }
];