import React from "react";
import f1 from './pic/f1.svg'
import f2 from './pic/f2.webp'
import f3 from './pic/f3.svg'

const Time = () => {
    return (
      <div id="contact" className="bg-black text-white py-16 mt-12">
        <div className="container mx-auto flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <img src={f1} alt="Контакты" className="h-32 w-32 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Контакты</h3>
            <p>Телефон: +7 (XXX) XXX-XX-XX</p>
            <p>Email: example@example.com</p>
          </div>
  
          <div className="w-full md:w-1/3 mt-4 md:mt-0 flex flex-col items-center">
            <img src={f2} alt="Адрес" className="h-32 w-32 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Адрес</h3>
            <p>Адрес: ул. Примерная, д. 123, г. Примерный</p>
          </div>
  
          <div className="w-full md:w-1/3 mt-4 md:mt-0 flex flex-col items-center">
            <img src={f3} alt="Время работы" className="h-32 w-32 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Время работы</h3>
            <p>Пн - Пт: 9:00 - 18:00</p>
            <p>Сб - Вс: выходной</p>
          </div>
        </div>
      </div>
    );
  };

export default Time;