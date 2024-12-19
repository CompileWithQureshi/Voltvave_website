import React from 'react';
import Volt from '/src/assets/voltvave.png';

function NavBar() {
  return (
    <nav className="flex justify-between items-center  sticky top-0 bg-white z-50">
      <div className="w-36">
        <img src={Volt} alt="Logo" className="w-fit" />
      </div>
      <ul className="hidden md:flex gap-8 text-lg font-semibold">
        <li className="hover:text-primary"><a href="#about">About</a></li>
        <li className="hover:text-primary"><a href="#vision">Vision & Mission</a></li>
        <li className="hover:text-primary"><a href="#services">Services</a></li>
        <li className="hover:text-primary"><a href="#contact">Contact</a></li>
      </ul>
      <div className="md:hidden">
        {/* Add a mobile menu button here if needed */}
      </div>
    </nav>
  );
}

export default NavBar;
