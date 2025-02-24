import React from 'react';
import { Heart, Star, Coffee, Music, Camera, Book ,Sparkles,Gem,Eclipse,Sun,PartyPopper,MapPin,Film  } from 'lucide-react';
import { Smile, Laugh, Shield, PersonStanding, Eye,AudioLines } from 'lucide-react';

export const EllaPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDE1D3] to-[#E5DEFF] dark:from-purple-900 dark:to-pink-900 py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-4 mb-6">
            <Heart className="w-12 h-12 text-pink-400 dark:text-pink-300 animate-pulse" />
            <h1 className="font-['Playfair_Display'] text-6xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 dark:from-pink-300 dark:to-purple-300">
              Celina
            </h1>
            <Heart className="w-12 h-12 text-pink-400 dark:text-pink-300 animate-pulse" style={{ animationDelay: '0.3s' }} />
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300">La persona que ilumina cada día de mi vida</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg transform hover:-translate-y-2 transition-all duration-500">
            <div className="flex items-center gap-4 mb-6">
              <Star className="w-8 h-8 text-pink-400 dark:text-pink-300" />
              <h2 className="font-['Playfair_Display'] text-2xl text-gray-800 dark:text-gray-200">Lo Que Amo de Ti</h2>
            </div>
            <ul className="space-y-4 text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-3">
                <Smile  className="w-5 h-5 text-pink-400 dark:text-pink-300" />
                Tu sonrisa ilumina mi mundo
              </li>
              <li className="flex items-center gap-3">
                <Eye className="w-5 h-5 text-pink-400 dark:text-pink-300" />
                Tu forma de ver la vida
              </li>
              <li className="flex items-center gap-3">
                <Heart  className="w-5 h-5 text-pink-400 dark:text-pink-300" />
                Tu dulzura y comprensión
              </li>
              <li className="flex items-center gap-3">
                <Laugh  className="w-5 h-5 text-pink-400 dark:text-pink-300" />
                Tu risa que alegra mis días
              </li>
              <li className="flex items-center gap-3">
                <Laugh className="w-5 h-5 text-pink-400 dark:text-pink-300" />
                Tu paciencia infinita
              </li>
              <li className="flex items-center gap-3">
                <Shield  className="w-5 h-5 text-pink-400 dark:text-pink-300" />
                Tu fortaleza en los momentos difíciles
              </li>
              <li className="flex items-center gap-3">
                <PersonStanding  className="w-5 h-5 text-pink-400 dark:text-pink-300" />
                Tu abrazo que me envuelve en paz
              </li>
              <li className="flex items-center gap-3">
                <Heart  className="w-5 h-5 text-pink-400 dark:text-pink-300" />
                Tu amor incondicional
              </li>
              <li className="flex items-center gap-3">
                <Eye  className="w-5 h-5 text-pink-400 dark:text-pink-300" />
                Tu mirada que penetra mi alma
              </li>
              <li className="flex items-center gap-3">
                <AudioLines  className="w-5 h-5 text-pink-400 dark:text-pink-300" />
                Tu voz que me da consuelo
              </li>
              <li className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-pink-400 dark:text-pink-300" />
                Tu capacidad de perdonar
              </li>
              <li className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-pink-400 dark:text-pink-300" />
                Tu manera de hacerme sentir especial
              </li>
            </ul>
          </div>

          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg transform hover:-translate-y-2 transition-all duration-500">
            <div className="flex items-center gap-4 mb-6">
              <Coffee className="w-8 h-8 text-pink-400 dark:text-pink-300" />
              <h2 className="font-['Playfair_Display'] text-2xl text-gray-800 dark:text-gray-200">Nuestros Momentos</h2>
            </div>
            <ul className="space-y-4 text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-3">
                <Music className="w-5 h-5 text-pink-400 dark:text-pink-300" />
                Escuchar nuestras músicas favoritas juntos
              </li>
              <li className="flex items-center gap-3">
                <Camera className="w-5 h-5 text-pink-400 dark:text-pink-300" />
                Nuestros momentos especiales
              </li>
              <li className="flex items-center gap-3">
                <Book className="w-5 h-5 text-pink-400 dark:text-pink-300" />
                Compartiendo historias
              </li>
              <li className="flex items-center gap-3">
                <Eclipse className="w-5 h-5 text-pink-400 dark:text-pink-300" />
                Los paseos bajo la luna
              </li>
              <li className="flex items-center gap-3">
                <Sun className="w-5 h-5 text-pink-400 dark:text-pink-300" />
                Las charlas y los momentos hasta el amanecer
              </li>
              <li className="flex items-center gap-3">
                <PartyPopper  className="w-5 h-5 text-pink-400 dark:text-pink-300" />
                Las locuras compartidas
              </li>
              <li className="flex items-center gap-3">
                <Camera  className="w-5 h-5 text-pink-400 dark:text-pink-300" />
                Cada instante vivido contigo
              </li>
              <li className="flex items-center gap-3">
                <Music className="w-5 h-5 text-pink-400 dark:text-pink-300" />
                Nuestros bailes improvisados
              </li>
              <li className="flex items-center gap-3">
                <MapPin  className="w-5 h-5 text-pink-400 dark:text-pink-300" />
                Nuestras aventuras inesperadas
              </li>
              <li className="flex items-center gap-3">
                <Film  className="w-5 h-5 text-pink-400 dark:text-pink-300" />
                Las tardes de películas y mantas
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-2xl font-['Playfair_Display'] text-gray-700 dark:text-gray-200 mb-4">
            "Contigo, cada día es una nueva aventura"
          </p>

          <div className="flex justify-center items-center gap-2">
            <Heart className="w-5 h-5 text-pink-400 dark:text-pink-300" />
            <span className="text-gray-600 dark:text-gray-300">Con todo mi amor</span>
            <Heart className="w-5 h-5 text-pink-400 dark:text-pink-300" />
          </div>
        </div>
      </div>
    </div>
  );
};