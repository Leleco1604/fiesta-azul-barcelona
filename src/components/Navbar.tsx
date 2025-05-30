
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleReservar = () => {
    const contactoElement = document.getElementById('contacto');
    if (contactoElement) {
      contactoElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-black shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="font-montserrat font-bold text-3xl text-mmp-green">MMP</span>
            <span className="hidden md:inline-block text-lg text-gray-400">Casa de Fiestas</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-400 hover:text-mmp-green font-medium">Inicio</a>
            <a href="#servicios" className="text-gray-400 hover:text-mmp-green font-medium">Servicios</a>
            <a href="#galeria" className="text-gray-400 hover:text-mmp-green font-medium">Galería</a>
            <a href="#menu" className="text-gray-400 hover:text-mmp-green font-medium">Menú</a>
            <a href="#contacto" className="text-gray-400 hover:text-mmp-green font-medium">Contacto</a>
          </div>

          <Button 
            className="hidden md:block bg-mmp-green hover:bg-mmp-green/80 text-black"
            onClick={handleReservar}
          >
            Reservar Ahora
          </Button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-400 hover:text-mmp-green"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              <a 
                href="#inicio" 
                className="text-gray-400 hover:text-mmp-green font-medium px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </a>
              <a 
                href="#servicios" 
                className="text-gray-400 hover:text-mmp-green font-medium px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </a>
              <a 
                href="#galeria" 
                className="text-gray-400 hover:text-mmp-green font-medium px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Galería
              </a>
              <a 
                href="#menu" 
                className="text-gray-400 hover:text-mmp-green font-medium px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Menú
              </a>
              <a 
                href="#contacto" 
                className="text-gray-400 hover:text-mmp-green font-medium px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </a>
              <Button 
                className="bg-mmp-green hover:bg-mmp-green/80 text-black w-full"
                onClick={() => {
                  setIsMenuOpen(false);
                  handleReservar();
                }}
              >
                Reservar Ahora
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
