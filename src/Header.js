import React, { useState, useEffect } from 'react';
import logo from './pic/logo.webp';
import { IoCartOutline } from "react-icons/io5";
import Modal from './Modal'; 
import { useCart } from './CartContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { cartItems } = useCart(); // Используйте данные корзины из контекста

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveMenuItem(id);
  };

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className={`fixed w-full h-20 top-0 left-0 z-50 transition-colors duration-300 bg-white ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="w-14">
          <a href="App.js"><img src={logo} alt="Logo" /></a>
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex space-x-4">
          <button onClick={() => scrollToSection('roll')} className={`text-gray-700 hover:text-gray-900 focus:outline-none ${activeMenuItem === 'roll' ? 'text-orange-500' : ''}`}>Роллы</button>
          <button onClick={() => scrollToSection('set')} className={`text-gray-700 hover:text-gray-900 focus:outline-none ${activeMenuItem === 'set' ? 'text-orange-500' : ''}`}>Сеты</button>
          <button onClick={() => scrollToSection('wok')} className={`text-gray-700 hover:text-gray-900 focus:outline-none ${activeMenuItem === 'wok' ? 'text-orange-500' : ''}`}>Wok</button>
          <button onClick={() => scrollToSection('disc')} className={`text-gray-700 hover:text-gray-900 focus:outline-none ${activeMenuItem === 'disc' ? 'text-orange-500' : ''}`}>Акции</button>
          <button onClick={() => scrollToSection('contact')} className={`text-gray-700 hover:text-gray-900 focus:outline-none ${activeMenuItem === 'contact' ? 'text-orange-500' : ''}`}>Контакты</button>
        </nav>

        {/* Cart Icon */}
        <div className="flex items-center space-x-4">
          <button onClick={handleModalToggle} className="text-gray-700 hover:text-gray-900 relative">
            <IoCartOutline className="h-6 w-6" />
            {itemCount > 0 && ( // Conditionally render the item count
              <span className="absolute bottom-2 left-4 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    
      <Modal isOpen={isModalOpen} onClose={handleModalToggle} cartItems={cartItems} />
    </header>
  );
};
export default Header;
