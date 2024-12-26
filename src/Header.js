import React, { useState, useEffect } from 'react';


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveMenuItem(id);
    setIsMobileMenuOpen(false); // Close mobile menu after clicking a link
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed w-full h-15 top-0 left-0 z-50 transition-colors md:px-12 px-4 pt-1 duration-300 bg-white ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="w-20">
          <h1 className="text-1xl md:text-2xl lg:text-3xl font-bold" style={{ color: '#9F2042' }}>SHINE</h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-4">
          <button onClick={() => scrollToSection('gl')} className={`text-gray-700 hover:text-gray-900 focus:outline-none ${activeMenuItem === 'gl' ? 'text-[#9F2042]' : ''}`}>Главная</button>
          <button onClick={() => scrollToSection('service')} className={`text-gray-700 hover:text-gray-900 focus:outline-none ${activeMenuItem === 'service' ? 'text-[#9F2042]' : ''}`}>Услуги</button>
          <button onClick={() => scrollToSection('work')} className={`text-gray-700 hover:text-gray-900 focus:outline-none ${activeMenuItem === 'work' ? 'text-[#9F2042]' : ''}`}>Процесс работы</button>
          <button onClick={() => scrollToSection('acspert')} className={`text-gray-700 hover:text-gray-900 focus:outline-none ${activeMenuItem === 'acspert' ? 'text-[#9F2042]' : ''}`}>Оценка</button>
          <button onClick={() => scrollToSection('reaction')} className={`text-gray-700 hover:text-gray-900 focus:outline-none ${activeMenuItem === 'reaction' ? 'text-[#9F2042]' : ''}`}>Отзывы</button>
          <button onClick={() => scrollToSection('news')} className={`text-gray-700 hover:text-gray-900 focus:outline-none ${activeMenuItem === 'news' ? 'text-[#9F2042]' : ''}`}>Новости</button>
          <button onClick={() => scrollToSection('contact')} className={`text-gray-700 hover:text-gray-900 focus:outline-none ${activeMenuItem === 'contact' ? 'text-[#9F2042]' : ''}`}>Контакты</button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-gray-700 hover:text-gray-900 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <button onClick={() => scrollToSection('gl')} className={`block w-full text-left py-2 px-4 text-gray-700 hover:text-gray-900 focus:outline-none ${activeMenuItem === 'gl' ? 'text-[#9F2042]' : ''}`}>Главная</button>
          <button onClick={() => scrollToSection('service')} className={`block w-full text-left py-2 px-4 text-gray-700 hover:text-gray-900 focus:outline-none ${activeMenuItem === 'service' ? 'text-[#9F2042]' : ''}`}>Услуги</button>
          <button onClick={() => scrollToSection('work')} className={`block w-full text-left py-2 px-4 text-gray-700 hover:text-gray-900 focus:outline-none ${activeMenuItem === 'work' ? 'text-[#9F2042]' : ''}`}>Процесс работы</button>
          <button onClick={() => scrollToSection('acspert')} className={`block w-full text-left py-2 px-4 text-gray-700 hover:text-gray-900 focus:outline-none ${activeMenuItem === 'acspert' ? 'text-[#9F2042]' : ''}`}>Оценка</button>
          <button onClick={() => scrollToSection('reaction')} className={`block w-full text-left py-2 px-4 text-gray-700 hover:text-gray-900 focus:outline-none ${activeMenuItem === 'reaction' ? 'text-[#9F2042]' : ''}`}>Отзывы</button>
          <button onClick={() => scrollToSection('news')} className={`block w-full text-left py-2 px-4 text-gray-700 hover:text-gray-900 focus:outline-none ${activeMenuItem === 'news' ? 'text-[#9F2042]' : ''}`}>Новости</button>
          <button onClick={() => scrollToSection('contact')} className={`block w-full text-left py-2 px-4 text-gray-700 hover:text-gray-900 focus:outline-none ${activeMenuItem === 'contact' ? 'text-[#9F2042]' : ''}`}>Контакты</button>
        </div>
      )}
    </header>
  );
};

export default Header;