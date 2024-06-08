import React from 'react';
const Footer = () => {
  return (
    <footer className="bg-black py-8 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          
          <div className="w-full text-center mb-4">
            <div className='flex justify-center space-x-4' style={{ color: '#ff6047' }}>
              <a href="/roll" className="hover:underline" style={{ color: '#ff6047' }}>Роллы</a>
              <a href="/set" className="hover:underline" style={{ color: '#ff6047' }}>Сеты</a>
              <a href="/wok" className="hover:underline" style={{ color: '#ff6047' }}>WOK</a>
              <a href="/disc" className="hover:underline" style={{ color: '#ff6047' }}>Акции</a>
              <a href="/contact" className="hover:underline" style={{ color: '#ff6047' }}>Контакты</a>
            </div>
          </div>
        </div>
        <div className="text-center mt-4 text-gray-500">
          <p>&copy; {new Date().getFullYear()} Компания. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
