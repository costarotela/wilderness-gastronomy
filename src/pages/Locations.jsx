import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import LocationCard from '../components/LocationCard';
import LocationModal from '../components/LocationModal';

const locationsData = {
  es: [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1519659528534-7fd733a832a0?auto=format&fit=crop&q=80",
      name: "Montañas Patagónicas",
      date: "Octubre 2023",
      status: "past",
      description: "Experiencia gastronómica entre glaciares y montañas.",
      fullDescription: "Una velada única rodeada de glaciares milenarios y montañas majestuosas.",
      duration: "3 horas",
      price: "desde $150",
      location: "Patagonia Argentina",
      capacity: "20 comensales"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&q=80",
      name: "Bosque Encantado",
      date: "Noviembre 2023",
      status: "past",
      description: "Cena mágica en un antiguo bosque de secuoyas.",
      fullDescription: "Una experiencia única entre árboles centenarios y naturaleza virgen.",
      duration: "4 horas",
      price: "desde $160",
      location: "Bosque de Secuoyas",
      capacity: "18 comensales"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1542401886-65d6c61db217?auto=format&fit=crop&q=80",
      name: "Alturas Alpinas",
      date: "Diciembre 2023",
      status: "current",
      description: "Una experiencia gastronómica única entre picos nevados.",
      fullDescription: "Disfruta de una velada extraordinaria a 2.500 metros de altura.",
      duration: "3 horas",
      price: "desde $180",
      location: "Alpes Suizos",
      capacity: "20 comensales"
    }
  ],
  en: [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1519659528534-7fd733a832a0?auto=format&fit=crop&q=80",
      name: "Patagonian Mountains",
      date: "October 2023",
      status: "past",
      description: "Gastronomic experience among glaciers and mountains.",
      fullDescription: "A unique evening surrounded by ancient glaciers and majestic mountains.",
      duration: "3 hours",
      price: "from $150",
      location: "Argentinian Patagonia",
      capacity: "20 guests"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&q=80",
      name: "Enchanted Forest",
      date: "November 2023",
      status: "past",
      description: "Magical dinner in an ancient sequoia forest.",
      fullDescription: "A unique experience among centennial trees and pristine nature.",
      duration: "4 hours",
      price: "from $160",
      location: "Sequoia Forest",
      capacity: "18 guests"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1542401886-65d6c61db217?auto=format&fit=crop&q=80",
      name: "Alpine Heights",
      date: "December 2023",
      status: "current",
      description: "A unique dining experience among snowy peaks.",
      fullDescription: "Enjoy an extraordinary evening at 2,500 meters altitude.",
      duration: "3 hours",
      price: "from $180",
      location: "Swiss Alps",
      capacity: "20 guests"
    }
  ]
};

export default function Locations() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
    setIsModalOpen(true);
  };

  const currentLocations = locationsData[i18n.language] || locationsData.en;

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-display text-5xl text-primary mb-4">
            {t('locations.title')}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('locations.subtitle')}
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-300 via-primary to-gray-300" />
          
          <div className="space-y-8">
            {currentLocations.map((location) => (
              <div key={location.id} className="relative flex-1 ml-8">
                <div className={`absolute w-4 h-4 rounded-full -left-10 top-1/2 -translate-y-1/2
                  ${location.status === 'past' 
                    ? 'bg-gray-400' 
                    : location.status === 'current'
                      ? 'bg-primary ring-4 ring-primary/20'
                      : 'bg-white border-2 border-primary'
                  }`} 
                />
                <LocationCard 
                  location={location} 
                  onClick={handleLocationClick}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <LocationModal 
        location={selectedLocation}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
