import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer id='contact' className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="md:flex md:justify-between">
          <div className="flex flex-col mb-8 md:mb-0">
            <h2 className="text-[#9F2042] font-bold text-lg">SHINE</h2>
            <p className="mt-2 text-gray-600">
            Комфортная среда для творчества, как для искушенных ценителей, так и абсолютных новичков.
            </p>
            <p className="mt-2 text-gray-600">
              ©SHINE PTY LTD 2020. All rights reserved
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="flex flex-col mb-8 md:mb-0">
              <h3 className="text-gray-700 font-medium" style={{ color: '#9F2042' }}>Ссылки</h3>
              <Link to="gl" smooth={true} duration={500} className="mt-2 text-gray-600 hover:text-gray-900 cursor-pointer">Главная</Link>
              <Link to="service" smooth={true} duration={500} className="mt-2 text-gray-600 hover:text-gray-900 cursor-pointer">Услуги</Link>
              <Link to="work" smooth={true} duration={500} className="mt-2 text-gray-600 hover:text-gray-900 cursor-pointer">Процесс работы</Link>
              <Link to="acspert" smooth={true} duration={500} className="mt-2 text-gray-600 hover:text-gray-900 cursor-pointer">Оценка</Link>
              <Link to="reaction" smooth={true} duration={500} className="mt-2 text-gray-600 hover:text-gray-900 cursor-pointer">Отзывы</Link>
              <Link to="news" smooth={true} duration={500} className="mt-2 text-gray-600 hover:text-gray-900 cursor-pointer">Новости</Link>
            </div>

            <div className="flex flex-col">
              <h3 className="text-gray-700 font-medium" style={{ color: '#9F2042' }}>Связь с нами</h3>
              <p className="mt-2 text-gray-600">Номер телефона: +7 982 321 23 32</p>
              <p className="mt-2 text-gray-600">Email: shine@mail.com</p>
              <p className="mt-2 text-gray-600">Адрес: Куда-то туда д.34</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
