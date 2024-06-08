import React from 'react';

const FourthSection = () => {
  return (
    <section id='set'>
      <div id="next-section" >
        <div className="relative h-[40vh] bg-white flex flex-col items-center justify-center text-center text-gray-900 px-6">
          <h1 className="text-4xl md:text-6xl font-bold">Сеты</h1>
          <p className="mt-4 text-lg md:text-2xl">
            Вы можете добавить в сет дополнительные роллы и получить на них скидку 10%
          </p>
        </div>
      </div>
    </section>
  );
};

export default FourthSection;