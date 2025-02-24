import React from 'react';
import { Cat, Heart, Stars, Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://www.ecestaticos.com/image/clipping/a81438cf6bc35bfbc79952aabdf3cb48/los-gatos-naranjas-son-especiales-asi-lo-confirma-la-ciencia.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-pink-50/50 via-transparent to-transparent"></div>
        {/* Animated sparkles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <Sparkles
              key={i}
              className={`absolute w-6 h-6 text-pink-300 animate-pulse`}
              style={{                                   
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="relative z-10 text-center px-8 py-16 max-w-4xl mx-auto">
        <div className="flex justify-center items-center gap-4 mb-6">
          <Cat className="w-12 h-12 text-pink-400 animate-bounce" />
          <Stars className="w-10 h-10 text-pink-300 animate-spin-slow" />
          <Cat className="w-12 h-12 text-pink-400 animate-bounce" style={{ animationDelay: '0.2s' }} />
        </div>
        
        <h1 className="font-['Playfair_Display'] text-6xl md:text-7xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 animate-gradient">
          Aurora
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Un espacio dedicado a los doramas, momentos especiales y todas las cosas bonitas que le hacen soñar.
        </p>
        
        <div className="flex justify-center items-center gap-3">
          <Heart className="w-8 h-8 text-pink-400 animate-pulse" />
          <Heart className="w-6 h-6 text-pink-500 animate-pulse" style={{ animationDelay: '0.2s' }} />
          <Heart className="w-8 h-8 text-pink-400 animate-pulse" style={{ animationDelay: '0.4s' }} />
        </div>

        <div className="mt-12 flex justify-center">
          <button className="group relative px-8 py-3 bg-white/30 backdrop-blur-sm rounded-full overflow-hidden transition-all duration-500 hover:bg-white/40">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-purple-200 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            <span className="relative flex items-center gap-2 text-gray-700">
              Explora su Mundo
              <Heart className="w-4 h-4 text-pink-400 group-hover:animate-beat" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};