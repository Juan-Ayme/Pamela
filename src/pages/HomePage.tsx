import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { DramaCard } from '../components/DramaCard';
import { DramaFilter } from '../components/DramaFilter';
import { QuoteCard } from '../components/QuoteCard';
import { DramaStats } from '../components/DramaStats';
import { MusicSection } from '../components/MusicSection';
import { Footer } from '../components/Footer';

export const HomePage = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'series' | 'movies'>('all');

  const dramaList = [
    {
      title: "Propuesta laboral",
      image: "https://f.rpp-noticias.io/2023/04/03/1410358aaaabeekq1i8ybeawedmtavygvvgsldpfjna5t-cswie020h25lndgptmq587axtvuak5vwgcixu-kljhsajzu8e-1h1dhhjr1srwfzechsi8zjbxbxgcnd6x7zfkak2peayquxjmgjpeg.jpeg",
      rating: 4.9,
      genre: "Comedia/Romance",
      type: "series"
    },
    {
      title: "Una chica del siglo XX",
      image: "https://m.media-amazon.com/images/M/MV5BYmJkM2IzMmYtZTQ2Zi00Mzg1LWFkMGUtMzQ1ODcxMDE4MmNhXkEyXkFqcGc@._V1_.jpg",
      rating: 4.8,
      genre: "Romance/Drama",
      type: "movies"
    },
    {
      title: "Amor en la puerta de al lado",
      image: "https://television.com.ar/wp-content/uploads/2024/08/amorenlapuertadeallado.jpg",
      rating: 4.7,
      genre: "Comedia/Romance",
      type: "series"
    },
    {
      title: "Ruega por nosotros",
      image: "https://play-lh.googleusercontent.com/sPh5dSRgOyA6M-M0tkRn8CnjhkqgDSqki0lY80oxOlibfFagqqiRP6tyg_N9UT2gGNahfwtvnVN9FbqDTA=w480-h960-rw",
      rating: 4.6,
      genre: "Terror/Misterio",
      type: "movies"
    },
    {
      title: "Cuando acecha la maldad",
      image: "https://m.media-amazon.com/images/S/pv-target-images/55099394ea622f0c7d3c765b2237b3fb0b1f7a9e6a5fb1fff084552eed02d4cd.jpg",
      rating: 4.5,
      genre: "Terror/Suspenso",
      type: "movies"
    }
  ];

  const filteredDramas = dramaList.filter(drama => 
    activeFilter === 'all' ? true : drama.type === activeFilter
  );

  const quotes = [
    {
      text: "¿Sabes qué tienen en común mi amor por ti y esta tarjeta de crédito? Ambos no tienen límite. No hay límite en absoluto.",
      drama: "Propuesta laboral",
      className: "bg-pink-50/30 dark:bg-gray-800/40"
    },
    {
      text: "Espera un poco más, iré a verte pronto ",
      drama: "Una chica del siglo XX",
      className: "bg-purple-50/30 dark:bg-gray-800/40"
    },
    {
      text: "No importará si son 2 o 20 años. Mis sentimientos nunca cambiarán.",
      drama: "Propuesta laboral",
      className: "bg-blue-50/30 dark:bg-gray-800/40"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDE1D3] to-[#E5DEFF] dark:from-gray-900 dark:to-gray-800">
      <Hero />

      {/* Dramas Section */}
      <section className="py-20 px-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-['Playfair_Display'] text-4xl text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 dark:from-pink-300 dark:to-purple-300">
            Dramas Favoritos
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Cada historia es un nuevo capítulo en nuestro propio mundo
          </p>
          
          <DramaFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredDramas.map((drama, index) => (
              <DramaCard key={index} {...drama} />
            ))}
          </div>
        </div>
      </section>

      <DramaStats />

      {/* Quotes Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-['Playfair_Display'] text-4xl text-center mb-4 text-gray-800 dark:text-gray-100">
            Citas que Tocaron el Corazón
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
            Palabras que nos hicieron suspirar y soñar con nuestro propio drama de amor
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quotes.map((quote, index) => (
              <QuoteCard key={index} {...quote} />
            ))}
          </div>
        </div>
      </section>

      <MusicSection />

      <Footer />
    </div>
  );
};