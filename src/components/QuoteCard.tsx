import React from 'react';
import { Quote, Heart } from 'lucide-react';

interface QuoteCardProps {
  text: string;
  drama: string;
  className: string;
}

export const QuoteCard = ({ text, drama, className }: QuoteCardProps) => {
  return (
    <div className={`${className} group backdrop-blur-md p-8 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-2`}>
      <div className="flex items-center justify-between mb-6">
        <Quote className="w-10 h-10 text-pink-400 dark:text-pink-300" />
        <Heart className="w-6 h-6 text-pink-300 dark:text-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      <p className="text-xl text-gray-800 dark:text-gray-100 mb-6 font-['Playfair_Display'] leading-relaxed">
        {text}
      </p>
      
      <div className="flex items-center justify-between">
        <p className="text-gray-600 dark:text-gray-300 italic">- {drama}</p>
        <div className="h-1 w-12 bg-pink-200 dark:bg-pink-400/30 rounded-full transform origin-left scale-0 group-hover:scale-100 transition-transform duration-500"></div>
      </div>
    </div>
  );
};