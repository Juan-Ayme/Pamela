import React from 'react';
import { Star, Heart, Play, Film, Tv } from 'lucide-react';

interface DramaCardProps {
  title: string;
  image: string;
  rating: number;
  genre: string;
  type: 'series' | 'movies';
}

export const DramaCard = ({ title, image, rating, genre, type }: DramaCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-500"></div>
      <img 
        src={image} 
        alt={title} 
        className="w-full h-80 object-cover transform transition-transform duration-700 group-hover:scale-110" 
      />
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        <div className="transform transition-all duration-500 translate-y-4 group-hover:translate-y-0">
          {/*
          <div className="flex items-center gap-2 mb-3">
            <Heart className="w-5 h-5 text-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-beat" />
          </div>
          */}
          {/** 
                     <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-400'} transition-all duration-300 hover:scale-110`}
                  fill={i < Math.floor(rating) ? 'currentColor' : 'none'}
                />
              ))}
            </div>
            <span className="text-sm">{rating}</span>
          </div>
          */}
          
          <p className="text-sm font-medium text-pink-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {genre}
          </p>
          <button className="mt-4 flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm transition-all duration-300 hover:bg-white/20 opacity-0 group-hover:opacity-100">
            <Play className="w-4 h-4" />
            <span className="text-sm">Ver Detalles</span>
          </button>
        </div>
      </div>

      {/* Type badge */}
      <div className="absolute top-4 left-4">
        <div className="flex items-center gap-2 px-3 py-1 bg-black/30 backdrop-blur-sm rounded-full">
          {type === 'series' ? (
            <Tv className="w-3 h-3 text-white" />
          ) : (
            <Film className="w-3 h-3 text-white" />
          )}
          <span className="text-xs text-white capitalize">{type === 'series' ? 'Serie' : 'Película'}</span>
        </div>
      </div>

      {/* Favorite badge */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full">
          <Heart className="w-3 h-3 text-pink-400" />
          <span className="text-xs text-white">Favorito</span>
        </div>
      </div>
    </div>
  );
};