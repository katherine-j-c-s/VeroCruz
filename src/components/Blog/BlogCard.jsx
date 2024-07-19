import React from 'react';
import { Link } from 'react-router-dom';

export const BlogCard = ({ id, title, descResumida, urlImg, Detalle }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4 transition-all duration-300 hover:shadow-xl">
      <Link to={`/DetalleBlog/${id}?title=${encodeURIComponent(title)}&detalle=${encodeURIComponent(JSON.stringify(Detalle))}`}>
        <div className="relative overflow-hidden">
          <img 
            className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110" 
            src={urlImg} 
            alt={title}
          />
        </div>
      </Link>
      <div className="px-6 py-4">
        <Link to={`/DetalleBlog/${id}?title=${encodeURIComponent(title)}&detalle=${encodeURIComponent(JSON.stringify(Detalle))}`}>
          <h2 className="font-serif text-md mb-2 text-[#564757] transition-all duration-300">{title}</h2>
        </Link>
        <div className="flex space-x-2 mb-2">
          <Link to="/blog" className="text-black font-sans font-semibold text-xs">Articulo</Link>
          <Link to="/blog" className="text-black font-sans font-semibold text-xs">Vero Cruz</Link>
        </div>
        <p className="md:text-sm text-xs">{descResumida}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <Link 
          to={`/DetalleBlog/${id}?title=${encodeURIComponent(title)}&detalle=${encodeURIComponent(JSON.stringify(Detalle))}`}
          className="md:text-sm text-xs font-mono"
        >
          Leer más
        </Link>
      </div>
    </div>
  );
};

