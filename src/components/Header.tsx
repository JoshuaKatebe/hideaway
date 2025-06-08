'use client';

import { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ease-in-out py-4 ${
        scrolled ? 'bg-blue-800 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 relative">
        <div className="text-white text-2xl font-bold">HideAway Apartments</div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-4 6h4"></path>
            </svg>
          </button>
        </div>
        <nav className={`md:flex ${menuOpen ? 'block absolute top-full left-0 w-full bg-blue-700 shadow-lg py-2' : 'hidden'}`}>
          <ul className={`flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 ${menuOpen ? 'px-4' : ''}`}>
            <li className="text-white hover:text-gray-300 transition-colors duration-200">
              <a href="/">
                Home
              </a>
            </li>
            <li className="text-white hover:text-gray-300 transition-colors duration-200">
              <a href="/about">
                About Us
              </a>
            </li>
            <li className="text-white hover:text-gray-300 transition-colors duration-200">
              <a href="/services">
                Services
              </a>
            </li>
            <li className="text-white hover:text-gray-300 transition-colors duration-200">
              <a href="/listings">
                Listings
              </a>
            </li>
            <li className="text-white hover:text-gray-300 transition-colors duration-200">
              <a href="/contact">
                Contact
              </a>
            </li>
          </ul>  
        </nav>
      </div>
    </header>
  );
};

export default Header;