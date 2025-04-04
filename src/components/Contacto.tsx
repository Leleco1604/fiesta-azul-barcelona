
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Contacto = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    fecha: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulación de envío de formulario
    toast({
      title: "Mensaje enviado",
      description: "Gracias por contactar con MMP Casa de Fiestas. Te responderemos pronto.",
    });
    
    // Resetear formulario
    setFormData({
      nombre: '',
      telefono: '',
      email: '',
      fecha: '',
      mensaje: ''
    });
  };

  return (
    <section id="contacto" className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-mmp-blue mb-4">Contáctanos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Listo para reservar tu evento? Ponte en contacto con nosotros
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Envíanos un mensaje</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nombre" className="block text-gray-700 mb-2">Nombre</label>
                  <input
                    type="text"
                    id="nombre"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mmp-blue"
                    placeholder="Tu nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="telefono" className="block text-gray-700 mb-2">Teléfono</label>
                  <input
                    type="tel"
                    id="telefono"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mmp-blue"
                    placeholder="Tu teléfono"
                    required
                    value={formData.telefono}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mmp-blue"
                  placeholder="Tu email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="fecha" className="block text-gray-700 mb-2">Fecha del evento</label>
                <input
                  type="date"
                  id="fecha"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mmp-blue"
                  required
                  value={formData.fecha}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="mensaje" className="block text-gray-700 mb-2">Mensaje</label>
                <textarea
                  id="mensaje"
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mmp-blue"
                  placeholder="Cuéntanos sobre tu evento..."
                  required
                  value={formData.mensaje}
                  onChange={handleChange}
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full bg-mmp-blue hover:bg-mmp-lightBlue text-white py-6 text-lg">
                Enviar Mensaje
              </Button>
            </form>
          </div>
          
          <div className="flex flex-col space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Información de Contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-mmp-blue flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Teléfono</h4>
                    <p className="text-gray-600">+34 93 123 45 67</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-mmp-blue flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">info@mmpcasadefiestas.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-mmp-blue flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Dirección</h4>
                    <p className="text-gray-600">Carrer de la Festa, 123<br />08001, Barcelona, España</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-mmp-blue flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Horario</h4>
                    <p className="text-gray-600">
                      Lunes a Viernes: 10:00 - 20:00<br />
                      Sábados y Domingos: 10:00 - 22:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Síguenos</h3>
              <p className="text-gray-600 mb-4">Mantente informado de nuestras novedades y promociones en redes sociales</p>
              <div className="flex space-x-4">
                <a href="#" className="p-3 bg-blue-100 text-mmp-blue rounded-full hover:bg-mmp-blue hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                  </svg>
                </a>
                <a href="#" className="p-3 bg-blue-100 text-mmp-blue rounded-full hover:bg-mmp-blue hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
