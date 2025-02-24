import React from 'react';
import { Heart } from 'lucide-react';

export const EllaButton = () => {
  return (
    <button className="fixed top-4 right-4 z-50 px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg transition-all duration-300 hover:bg-white hover:shadow-pink-200/50 hover:-translate-y-1 group">
      <span className="relative flex items-center gap-2 text-gray-700">
        Ella
        <Heart className="w-4 h-4 text-pink-400 transition-transform duration-300 group-hover:scale-125" />
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
    </button>
  );
};