import React from 'react';

const Firstsection = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById('next-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-[90vh] bg-cover bg-center bg-[url(./pic/ss.webp)]" >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold">Доставка Японской кухни</h1>
        <p className="mt-4 text-lg md:text-2xl">
          Вкуснейшие роллы, суши и Wok с доставкой по Санкт-Петербургу в течение 60 минут!
        </p>
        <button onClick={handleScroll} className="absolute flex flex-col items-center  bottom-4 transform -translate-x-1/2 p-2 animate-bounce">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Firstsection;