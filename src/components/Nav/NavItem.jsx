import React from 'react';
import { Link } from 'react-router-dom'; // Asumiendo que usas react-router

export const NavItem = ({ href, isActive, children }) => {
  return (
    <div className="relative">
      <Link
        to={href}
        className={`px-4 py-2 text-xs font-medium transition-colors duration-200 ${
          isActive ? 'text-pink-600' : 'text-gray-700 hover:text-pink-600'
        }`}
      >
        {children}
      </Link>
      <div
        className={`absolute bottom-0 top-10 left-0 h-0.5 bg-pink-600 transition-all duration-300 ${
          isActive ? 'w-full' : 'w-0 group-hover:w-full'
        }`}
      />
    </div>
  );
};

