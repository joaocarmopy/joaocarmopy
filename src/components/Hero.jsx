import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const heroNavItems = [
    { label: 'Sobre Mim', id: 'about', primary: true },
    { label: 'Experiência', id: 'experience', primary: false },
    { label: 'Certificados', id: 'certificates', primary: false },
    { label: 'Diplomas', id: 'diplomas', primary: false },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] -bottom-48 -right-48 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Profile Photo - Larger and Prominent */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
            className="mb-10 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full p-1.5 bg-gradient-to-br from-blue-500 to-purple-600 relative z-10 shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-950 border-4 border-slate-950">
                <img 
                  src="./public/fotos/me.jpeg" 
                  alt="João Paulo Cardoso do Carmo" 
                  className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>
            </div>
          </motion.div>

          {/* Personal Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="max-w-3xl mx-auto space-y-4 mb-10"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent pb-2">
              João Paulo Cardoso do Carmo
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-medium text-gray-200">
              Desenvolvedor IA | Cientista de Dados | Engenheiro Agrônomo
            </h2>

            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed pt-2">
              Transformando dados em soluções inteligentes através de IA de ponta e ciência de dados. 
              Especialista em unir tecnologia avançada com aplicações práticas no agronegócio.
            </p>
          </motion.div>

          {/* Navigation Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {heroNavItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 group
                  ${item.primary 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-1' 
                    : 'bg-slate-800/50 text-gray-300 border border-slate-700 hover:border-blue-500/50 hover:bg-slate-800 hover:text-white hover:-translate-y-1'
                  }
                `}
              >
                {item.label}
                {item.primary && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
              </button>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            onClick={() => scrollToSection('about')}
            className="animate-bounce p-2 text-gray-500 hover:text-blue-400 transition-colors"
            aria-label="Rolar para baixo"
          >
            <ChevronDown size={32} />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hero;