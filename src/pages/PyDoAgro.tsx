import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, BookOpen, Code, Cpu, Tractor, Map, Brain, Instagram, Youtube, ExternalLink, Leaf, BarChart3, Zap, Users, Target, Sparkles, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import pydoagroLogo from '@/assets/pydoagro-logo.png';

/* =================== FLOATING PARTICLES =================== */
const FloatingElements = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Animated grain/wheat icons */}
    {[...Array(12)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute text-primary/10"
        initial={{ y: '110vh', x: `${(i * 8) + 5}%`, rotate: 0 }}
        animate={{ y: '-10vh', rotate: 360 }}
        transition={{
          duration: 15 + Math.random() * 10,
          repeat: Infinity,
          delay: i * 1.5,
          ease: 'linear',
        }}
      >
        <Leaf size={16 + Math.random() * 20} />
      </motion.div>
    ))}
    {/* Glowing orbs */}
    <div className="absolute w-[600px] h-[600px] rounded-full blur-[200px] -top-48 left-1/4 bg-primary/6 animate-pulse-glow" />
    <div className="absolute w-[500px] h-[500px] rounded-full blur-[160px] bottom-0 right-1/4 bg-accent/5 animate-pulse-glow" style={{ animationDelay: '2s' }} />
    <div className="absolute w-[300px] h-[300px] rounded-full blur-[120px] top-1/3 right-10 bg-agro-earth/10 animate-pulse-glow" style={{ animationDelay: '4s' }} />
  </div>
);

/* =================== GRID BACKGROUND =================== */
const GridBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
    <div className="absolute inset-0" style={{
      backgroundImage: `
        linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
        linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
      `,
      backgroundSize: '60px 60px',
    }} />
  </div>
);

/* =================== HERO =================== */
const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <FloatingElements />
      <GridBackground />

      <motion.div style={{ y, opacity }} className="container mx-auto px-4 relative z-10 text-center">
        {/* Logo with glow */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 80, damping: 15, duration: 1 }}
          className="relative mx-auto w-fit mb-10"
        >
          <div className="absolute inset-0 bg-agro-gradient rounded-full blur-3xl opacity-30 scale-150 animate-pulse-glow" />
          <motion.img
            src={pydoagroLogo}
            alt="pYdoAgro Logo"
            className="w-36 h-36 md:w-48 md:h-48 rounded-full relative z-10 border-4 border-primary/30 shadow-2xl"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 200 }}
          />
        </motion.div>

        {/* Title with staggered letters */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 backdrop-blur-sm">
            <Sparkles size={14} className="animate-pulse" />
            <span>Tecnologia × Agronegócio</span>
            <Sparkles size={14} className="animate-pulse" />
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-6 leading-none">
            <span className="text-gradient-brand">pY</span>
            <span className="text-foreground">do</span>
            <span className="text-gradient-agro">Agro</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-4 leading-relaxed">
            Domine <span className="text-primary font-semibold">Python</span>, <span className="text-accent font-semibold">Inteligência Artificial</span> e <span className="text-primary font-semibold">Tecnologia</span> aplicados ao campo
          </p>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10">
            Cursos práticos, conteúdo gratuito e uma comunidade que está revolucionando o agronegócio com dados e automação.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <a href="https://www.youtube.com/@pYdoAgro" target="_blank" rel="noopener noreferrer"
            className="group px-8 py-4 rounded-2xl bg-agro-gradient text-primary-foreground font-bold flex items-center gap-3 hover:shadow-agro transition-all duration-500 hover:-translate-y-1 hover:scale-105 text-lg">
            <Youtube size={22} />
            <span>Assistir no YouTube</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="https://www.instagram.com/pydoagro/" target="_blank" rel="noopener noreferrer"
            className="group px-8 py-4 rounded-2xl bg-card text-foreground border-2 border-border font-bold flex items-center gap-3 hover:border-primary/50 transition-all duration-500 hover:-translate-y-1 hover:scale-105 text-lg backdrop-blur-sm">
            <Instagram size={22} />
            <span>Seguir no Instagram</span>
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="animate-bounce text-muted-foreground"
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
};

/* =================== STATS =================== */
const stats = [
  { icon: Youtube, value: 'YouTube', label: 'Conteúdo gratuito toda semana' },
  { icon: Users, value: 'Comunidade', label: 'Agro + Tech crescendo' },
  { icon: BookOpen, value: '6 Cursos', label: 'Em desenvolvimento' },
  { icon: Target, value: '100%', label: 'Focado no Agro' },
];

const StatsSection = () => (
  <section className="py-16 relative overflow-hidden">
    <div className="absolute inset-0 bg-agro-gradient opacity-[0.03]" />
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-center group"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:shadow-agro transition-all duration-500"
            >
              <stat.icon className="text-primary" size={28} />
            </motion.div>
            <p className="text-2xl font-display font-bold text-foreground mb-1">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* =================== ABOUT / MISSION =================== */
const AboutSection = () => (
  <section className="py-24 bg-surface relative overflow-hidden">
    <GridBackground />
    <div className="container mx-auto px-4 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium uppercase tracking-wider mb-6">
            Nossa Missão
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
            Levar tecnologia de ponta para o <span className="text-gradient-agro">campo</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            O agronegócio é o motor do Brasil, mas ainda há um abismo entre a tecnologia disponível e o que se usa na prática. O pYdoAgro nasceu para mudar isso.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Através de cursos práticos, tutoriais no YouTube e conteúdo no Instagram, ensinamos profissionais do agro a usar Python, IA e ferramentas de dados para otimizar operações, reduzir custos e tomar decisões mais inteligentes.
          </p>

          <div className="flex flex-wrap gap-3">
            {['Python', 'Machine Learning', 'QGIS', 'Agricultura de Precisão', 'Automação'].map(tag => (
              <span key={tag} className="px-4 py-2 rounded-xl bg-card border border-border text-sm text-foreground font-medium">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {[
            { icon: Zap, title: 'Conteúdo Prático', desc: 'Nada de teoria pura. Tudo voltado para resolver problemas reais do agro.' },
            { icon: Brain, title: 'IA Aplicada', desc: 'Detecção de pragas, previsão de safra, classificação de imagens por drone.' },
            { icon: BarChart3, title: 'Dados no Campo', desc: 'Dashboards, KPIs agrícolas e tomada de decisão data-driven.' },
            { icon: Tractor, title: 'Maquinário Inteligente', desc: 'Arquivos de operação, GPS, piloto automático e integração com softwares.' },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex gap-5 p-5 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-500 group hover:shadow-agro"
            >
              <div className="w-12 h-12 rounded-xl bg-agro-gradient flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="text-primary-foreground" size={22} />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

/* =================== COURSES =================== */
interface Course {
  title: string;
  description: string;
  icon: React.ElementType;
  topics: string[];
  level: string;
  hotmartLink: string | null;
  badge: string;
}

const courses: Course[] = [
  {
    title: 'Do Zero ao Expert: QGIS Aplicado à Agricultura de Precisão',
    description: 'Domine o QGIS, desde o básico até o avançado.',
    icon: Cpu,
    topics: ['QGIS','Mapas', 'Algorítmos'],
    level: 'Iniciante a Intermediário',
    hotmartLink: "https://go.hotmart.com/I104677939F?dp=1",
    badge: 'Disponível',
  },
  {
    title: 'Do Zero ao Expert: Python Aplicado à Agricultura de Precisão',
    description: 'Aprenda Python do zero com foco em aplicações agrícolas. Automação de planilhas, análise de dados de campo e geração de relatórios.',
    icon: Code,
    topics: ['Fundamentos Python', 'Geopandas', 'Mapas'],
    level: 'Iniciante',
    hotmartLink: null,
    badge: 'Em breve',
  },
  {
    title: 'Inteligência Artificial no Agro',
    description: 'Machine Learning e Deep Learning aplicados à agricultura. Detecção de pragas, previsão de safra e classificação de imagens.',
    icon: Brain,
    topics: ['Machine Learning', 'Visão Computacional'],
    level: 'Intermediário',
    hotmartLink: null,
    badge: 'Em breve',
  },
  {
    title: 'Sistematização e Linhas de Plantio',
    description: 'Domine a sistematização de áreas agrícolas e planejamento de linhas de plantio utilizando softwares especializados.',
    icon: Map,
    topics: ['Linhas de Plantio', 'Sistematização', 'Importação e exportação para os maquinários'],
    level: 'Intermediário',
    hotmartLink: null,
    badge: 'Em breve',
  },
  {
    title: 'Arquivos em Maquinários',
    description: 'Geração e gestão de arquivos para maquinários agrícolas. Integração com GPS e piloto automático.',
    icon: Tractor,
    topics: ['Como exportar arquivos', 'Limitações dos monitores', 'Usando o projeto na prática'],
    level: 'Intermediário',
    hotmartLink: null,
    badge: 'Em breve',
  },
];

const CourseCard = ({ course, index }: { course: Course; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.08, type: 'spring', stiffness: 100 }}
    whileHover={{ y: -8, transition: { duration: 0.3 } }}
    className="bg-card rounded-2xl border border-border hover:border-primary/40 transition-all duration-500 group overflow-hidden flex flex-col hover:shadow-agro"
  >
    {/* Top accent bar with animated gradient */}
    <div className="h-1.5 bg-agro-gradient relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
      />
    </div>

    <div className="p-6 md:p-8 flex flex-col flex-1">
      <div className="flex items-start justify-between mb-5">
        <motion.div
          whileHover={{ rotate: 10, scale: 1.1 }}
          className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:shadow-agro transition-all duration-500"
        >
          <course.icon className="text-primary" size={26} />
        </motion.div>
        <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-accent/10 text-accent border border-accent/20 uppercase tracking-wider">
          {course.badge}
        </span>
      </div>

      <h3 className="text-xl font-display font-bold text-foreground mb-2">{course.title}</h3>
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2 h-2 rounded-full bg-agro-gradient" />
        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Nível: {course.level}</p>
      </div>
      <p className="text-muted-foreground leading-relaxed mb-6 flex-1">{course.description}</p>

      <div className="space-y-3 mb-6">
        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">O que você vai aprender</p>
        <div className="flex flex-wrap gap-2">
          {course.topics.map((topic) => (
            <span key={topic} className="px-3 py-1.5 bg-secondary rounded-xl text-xs text-secondary-foreground border border-border font-medium">
              {topic}
            </span>
          ))}
        </div>
      </div>

      {course.hotmartLink ? (
        <motion.a
          href={course.hotmartLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3.5 px-6 rounded-xl bg-agro-gradient text-primary-foreground font-bold text-center flex items-center justify-center gap-2 hover:shadow-agro transition-all duration-300"
        >
          <span>Comprar Curso</span>
          <ExternalLink size={16} />
        </motion.a>
      ) : (
        <div className="w-full py-3.5 px-6 rounded-xl bg-secondary text-muted-foreground font-medium text-center border border-border cursor-not-allowed">
          🔒 Em breve disponível
        </div>
      )}
    </div>
  </motion.div>
);

const CoursesSection = () => (
  <section className="py-24 relative overflow-hidden">
    <GridBackground />
    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium uppercase tracking-wider mb-6">
          Marketplace
        </span>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
          Cursos <span className="text-gradient-agro">pYdoAgro</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Aprenda na prática com quem trabalha com IA e dados no agro. Cada curso é desenhado para resolver problemas reais.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {courses.map((course, index) => (
          <CourseCard key={course.title} course={course} index={index} />
        ))}
      </div>
    </div>
  </section>
);

/* =================== CONTENT PREVIEW (YouTube) =================== */
const ContentSection = () => (
  <section className="py-24 bg-surface relative overflow-hidden">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium uppercase tracking-wider mb-6">
          Conteúdo Gratuito
        </span>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
          Aprenda grátis no <span className="text-gradient-brand">YouTube</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Toda semana novos vídeos sobre Python, IA e tecnologia aplicada ao agronegócio.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {[
          { title: 'Python do Zero para o Agro', desc: 'Série completa para quem nunca programou. Comece pelo fundamentos e aplique direto no campo.', icon: Code, color: 'primary' },
          { title: 'IA na Prática', desc: 'Detecção de pragas com visão computacional, previsão de safra e modelos preditivos.', icon: Brain, color: 'accent' },
          { title: 'Dicas e Ferramentas', desc: 'QGIS, Google Earth Engine, automações e tudo que você precisa para modernizar suas operações.', icon: Cpu, color: 'primary' },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -5 }}
            className="bg-card rounded-2xl p-8 border border-border hover:border-primary/40 transition-all duration-500 group text-center hover:shadow-agro"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="w-16 h-16 rounded-2xl bg-agro-gradient flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform"
            >
              <item.icon className="text-primary-foreground" size={28} />
            </motion.div>
            <h3 className="text-lg font-display font-bold text-foreground mb-3">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <a href="https://www.youtube.com/@pYdoAgro" target="_blank" rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-agro-gradient text-primary-foreground font-bold hover:shadow-agro transition-all duration-300 hover:-translate-y-1 text-lg">
          <Play size={20} />
          <span>Ver Canal no YouTube</span>
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
    </div>
  </section>
);

/* =================== WHO IS IT FOR =================== */
const AudienceSection = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium uppercase tracking-wider mb-6">
          Para quem é
        </span>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
          Feito para quem vive o <span className="text-gradient-agro">agro</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {[
          { emoji: '🌾', title: 'Engenheiros Agrônomos', desc: 'Que querem adicionar programação e dados ao seu arsenal de ferramentas.' },
          { emoji: '🚜', title: 'Operadores de Máquinas', desc: 'Que precisam entender arquivos de operação, GPS e piloto automático.' },
          { emoji: '📊', title: 'Analistas de Dados', desc: 'Que querem se especializar no setor agrícola e entender o contexto do campo.' },
          { emoji: '🎓', title: 'Estudantes', desc: 'De agronomia, engenharia ou TI que querem se diferenciar no mercado.' },
          { emoji: '💼', title: 'Gestores Rurais', desc: 'Que buscam modernizar processos e tomar decisões baseadas em dados.' },
          { emoji: '🤖', title: 'Entusiastas de IA', desc: 'Que querem aplicar inteligência artificial em problemas reais e impactantes.' },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ scale: 1.03 }}
            className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-agro"
          >
            <span className="text-4xl mb-4 block">{item.emoji}</span>
            <h3 className="font-display font-bold text-foreground mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* =================== CTA =================== */
const CTASection = () => (
  <section className="py-24 bg-surface">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto relative"
      >
        <div className="absolute inset-0 bg-agro-gradient rounded-3xl blur-xl opacity-10" />
        <div className="relative bg-card rounded-3xl p-10 md:p-16 border border-border overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />

          <div className="relative z-10 text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100 }}
              className="w-20 h-20 rounded-full bg-agro-gradient flex items-center justify-center mx-auto mb-8"
            >
              <Leaf className="text-primary-foreground" size={36} />
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
              Pronto para transformar o agro com <span className="text-gradient-agro">tecnologia</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Acompanhe o pYdoAgro nas redes sociais e seja o primeiro a saber quando os cursos estiverem disponíveis.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="https://www.youtube.com/@pYdoAgro"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-2xl bg-agro-gradient text-primary-foreground font-bold flex items-center gap-3 hover:shadow-agro transition-all duration-300 text-lg"
              >
                <Youtube size={22} />
                Inscreva-se
              </motion.a>
              <motion.a
                href="https://www.instagram.com/pydoagro/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-2xl bg-card text-foreground border-2 border-border font-bold flex items-center gap-3 hover:border-primary/50 transition-all duration-300 text-lg"
              >
                <Instagram size={22} />
                Seguir
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

/* =================== CROSS LINK =================== */
const CrossLinkSection = () => (
  <section className="py-16">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Link to="/portfolio" className="block group max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary/40 transition-all duration-500 flex items-center justify-between hover:shadow-agro">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Conheça também</p>
              <h3 className="text-xl font-display font-bold text-foreground mb-1">João Carmo — Portfólio Pessoal</h3>
              <p className="text-sm text-muted-foreground">Minha trajetória profissional, formação e experiências em IA e agronegócio.</p>
            </div>
            <ArrowRight className="text-primary group-hover:translate-x-2 transition-transform flex-shrink-0 ml-4" size={24} />
          </div>
        </Link>
      </motion.div>
    </div>
  </section>
);

/* =================== HEADER =================== */
const PyDoAgroHeader = () => (
  <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border">
    <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
          <span>← Início</span>
        </Link>
        <span className="text-border">|</span>
        <Link to="/pydoagro" className="flex items-center gap-2">
          <img src={pydoagroLogo} alt="pYdoAgro" className="w-8 h-8 rounded-full" />
          <span className="text-lg font-display font-bold text-gradient-brand">pYdoAgro</span>
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <a href="https://www.youtube.com/@pYdoAgro" target="_blank" rel="noopener noreferrer"
          className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
          <Youtube size={20} />
        </a>
        <a href="https://www.instagram.com/pydoagro/" target="_blank" rel="noopener noreferrer"
          className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
          <Instagram size={20} />
        </a>
      </div>
    </nav>
  </header>
);

/* =================== MAIN =================== */
const PyDoAgro = () => {
  return (
    <div className="min-h-screen bg-background">
      <PyDoAgroHeader />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <CoursesSection />
      <ContentSection />
      <AudienceSection />
      <CTASection />
      <CrossLinkSection />

      <footer className="border-t border-border py-8 bg-card">
        <div className="container mx-auto px-4 text-center">
          <img src={pydoagroLogo} alt="pYdoAgro" className="w-10 h-10 rounded-full mx-auto mb-3 opacity-60" />
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} pYdoAgro — por João Carmo. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PyDoAgro;
