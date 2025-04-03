
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="hero-pattern min-h-[85vh] flex items-center">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-mmp-blue mb-4">
                MMP <span className="text-black">Casa de Fiestas</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600">
                La mejor experiencia para tus celebraciones en Barcelona
              </p>
            </div>
            
            <p className="text-gray-600 text-lg">
              Celebra momentos inolvidables en nuestro espacio diseñado para 
              alegría y diversión. Ofrecemos todo lo necesario para un evento perfecto.
            </p>
            
            <div className="flex items-center text-gray-700 space-x-1">
              <Calendar className="h-5 w-5 text-mmp-blue" />
              <span>Disponibles todos los días de la semana</span>
            </div>
            
            <div className="flex items-center text-gray-700 space-x-1">
              <MapPin className="h-5 w-5 text-mmp-blue" />
              <span>Barcelona, España</span>
            </div>
            
            <div className="pt-4 flex flex-wrap gap-4">
              <Button className="bg-mmp-blue hover:bg-mmp-lightBlue text-white text-lg px-8 py-6">
                Reservar Ahora
              </Button>
              <Button variant="outline" className="border-mmp-blue text-mmp-blue hover:bg-mmp-blue/10 text-lg px-8 py-6">
                Ver Servicios
              </Button>
            </div>
          </div>
          
          <div className="hidden md:block relative">
            <div className="absolute top-0 left-0 w-full h-full bg-mmp-blue rounded-full opacity-10 animate-pulse"></div>
            <img 
              src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2338&q=80" 
              alt="Celebración de cumpleaños infantil" 
              className="rounded-3xl shadow-2xl relative z-10 animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
