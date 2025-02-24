import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { ThemeProvider } from './context/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';
import { HomePage } from './pages/HomePage';
import { EllaPage } from './pages/EllaPage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ThemeToggle />
        <Link to="/ella" className="fixed top-4 right-4 z-50 px-6 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg transition-all duration-300 hover:bg-white dark:hover:bg-gray-700 hover:shadow-pink-200/50 dark:hover:shadow-purple-500/30 hover:-translate-y-1 group">
          <span className="relative flex items-center gap-2 text-gray-700 dark:text-gray-200">
            Ella
            <Heart className="w-4 h-4 text-pink-400 dark:text-pink-300 transition-transform duration-300 group-hover:scale-125" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-purple-100 dark:from-purple-500/20 dark:to-pink-500/20 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
        </Link>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ella" element={<EllaPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;