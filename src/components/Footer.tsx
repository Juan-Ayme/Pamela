import React from 'react';
import { Cat, Heart, Star, Coffee, Music, Tv } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-pink-50/30 dark:to-pink-900/30"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-8 pt-16 pb-8">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-4 mb-6">
            <Cat className="w-8 h-8 text-pink-400 dark:text-pink-300 animate-bounce" />
            <Heart className="w-8 h-8 text-pink-500 dark:text-pink-400" />
            <Cat className="w-8 h-8 text-pink-400 dark:text-pink-300 animate-bounce" style={{ animationDelay: '0.2s' }} />
          </div>
          <h3 className="font-['Playfair_Display'] text-3xl mb-4 text-gray-800 dark:text-gray-100">Nuestro Rincón </h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto">Un espacio dedicado al amor por los dramas, los gatos y los momentos especiales que compartimos juntos.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Star className="w-6 h-6 text-pink-400 dark:text-pink-300" />
            </div>
            <h4 className="font-['Playfair_Display'] text-lg mb-2 text-gray-800 dark:text-gray-100">Momentos Mágicos</h4>
            <p className="text-gray-600 dark:text-gray-300">Cada drama es una nueva aventura que vivimos juntos</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Coffee className="w-6 h-6 text-pink-400 dark:text-pink-300" />
            </div>
            <h4 className="font-['Playfair_Display'] text-lg mb-2 text-gray-800 dark:text-gray-100">Café y Dramas</h4>
            <p className="text-gray-600 dark:text-gray-300">Las mejores tardes son contigo y un buen drama</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Music className="w-6 h-6 text-pink-400 dark:text-pink-300" />
            </div>
            <h4 className="font-['Playfair_Display'] text-lg mb-2 text-gray-800 dark:text-gray-100">Melodías de Amor</h4>
            <p className="text-gray-600 dark:text-gray-300">Cada OST nos recuerda momentos especiales</p>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-pink-100 dark:border-pink-900">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Heart className="w-4 h-4 text-pink-400 dark:text-pink-300" />
            <span className="text-gray-600 dark:text-gray-300">Con todo mi amor, para ti</span>
            <Heart className="w-4 h-4 text-pink-400 dark:text-pink-300" />
          </div>
          <div className="flex justify-center items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <Tv className="w-4 h-4" />
            <span>Dramas & Amor</span>
            <span className="px-2">•</span>
            <a href="https://www.tiktok.com/@pamela..gy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
            <FaTiktok className="w-4 h-4" />
            <span>@pamela_Gy</span>
            </a>
            <span className="px-2">•</span>
            <span>{new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};