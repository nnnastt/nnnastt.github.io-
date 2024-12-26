import React from 'react';
import a from './pic/a.webp';
import s from './pic/s.webp';
import d from './pic/d.webp';
const SixthSection = () => {
  return (
    <section id="news" className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12"style={{ color: '#9F2042' }}>ПОЛЕЗНЫЕ ПУБЛИКАЦИИ</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Новость 1 */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <img
              src={a}
              alt="a"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Турмалины из Афганистана</h3>
            <p className="text-black mb-4">
            Представляем вашему вниманию новинки каталога камней  – афганские турмалины различных цветов, форм огранки, массы, чистоты и редкости.
            </p>
            
          </div>

          {/* Новость 2 */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <img
              src={s}
              alt="s"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Сертификация полудрагоценных камней</h3>
            <p className="text-black mb-4">
            Полудрагоценные камни не подпадают под системы ГОСТ Р и ТР ТС. Тем не менее, для полудрагоценных камней требуется обязательная оценка качества в профильных системах,
             а также маркировка и пломбирование.
            </p>
            
          </div>

          {/* Новость 3 */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <img
              src={d}
              alt="d"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Виды огранки камней</h3>
            <p className="text-blackmb-4">
            Всего существует 3 вида огранки (фацетная, круг и кабошон), которые насчитывают более 250 разновидностей. 
            Выбор обработки зависит от множества факторов, например, вида и размера минерала, его твёрдости, чистоты, оптических свойств и, конечно же, мастерства огранщика.
            </p>
           
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="px-6 py-3 text-white  rounded-lg shadow-md  transition"style={{ backgroundColor: '#9F2042' }}>
           Все Новости
          </button>
        </div>
      </div>
    </section>
  );
};

export default SixthSection;
