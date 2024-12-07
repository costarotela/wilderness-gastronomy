import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiStar, FiMapPin, FiCalendar, FiUsers, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useState } from 'react';

const reviews = [
  {
    id: 1,
    name: "María González",
    location: "Alpes Suizos",
    date: "Diciembre 2023",
    rating: 5,
    image: "https://images.unsplash.com/photo-1542401886-65d6c61db217?auto=format&fit=crop&q=80",
    comment: "Una experiencia única en las alturas. La combinación de gastronomía excepcional y vistas espectaculares creó un momento inolvidable. El maridaje fue perfecto y el servicio impecable.",
    highlight: "La trucha de arroyo fue extraordinaria"
  },
  {
    id: 2,
    name: "Carlos Ruiz",
    location: "Patagonia Argentina",
    date: "Octubre 2023",
    rating: 5,
    image: "https://images.unsplash.com/photo-1519659528534-7fd733a832a0?auto=format&fit=crop&q=80",
    comment: "Más que una cena, fue una aventura gastronómica. El cordero preparado con hierbas locales fue una revelación. La atención a los detalles y el conocimiento del personal sobre cada plato fue impresionante.",
    highlight: "El cordero de altura superó todas las expectativas"
  },
  {
    id: 3,
    name: "Ana Martínez",
    location: "Bosque de Secuoyas",
    date: "Noviembre 2023",
    rating: 5,
    image: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&q=80",
    comment: "La experiencia en el bosque fue mágica. La forma en que integraron los ingredientes locales con técnicas modernas fue brillante. El ambiente creado entre los árboles centenarios fue simplemente perfecto.",
    highlight: "Una fusión perfecta entre naturaleza y gastronomía"
  }
];

export default function ExperienceSection() {
  const { t } = useTranslation();
  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl text-primary mb-4">
              Experiencias Extraordinarias
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubre lo que nuestros invitados dicen sobre sus experiencias únicas
              en nuestros destinos gastronómicos.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Características */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <FiMapPin className="text-2xl text-primary" />
                <h3 className="font-display text-xl">Ubicaciones Exclusivas</h3>
              </div>
              <p className="text-gray-600">
                Cuidadosamente seleccionadas por su belleza natural y accesibilidad,
                nuestras ubicaciones ofrecen el escenario perfecto para una
                experiencia gastronómica única.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <FiCalendar className="text-2xl text-primary" />
                <h3 className="font-display text-xl">Eventos Mensuales</h3>
              </div>
              <p className="text-gray-600">
                Cada mes presentamos una nueva ubicación y menú, garantizando
                experiencias frescas y emocionantes para nuestros comensales.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <FiUsers className="text-2xl text-primary" />
                <h3 className="font-display text-xl">Grupos Reducidos</h3>
              </div>
              <p className="text-gray-600">
                Limitamos cada evento a 20 comensales para garantizar una
                experiencia íntima y un servicio personalizado.
              </p>
            </div>
          </motion.div>

          {/* Reseñas */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <img
                  src={reviews[currentReview].image}
                  alt={reviews[currentReview].location}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(reviews[currentReview].rating)].map((_, i) => (
                      <FiStar key={i} className="fill-current text-yellow-400" />
                    ))}
                  </div>
                  <p className="font-display text-lg">{reviews[currentReview].location}</p>
                </div>
              </div>

              <div className="p-6">
                <blockquote className="text-gray-600 mb-4">
                  "{reviews[currentReview].comment}"
                </blockquote>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-800">{reviews[currentReview].name}</p>
                    <p className="text-sm text-gray-500">{reviews[currentReview].date}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={prevReview}
                      className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <FiChevronLeft className="text-gray-600" />
                    </button>
                    <button
                      onClick={nextReview}
                      className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <FiChevronRight className="text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="px-6 py-4 bg-primary/5 border-t border-primary/10">
                <p className="text-primary font-medium">
                  Destacado: {reviews[currentReview].highlight}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
