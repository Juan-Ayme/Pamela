import React from 'react';
import { Music, Heart } from 'lucide-react';

export const MusicSection = () => {
  return (
    <section className="py-20 px-8 bg-gradient-to-r from-pink-50/50 to-purple-50/50 dark:from-gray-900/50 dark:to-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-['Playfair_Display'] text-4xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 dark:from-pink-300 dark:to-purple-300">
            Banda Sonora
          </h2>
          <p className="text-gray-600 dark:text-gray-300">Las melodías que acompañan los días </p>
        </div>

        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl shadow-lg p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-pink-200/20 to-purple-200/20 dark:from-pink-500/10 dark:to-purple-500/10 rounded-full blur-3xl transform translate-x-20 -translate-y-20 group-hover:translate-x-10 transition-transform duration-700"></div>
          
          <div className="relative">
            <div className="flex items-center justify-center gap-4 mb-8">
              <Music className="w-8 h-8 text-pink-400 dark:text-pink-300 animate-bounce" />
              <Heart className="w-6 h-6 text-pink-500 dark:text-pink-400 animate-pulse" />
              <Music className="w-8 h-8 text-pink-400 dark:text-pink-300 animate-bounce" style={{ animationDelay: '0.2s' }} />
            </div>

            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/videoseries?list=PLU8FV_-2vNjW-0ismjC7jcYZy4KEJ01Nz"
                title="K-Drama OST Playlist"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full"
              ></iframe>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-2xl bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm">
                <Music className="w-6 h-6 text-pink-400 dark:text-pink-300 mx-auto mb-2" />
                <h4 className="font-['Playfair_Display'] text-lg mb-1 text-gray-800 dark:text-gray-100">OSTs Románticos</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Las melodías más especiales</p>
              </div>
              <div className="text-center p-4 rounded-2xl bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm">
                <Heart className="w-6 h-6 text-pink-400 dark:text-pink-300 mx-auto mb-2" />
                <h4 className="font-['Playfair_Display'] text-lg mb-1 text-gray-800 dark:text-gray-100">Canciones de Amor</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">La música que nos hace soñar</p>
              </div>
              <div className="text-center p-4 rounded-2xl bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm">
                <Music className="w-6 h-6 text-pink-400 dark:text-pink-300 mx-auto mb-2" />
                <h4 className="font-['Playfair_Display'] text-lg mb-1 text-gray-800 dark:text-gray-100">Melodías Favoritas</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Playlist personal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};