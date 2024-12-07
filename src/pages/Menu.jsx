import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiClock } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import DishModal from '../components/DishModal';

const menuData = {
  es: {
    "Entradas": [
      {
        id: 1,
        name: "Tartare de Hongos Silvestres",
        description: "Delicada preparación de hongos forageados, aceite de trufa y hierbas locales",
        shortDescription: "Hongos forageados con aceite de trufa",
        price: "24",
        image: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?auto=format&fit=crop&q=80",
        category: "Entradas",
        prepTime: "15 minutos",
        ingredients: ["Hongos silvestres", "Trufa negra", "Hierbas frescas", "Aceite de oliva premium"],
        dietaryInfo: "Vegetariano | Sin Gluten",
        award: "Mejor Entrada 2023"
      },
      {
        id: 2,
        name: "Trucha de Arroyo de Montaña",
        description: "Trucha local curada, hierbas alpinas y cítricos de temporada",
        shortDescription: "Trucha curada con hierbas alpinas",
        price: "28",
        image: "https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?auto=format&fit=crop&q=80",
        category: "Entradas",
        prepTime: "20 minutos",
        ingredients: ["Trucha fresca", "Hierbas alpinas", "Cítricos", "Sal marina"],
        dietaryInfo: "Rico en Omega-3"
      }
    ],
    "Platos Principales": [
      {
        id: 3,
        name: "Cordero de Altura",
        description: "Cordero cocinado a baja temperatura durante 48 horas, con hierbas silvestres",
        shortDescription: "Cordero 48h con hierbas silvestres",
        price: "45",
        image: "https://images.unsplash.com/photo-1514516816066-12d807fdd43e?auto=format&fit=crop&q=80",
        category: "Platos Principales",
        prepTime: "48 horas",
        ingredients: ["Cordero premium", "Hierbas silvestres", "Vegetales de raíz", "Reducción de vino tinto"],
        award: "Plato Destacado 2023"
      }
    ],
    "Postres": [
      {
        id: 4,
        name: "Sinfonía de Frutos del Bosque",
        description: "Frutos silvestres de temporada, miel de altura y flores de montaña",
        shortDescription: "Frutos silvestres con miel de altura",
        price: "18",
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80",
        category: "Postres",
        prepTime: "15 minutos",
        ingredients: ["Frutos silvestres", "Miel de altura", "Flores comestibles", "Crema montada"],
        dietaryInfo: "Sin Gluten"
      }
    ]
  },
  en: {
    "Starters": [
      {
        id: 1,
        name: "Wild Mushroom Tartare",
        description: "Delicate preparation of foraged mushrooms, truffle oil and local herbs",
        shortDescription: "Foraged mushrooms with truffle oil",
        price: "24",
        image: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?auto=format&fit=crop&q=80",
        category: "Starters",
        prepTime: "15 minutes",
        ingredients: ["Wild mushrooms", "Black truffle", "Fresh herbs", "Premium olive oil"],
        dietaryInfo: "Vegetarian | Gluten Free",
        award: "Best Starter 2023"
      },
      {
        id: 2,
        name: "Mountain Stream Trout",
        description: "Cured local trout, alpine herbs and seasonal citrus",
        shortDescription: "Cured trout with alpine herbs",
        price: "28",
        image: "https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?auto=format&fit=crop&q=80",
        category: "Starters",
        prepTime: "20 minutes",
        ingredients: ["Fresh trout", "Alpine herbs", "Citrus", "Sea salt"],
        dietaryInfo: "Rich in Omega-3"
      }
    ],
    "Main Courses": [
      {
        id: 3,
        name: "Highland Lamb",
        description: "48-hour slow-cooked lamb with wild herbs",
        shortDescription: "48h lamb with wild herbs",
        price: "45",
        image: "https://images.unsplash.com/photo-1514516816066-12d807fdd43e?auto=format&fit=crop&q=80",
        category: "Main Courses",
        prepTime: "48 hours",
        ingredients: ["Premium lamb", "Wild herbs", "Root vegetables", "Red wine reduction"],
        award: "Featured Dish 2023"
      }
    ],
    "Desserts": [
      {
        id: 4,
        name: "Forest Berry Symphony",
        description: "Seasonal wild berries, highland honey and mountain flowers",
        shortDescription: "Wild berries with highland honey",
        price: "18",
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80",
        category: "Desserts",
        prepTime: "15 minutes",
        ingredients: ["Wild berries", "Highland honey", "Edible flowers", "Whipped cream"],
        dietaryInfo: "Gluten Free"
      }
    ]
  }
};

export default function Menu() {
  const [selectedDish, setSelectedDish] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const handleDishClick = (dish) => {
    setSelectedDish(dish);
    setIsModalOpen(true);
  };

  const currentMenu = menuData[i18n.language] || menuData.en;

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-display text-5xl text-primary mb-4">
            {t('menu.title')}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('menu.subtitle')}
          </p>
        </motion.div>

        <div className="space-y-16">
          {Object.entries(currentMenu).map(([category, dishes]) => (
            <motion.section
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <h2 className="font-display text-3xl text-primary text-center mb-8">
                {category}
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {dishes.map((dish) => (
                  <motion.div
                    key={dish.id}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                    onClick={() => handleDishClick(dish)}
                  >
                    <div className="h-48 relative">
                      <img 
                        src={dish.image}
                        alt={dish.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <h3 className="text-white font-display text-xl mb-1">{dish.name}</h3>
                        <p className="text-white/80 text-sm">{dish.shortDescription}</p>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center text-sm text-gray-500">
                          <FiClock className="mr-1" />
                          <span>{dish.prepTime}</span>
                        </div>
                        <span className="text-xl font-display text-primary">${dish.price}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </div>

      <DishModal 
        dish={selectedDish}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
