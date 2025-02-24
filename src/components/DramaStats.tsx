import React from 'react';

interface GenreData {
  genre: string;
  count: number;
  color: string;
}

export const DramaStats = () => {
  const genreData: GenreData[] = [
    { genre: 'Romance', count: 12, color: 'bg-[#FDE1D3] dark:bg-pink-500/30' },
    { genre: 'Terror', count: 9, color: 'bg-[#E5DEFF] dark:bg-purple-500/30' },
    { genre: 'Drama', count: 7, color: 'bg-pink-200 dark:bg-pink-600/30' },
    { genre: 'Comedia', count: 6, color: 'bg-gray-200 dark:bg-gray-600/30' },
    { genre: 'Acción', count: 3, color: 'bg-[#FFE5E5] dark:bg-red-500/30' }
  ];

  return (
    <section className="py-16 px-8 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-['Playfair_Display'] text-4xl text-center mb-4 text-gray-800 dark:text-gray-100">Mis Estadísticas</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">El amor no es algo que buscas, es algo que encuentras</p>
        
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-3xl shadow-lg p-8">
          <h3 className="font-['Playfair_Display'] text-2xl text-center mb-8 text-gray-800 dark:text-gray-100">Mis Géneros Favoritos</h3>
          <div className="space-y-4">
            {genreData.map((item, index) => (
              <div key={index} className="relative">
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-700 dark:text-gray-200">{item.genre}</span>
                  {/*<span className="text-gray-600 dark:text-gray-300">{item.count} doramas</span>*/} 
                </div>
                <div className="h-4 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${item.color} transition-all duration-1000 ease-out`}
                    style={{ 
                      width: `${(item.count / 12) * 100}%`,
                      animation: `slideRight 1.5s ease-out ${index * 0.2}s forwards`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};