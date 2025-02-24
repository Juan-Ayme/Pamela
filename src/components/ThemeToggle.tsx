import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 left-4 z-50 p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg transition-all duration-300 hover:shadow-pink-200/50 dark:hover:shadow-purple-500/30 hover:-translate-y-1 group"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-gray-700 dark:text-gray-200" />
      ) : (
        <Sun className="w-5 h-5 text-gray-700 dark:text-gray-200" />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-purple-100 dark:from-purple-500/20 dark:to-pink-500/20 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
    </button>
  );
};