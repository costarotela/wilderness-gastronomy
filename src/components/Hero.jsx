import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiMapPin, FiCalendar, FiUsers } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50">
      {/* Background Image with Softer Effect */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gray-50/90" />
        <img 
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80"
          alt="Mountain landscape"
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-transparent to-gray-50/50" />
      </motion.div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gray-800"
          >
            <h1 className="font-display text-5xl lg:text-7xl mb-6">
              {t('hero.title')}
              <br />
              <span className="text-primary">{t('hero.subtitle')}</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-600 max-w-xl">
              {t('hero.description')}
            </p>

            <div className="space-y-4 mb-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3 text-gray-600"
              >
                <FiMapPin className="text-primary" />
                <span>{t('hero.features.altitude')}</span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-3 text-gray-600"
              >
                <FiCalendar className="text-primary" />
                <span>{t('hero.features.monthly')}</span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-3 text-gray-600"
              >
                <FiUsers className="text-primary" />
                <span>{t('hero.features.intimate')}</span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/locations')}
                className="bg-primary text-white px-8 py-3 rounded-md text-lg hover:bg-primary/90 transition-colors"
              >
                {t('hero.cta')}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/menu')}
                className="border-2 border-primary text-primary px-8 py-3 rounded-md text-lg hover:bg-primary/5 transition-colors"
              >
                {t('hero.menuButton')}
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Featured Dish */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ 
                repeat: Infinity, 
                repeatType: "reverse", 
                duration: 2.5,
                ease: "easeInOut"
              }}
              className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg"
            >
              <div className="relative h-72 rounded-lg overflow-hidden mb-6">
                <img
                  src="https://images.unsplash.com/photo-1542834291-c514e77b215f?auto=format&fit=crop&q=80"
                  alt="Featured dish"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-primary/90 text-white px-4 py-2 rounded-full text-sm">
                    Plato Destacado
                  </span>
                </div>
              </div>
              <h3 className="font-display text-2xl text-gray-800 mb-2">
                Trucha de Arroyo Andino
              </h3>
              <p className="text-gray-600 mb-4">
                Con hierbas silvestres y vegetales de altura, una experiencia 
                que captura la esencia de la cordillera
              </p>
              <div className="flex justify-between items-center">
                <span className="text-primary bg-primary/10 px-3 py-1 rounded-full text-sm">
                  Disponible ahora
                </span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/menu')}
                  className="text-primary hover:underline underline-offset-4"
                >
                  Ver en el menú →
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 text-center"
      >
        <span className="block text-sm mb-2">Descubre más</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            repeat: Infinity,
            duration: 1.5
          }}
          className="w-6 h-6 border-2 border-gray-400 rounded-full mx-auto"
        >
          <motion.div
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ 
              repeat: Infinity,
              duration: 1.5
            }}
            className="w-1 h-1 bg-gray-400 rounded-full mx-auto mt-1.5"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
