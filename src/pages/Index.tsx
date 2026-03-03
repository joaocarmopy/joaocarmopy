import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, User, Brain, Sprout, Code, Leaf, Youtube, Instagram, Linkedin, Github } from 'lucide-react';
import pydoagroLogo from '@/assets/pydoagro-logo.png';
import joaocarmo from '@/assets/joaocarmo.jpeg';

const FloatingLeaves = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute text-primary/8"
        initial={{ y: '110vh', x: `${(i * 12) + 5}%`, rotate: 0 }}
        animate={{ y: '-10vh', rotate: 360 }}
        transition={{ duration: 20 + Math.random() * 10, repeat: Infinity, delay: i * 2, ease: 'linear' }}
      >
        <Leaf size={14 + Math.random() * 16} />
      </motion.div>
    ))}
    <div className="absolute w-[700px] h-[700px] rounded-full blur-[200px] -top-48 -left-48 bg-primary/6 animate-pulse-glow" />
    <div className="absolute w-[500px] h-[500px] rounded-full blur-[160px] -bottom-32 -right-32 bg-accent/5 animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full blur-[250px] bg-primary/3" />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <FloatingLeaves />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 80 }}
          className="text-center mb-16"
        >
          <motion.div
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Sprout className="text-primary" size={32} />
            <div className="w-px h-8 bg-border" />
            <Code className="text-accent" size={32} />
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-gradient-agro mb-4 leading-tight">
            João Carmo
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-lg mx-auto">
            IA & Data Science para o Agronegócio
          </p>
        </motion.div>

        {/* Two Portals */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl w-full">
          {/* Portfolio */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: 10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ delay: 0.4, duration: 0.7, type: 'spring' }}
          >
            <Link to="/portfolio" className="block group">
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative bg-card rounded-3xl p-8 md:p-10 border-2 border-border hover:border-primary/50 transition-all duration-500 overflow-hidden h-full hover:shadow-agro"
              >
                <div className="absolute inset-0 bg-agro-gradient opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:shadow-agro transition-all duration-500"
                  >
                    <User className="text-primary" size={30} />
                   <img src={joaocarmo} alt="joaocarmo" className="w-full h-full object-cover" />
                  </motion.div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
                    Portfólio Pessoal
                  </h2>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Minha trajetória profissional, formação acadêmica, experiências e certificações em IA e agronegócio.
                  </p>
                  <div className="flex items-center gap-2 text-primary font-bold">
                    <span>Ver currículo</span>
                    <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </motion.div>
            </Link>
          </motion.div>

          {/* pYdoAgro */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ delay: 0.6, duration: 0.7, type: 'spring' }}
          >
            <Link to="/pydoagro" className="block group">
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative bg-card rounded-3xl p-8 md:p-10 border-2 border-border hover:border-accent/50 transition-all duration-500 overflow-hidden h-full hover:shadow-agro"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500" style={{ background: 'linear-gradient(135deg, hsl(80, 70%, 55%), hsl(45, 80%, 55%))' }} />
                <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: -10, scale: 1.1 }}
                    className="w-16 h-16 rounded-2xl overflow-hidden mb-6 group-hover:shadow-agro transition-all duration-500"
                  >
                    <img src={pydoagroLogo} alt="pYdoAgro" className="w-full h-full object-cover" />
                  </motion.div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
                    pYdoAgro
                  </h2>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Cursos de Python, IA, Sistematização, Linhas de Plantio e tecnologia aplicada ao agronegócio.
                  </p>
                  <div className="flex items-center gap-2 text-accent font-bold">
                    <span>Ver cursos</span>
                    <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        </div>

        {/* Social */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-16 flex items-center gap-4"
        >
          {[
            { icon: Youtube, href: 'https://www.youtube.com/@pYdoAgro', label: 'YouTube' },
            { icon: Instagram, href: 'https://www.instagram.com/pydoagro/', label: 'Instagram' },
            { icon: Github, href: 'https://github.com/joaocarmopy/joaocarmopy', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/joaocarmopy', label: 'LinkedIn' },
          ].map(s => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              className="p-3 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              title={s.label}
            >
              <s.icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
