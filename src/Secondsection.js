
import React from 'react';
import oneservice from './pic/gem3.svg';
import twoservice from './pic/n.svg';
import threeservice from './pic/no.svg';
import fourservice from './pic/noг.svg';
import fiveservice from './pic/noun.svg';
import sixservice from './pic/noun_.svg';


const SecondSection = () => {
  return (
    <section id="service" className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4"  style={{ color: '#9F2042' }}>Наши услуги</h2>
        <p className="text-black mb-12">
        Shine - среда для творчества с богатым опытом работы с ювелирными камнями и украшениями. 
        Вы, создаете свое украшение сами, мы лишь чуть-чуть помогаем. 
        Мы можем вдохнуть жизнь и вернуть былую привлекательность Вашим ювелирным украшениям!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Service 1 */}
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition-shadow" style={{borderColor: "#DB8A74"}}>
            <div className="flex justify-center items-center w-16 h-16 mx-auto bg-white rounded-full mb-4">
              <img
                src={oneservice}
                alt="oneservice"
                className="w-16 h-16"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Качество</h3>
            <p className="text-black">
            Мы бережно и качественно выполним ремонт Ваших ювелирных украшений
            </p>
          </div>

          {/* Service 2 */}
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition-shadow" style={{borderColor: "#DB8A74"}}>
            <div className="flex justify-center items-center w-16 h-16 mx-auto  rounded-full mb-4">
            <img
                src={twoservice}
                alt="twoservice"
                className="w-16 h-16"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">        Индивидуальная ручная работа </h3>
           
            <p className="text-black">
            Вместе, формулируем ювелирную идею, переносим мысли и пожелания на бумагу.
            </p>
          </div>

          {/* Service 3 */}
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition-shadow" style={{borderColor: "#DB8A74"}}>
            <div className="flex justify-center items-center w-16 h-16 mx-auto  rounded-full mb-4">
            <img
                src={threeservice}
                alt="threeservice"
                className="w-16 h-16"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Гарантия природности ювелирных камней
            </h3>
            <p className="text-black">
            Все ювелирные камни имеют: природное происхождение
            </p>
          </div>

          {/* Service 4 */}
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition-shadow"style={{borderColor: "#DB8A74"}}>
            <div className="flex justify-center items-center w-16 h-16 mx-auto  rounded-full mb-4">
            <img
                src={fourservice}
                alt="fourservice"
                className="w-16 h-16"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Ценность изделия</h3>
            <p className="text-black">
            Оценка качественных характеристик ювелирного украшения в целом или его составляющих.
            </p>
          </div>

          {/* Service 5 */}
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition-shadow" style={{borderColor: "#DB8A74"}}>
            <div className="flex justify-center items-center w-16 h-16 mx-auto  rounded-full mb-4">
            <img
                src={sixservice}
                alt="sixservice"
                className="w-16 h-16"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Создай свое</h3>
            <p className="text-black">
            За несколько дней, мы готовим рабочий эскиз, в котором объединяем Ваш художественные замысел, цветовое решение и каменное сопровождение.
            </p>
          </div>

          {/* Service 6 */}
          
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition-shadow" style={{borderColor: "#DB8A74"}}>
            <div className="flex justify-center items-center w-16 h-16 mx-auto  rounded-full mb-4">
            <img
                src={fiveservice}
                alt="fiveservice"
                className="w-20 h-20"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Украшение как новое</h3>
            <p className="text-black">
            Мы можем вдохнуть жизнь и вернуть былую привлекательность Вашим ювелирным украшениям!
            </p>
          </div>
        </div>

        <div className="mt-12">
        <a href='' className="inline-block">
          <button className="px-6 py-3 text-white  rounded-lg shadow-md  transition"    style={{ backgroundColor: '#9F2042' }}>
            Подробнее
          </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;