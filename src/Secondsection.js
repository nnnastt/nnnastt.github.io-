import React from 'react';

const SecondSection = () => {
  return (
    <section id='roll'>
      <div id="next-section" >
        <div className="relative h-[40vh] bg-white flex flex-col items-center justify-center text-center text-gray-900 px-6">
          <h1 className="text-4xl md:text-6xl font-bold">Роллы</h1>
          <p className="mt-4 text-lg md:text-2xl">
            Только свежие продукты и оригинальные рецепты от японских поваров
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;