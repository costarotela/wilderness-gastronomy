import React from 'react';
import { FiClock } from 'react-icons/fi';

const menuItems = [
  {
    id: 1,
    category: "Entradas",
    name: "Carpaccio de Ciervo Patagónico",
    description: "Finas láminas de ciervo curado en hierbas de altura, brotes orgánicos y vinagreta de frutos silvestres",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80",
    prepTime: "25 minutos"
  },
  {
    id: 2,
    category: "Entradas",
    name: "Crema de Morillas Silvestres",
    description: "Hongos morillas recolectados en temporada, crema de papas andinas y aceite de trufa negra",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80",
    prepTime: "30 minutos"
  },
  {
    id: 3,
    category: "Platos Principales",
    name: "Cordero de Altura 63°",
    description: "Cordero criado a 3000m, cocido a baja temperatura durante 63 horas, puré de tubérculos andinos",
    image: "https://images.unsplash.com/photo-1514516816066-12d807fdd43e?auto=format&fit=crop&q=80",
    prepTime: "63 horas"
  },
  {
    id: 4,
    category: "Platos Principales",
    name: "Trucha Arcoíris de Arroyo",
    description: "Trucha salvaje de arroyos de montaña, cocida en hojas de nalca, con risotto de quínoa",
    image: "https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?auto=format&fit=crop&q=80",
    prepTime: "45 minutos"
  },
  {
    id: 5,
    category: "Postres",
    name: "Texturas de Chocolate y Calafate",
    description: "Mousse de chocolate Patagonia 70%, helado de calafate silvestre, tierra de chocolate",
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&q=80",
    prepTime: "40 minutos"
  },
  {
    id: 6,
    category: "Postres",
    name: "Trilogía de Manzanas Silvestres",
    description: "Tarta tibia de manzanas silvestres, sorbete de manzana verde y espuma de sidra",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80",
    prepTime: "35 minutos"
  }
];

export default function Menu() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-display text-primary mb-4">
            Nuestra Propuesta Gastronómica
          </h1>
          <p className="text-gray-600">
            Una selección cuidadosa de sabores que representan la esencia de la cordillera
          </p>
        </div>

        {/* Entradas */}
        <section className="mb-16">
          <h2 className="text-2xl font-display text-primary text-center mb-8">Entradas</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {menuItems
              .filter(item => item.category === "Entradas")
              .map(item => (
                <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 relative">
                    <img 
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-display mb-2">{item.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <FiClock className="mr-2" />
                      {item.prepTime}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* Platos Principales */}
        <section className="mb-16">
          <h2 className="text-2xl font-display text-primary text-center mb-8">Platos Principales</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {menuItems
              .filter(item => item.category === "Platos Principales")
              .map(item => (
                <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 relative">
                    <img 
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-display mb-2">{item.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <FiClock className="mr-2" />
                      {item.prepTime}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* Postres */}
        <section className="mb-16">
          <h2 className="text-2xl font-display text-primary text-center mb-8">Postres</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {menuItems
              .filter(item => item.category === "Postres")
              .map(item => (
                <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 relative">
                    <img 
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-display mb-2">{item.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <FiClock className="mr-2" />
                      {item.prepTime}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}
