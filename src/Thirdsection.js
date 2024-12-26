import React from 'react';
import ring from './pic/ring-box-1.png';

const Thirdsection = () => {
  return (
    <section id="work" className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <img
            src={ring}
            alt="ring"
            className="w-full max-w-sm md:max-w-md"
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4"style={{ color: '#9F2042' }}>Рабочий процесс</h2>
          <p className="text-black mb-6">
          Мы обожаем экспериментировать и делать, казалось бы, невозможное. 
          Самое главное для нас – это довольный клиент.
          </p>
          <p className="text-black mb-6">
          Наше вдохновение – природа, которая хранит в себе неописуемую красоту. 
          Мы используем только натуральное сырьё.
          </p>
          <button className="px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition"  style={{ backgroundColor: '#9F2042' }}>
            Узнать больше
          </button>
        </div>
      </div>
    </section>
  );
};
export default Thirdsection;