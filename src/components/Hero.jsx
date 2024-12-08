import { useNavigate } from 'react-router-dom';
import { FiMapPin, FiCalendar, FiUsers } from 'react-icons/fi';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gray-50/90" />
        <img 
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80"
          alt="Mountain landscape"
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-transparent to-gray-50/50" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-gray-800">
            <h1 className="font-display text-5xl lg:text-7xl mb-6">
              Gastronomía de Altura
              <br />
              <span className="text-primary">en Estado Puro</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-600 max-w-xl">
              Vive una experiencia gastronómica única donde la cocina de autor se fusiona con los paisajes más impresionantes de la cordillera.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-gray-600">
                <FiMapPin className="text-primary" />
                <span>Experiencias exclusivas a más de 2.500 metros de altura</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <FiCalendar className="text-primary" />
                <span>Eventos mensuales en ubicaciones únicas de los Andes</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <FiUsers className="text-primary" />
                <span>Grupos reducidos de máximo 12 comensales</span>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => navigate('/locations')}
                className="bg-primary text-white px-8 py-3 rounded-md text-lg hover:bg-primary/90 transition-colors"
              >
                Explorar Destinos
              </button>
              <button
                onClick={() => navigate('/menu')}
                className="border-2 border-primary text-primary px-8 py-3 rounded-md text-lg hover:bg-primary/5 transition-colors"
              >
                Descubrir Menú
              </button>
            </div>
          </div>

          {/* Right Content - Featured Dish */}
          <div className="hidden lg:block">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
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
                <button
                  onClick={() => navigate('/menu')}
                  className="text-primary hover:underline underline-offset-4"
                >
                  Ver en el menú →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
