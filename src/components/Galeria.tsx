
import React from 'react';

const imagenes = [
  {
    url: "https://images.unsplash.com/photo-1544260979-c01a49e71f8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    titulo: "Celebración de cumpleaños"
  },
  {
    url: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2338&q=80",
    titulo: "Fiesta infantil"
  },
  {
    url: "https://images.unsplash.com/photo-1604709375322-e1a363a7029f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    titulo: "Área de juegos"
  },
  {
    url: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2336&q=80",
    titulo: "Pastel y dulces"
  },
  {
    url: "https://images.unsplash.com/photo-1558008258-3256797b43f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2342&q=80",
    titulo: "Actividades artísticas"
  },
  {
    url: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2338&q=80",
    titulo: "Campo de fútbol"
  }
];

const Galeria = () => {
  return (
    <section id="galeria" className="py-16 md:py-24 bg-gradient-to-b from-mmp-black to-mmp-black/90">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-mmp-green mb-4">Nuestra Galería</h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Descubre los momentos mágicos que creamos en MMP Casa de Fiestas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {imagenes.map((imagen, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-2xl shadow-lg h-64 cursor-pointer transition-transform duration-300 hover:-translate-y-2"
            >
              <img 
                src={imagen.url} 
                alt={imagen.titulo} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mmp-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white text-xl font-semibold">{imagen.titulo}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Galeria;
