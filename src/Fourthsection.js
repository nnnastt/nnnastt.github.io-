import React from 'react';
import МГЛ from './pic/МГЛ.webp'

const FourthSection = () => {
  return (
    <section id="acspert" className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4"style={{ color: '#9F2042' }}>Экспертное
          заключение</h2>
          <p className="text-black mb-6">
          По вашей просьбе мы оформим экспертное заключение любой сертифицированной Российской геммологической лаборатории. 
          
          </p>
          <p className="text-black mb-6">
           
          При стоимости камня свыше 100 000 рублей, такое экспертное заключение мы оформляем за свой счёт.
          </p>
          <button className="px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition" style={{ backgroundColor: '#9F2042' }}>
            Узнать больше
          </button>
        </div>
        <div className="flex justify-center">
          <img
            src={МГЛ}
            alt="МГЛ"
            className="w-full max-w-sm md:max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default FourthSection;