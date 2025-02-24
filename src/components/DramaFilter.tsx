import React from 'react';
import { Film, Tv } from 'lucide-react';

interface DramaFilterProps {
  activeFilter: 'all' | 'series' | 'movies';
  onFilterChange: (filter: 'all' | 'series' | 'movies') => void;
}

export const DramaFilter = ({ activeFilter, onFilterChange }: DramaFilterProps) => {
  return (
    <div className="flex justify-center gap-4 mb-12">
      <button
        onClick={() => onFilterChange('all')}
        className={`px-6 py-2 rounded-full transition-all duration-300 flex items-center gap-2
          ${activeFilter === 'all' 
            ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg' 
            : 'bg-white/50 hover:bg-white/70 text-gray-700'}`}
      >
        Todos
      </button>
      <button
        onClick={() => onFilterChange('series')}
        className={`px-6 py-2 rounded-full transition-all duration-300 flex items-center gap-2
          ${activeFilter === 'series' 
            ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg' 
            : 'bg-white/50 hover:bg-white/70 text-gray-700'}`}
      >
        <Tv className="w-4 h-4" />
        Series
      </button>
      <button
        onClick={() => onFilterChange('movies')}
        className={`px-6 py-2 rounded-full transition-all duration-300 flex items-center gap-2
          ${activeFilter === 'movies' 
            ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg' 
            : 'bg-white/50 hover:bg-white/70 text-gray-700'}`}
      >
        <Film className="w-4 h-4" />
        Películas
      </button>
    </div>
  );
};