import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, MapPin, Github, GraduationCap, Award, Briefcase, TrendingUp, Cpu, Sparkles, FileText, Download, Eye, X, ChevronDown, ArrowRight, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import pydoagroLogo from '@/assets/pydoagro-logo.png';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import SectionHeader from '@/components/SectionHeader';
import BackToHome from '@/components/BackToHome';
import joaocarmo from '@/assets/joaocarmo.jpeg';

/* =================== HERO =================== */
const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] rounded-full blur-[120px] -top-48 -left-48 bg-primary/8 animate-pulse-glow" />
        <div className="absolute w-[400px] h-[400px] rounded-full blur-[100px] -bottom-32 -right-32 bg-accent/6 animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6, type: 'spring', stiffness: 100 }} className="mb-10 relative group mx-auto w-fit">
          <div className="absolute inset-0 bg-agro-gradient rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full p-1 bg-agro-gradient relative z-10 shadow-2xl">
            <div className="w-full h-full rounded-full overflow-hidden bg-background border-4 border-background">
              <div className="w-full h-full rounded-full overflow-hidden bg-background border-4 border-background">
                <img
                  src={joaocarmo}
                  alt="João Paulo Cardoso do Carmo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="max-w-3xl mx-auto space-y-4 mb-10">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-gradient-agro pb-2">
            João Paulo Cardoso do Carmo
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-foreground/80">
            Desenvolvedor IA | Cientista de Dados | Engenheiro Agrônomo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed pt-2">
            Transformando dados em soluções inteligentes através de IA de ponta e ciência de dados. Especialista em unir tecnologia avançada com aplicações práticas no agronegócio.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-wrap justify-center gap-4 mb-16">
          {[
            { label: 'Sobre Mim', id: 'about', primary: true },
            { label: 'Experiência', id: 'experience' },
            { label: 'Educação', id: 'education' },
          ].map((item) => (
            <button key={item.id} onClick={() => scrollTo(item.id)}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 group ${
                item.primary
                  ? 'bg-agro-gradient text-primary-foreground shadow-agro hover:-translate-y-1'
                  : 'bg-secondary text-secondary-foreground border border-border hover:border-primary/50 hover:-translate-y-1'
              }`}>
              {item.label}
              {item.primary && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
            </button>
          ))}
        </motion.div>

        <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} onClick={() => scrollTo('about')} className="animate-bounce text-muted-foreground hover:text-primary transition-colors">
          <ChevronDown size={32} />
        </motion.button>
      </div>
    </section>
  );
};

/* =================== ABOUT =================== */
const AboutSection = () => {
  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'joaocarmo.py@gmail.com', href: 'mailto:joaocarmo.py@gmail.com' },
    { icon: Phone, label: 'Telefone', value: '+55 14 99659-9962', href: 'tel:+5514996599962' },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/joaocarmopy', href: 'https://www.linkedin.com/in/joaocarmopy' },
    { icon: Github, label: 'GitHub', value: 'github.com/joaocarmopy', href: 'https://github.com/joaocarmopy/joaocarmopy' },
    { icon: MapPin, label: 'Localização', value: 'Ribeirão Preto, SP', href: null },
  ];

  return (
    <section id="about" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <SectionHeader title="Sobre Mim" />
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Desenvolvedor de IA e Cientista de Dados apaixonado, com formação em Engenharia Agronômica. Especializado em usar tecnologia a favor do agro.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Com experiência em aprendizado de máquina, aprendizado profundo e análise de dados, transformo conjuntos de dados complexos em insights acionáveis.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Atualmente focado no avanço da pesquisa e desenvolvimento em IA, comprometido em expandir os limites do possível com inteligência artificial e ciência de dados.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="space-y-4">
            {contactInfo.map((item, index) => (
              <motion.div key={item.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-card rounded-lg p-4 border border-border hover:border-primary/40 transition-all duration-300 group">
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4">
                    <div className="p-3 bg-agro-gradient rounded-lg group-hover:scale-110 transition-transform">
                      <item.icon className="text-primary-foreground" size={24} />
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm">{item.label}</p>
                      <p className="text-foreground font-medium break-all">{item.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-agro-gradient rounded-lg group-hover:scale-110 transition-transform">
                      <item.icon className="text-primary-foreground" size={24} />
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm">{item.label}</p>
                      <p className="text-foreground font-medium">{item.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* =================== EDUCATION =================== */
const EducationSection = () => {
  const education = [
    { degree: 'MBA Data Science and Analytics', institution: 'USP/Esalq', period: 'jul 2023 - ago 2025', location: 'EAD', description: 'Estudos avançados em machine learning, análise estatística, big data e business intelligence.', icon: Award },
    { degree: 'Engenharia Agronômica', institution: 'Unisalesiano', period: 'jan 2018 - dez 2022', location: 'Lins, SP', description: 'Bacharelado com foco em práticas agrícolas sustentáveis e integração tecnológica.', icon: GraduationCap },
    { degree: 'Técnico em Edificações', institution: 'Centro Paula Souza', period: 'jul 2016 - dez 2017', location: 'Lins, SP', description: 'Certificação técnica em fundamentos de engenharia.', icon: GraduationCap },
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeader title="Educação" />
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((item, index) => (
            <motion.div key={index} initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.2 }}
              className="bg-card rounded-lg p-6 border border-border hover:border-primary/40 transition-all duration-300 group hover:shadow-agro">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-agro-gradient rounded-lg group-hover:scale-110 transition-transform flex-shrink-0">
                  <item.icon className="text-primary-foreground" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-display font-bold text-foreground mb-2">{item.degree}</h3>
                  <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-3">
                    <span className="text-primary font-medium">{item.institution}</span>
                    <span className="text-muted-foreground">{item.period}</span>
                    <span className="text-muted-foreground md:ml-auto">{item.location}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* =================== EXPERIENCE =================== */
const ExperienceSection = () => {
  const experiences = [
    { title: 'Desenvolvedor IA', company: 'Sigma Geotecnologias', period: 'set 2025 - Atualmente', location: 'Ribeirão Preto, SP', description: 'Desenvolvimento de soluções de IA, criação de modelos de machine learning e automação inteligente.', icon: Sparkles, technologies: ['Python', 'IA', 'Machine Learning', 'Geotecnologias'] },
    { title: 'P&D IA', company: 'Bemagro', period: 'jan 2023 - ago 2025', location: 'Ribeirão Preto, SP', description: 'Pesquisa e desenvolvimento em inteligência artificial aplicada ao agronegócio.', icon: Cpu, technologies: ['P&D', 'Deep Learning', 'Inovação', 'AgTech'] },
    { title: 'Analista de Controle de Dados', company: 'Lins Agroindustrial', period: 'out 2019 - jan 2023', location: 'Lins, SP', description: 'Controle de qualidade de dados, validação de sistemas e relatórios automatizados.', icon: TrendingUp, technologies: ['AutoCAD', 'AgroCAD', 'QGIS', 'Análise de Dados'] },
    { title: 'Jovem Aprendiz', company: 'CAMDA', period: 'abr 2018 - out 2019', location: 'Lins, SP', description: 'Início da carreira profissional, aprendendo processos de negócios e gestão de dados.', icon: Briefcase, technologies: ['Pacote Office', 'Gestão Administrativa'] },
  ];

  return (
    <section id="experience" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <SectionHeader title="Experiência Profissional" />
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-agro-gradient" />
            {experiences.map((exp, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.15 }}
                className="relative mb-12 md:mb-16">
                <div className={`md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-card rounded-lg p-6 border border-border hover:border-primary/40 transition-all duration-300 group hover:shadow-agro">
                      <div className={`flex items-center space-x-3 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <div className="p-2 bg-agro-gradient rounded-lg group-hover:scale-110 transition-transform">
                          <exp.icon className="text-primary-foreground" size={24} />
                        </div>
                        <h3 className="text-xl font-display font-bold text-foreground">{exp.title}</h3>
                      </div>
                      <p className="text-primary font-medium mb-1">{exp.company}</p>
                      <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'} mb-4`}>
                        <p className="text-muted-foreground text-sm">{exp.period}</p>
                        <p className="text-muted-foreground text-sm italic">{exp.location}</p>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-4">{exp.description}</p>
                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        {exp.technologies.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-secondary rounded-full text-xs text-secondary-foreground border border-border">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-agro-gradient rounded-full border-4 border-background z-10" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* =================== CERTIFICATES =================== */
const CertificatesSection = () => {
  const [selectedPdf, setSelectedPdf] = useState<{ name: string; file: string } | null>(null);
  const certificates = [
    { name: 'Semana de Agronomia', institution: 'Evento Acadêmico', year: '2021', file: `${import.meta.env.BASE_URL}certificados/Semana_Agronomia.pdf` },
    { name: 'Python Avançado', institution: 'Curso', year: '2022', file: `${import.meta.env.BASE_URL}certificados/Python_Avancado.pdf` },
    { name: 'Produtividade em Canavial', institution: 'Curso / Pesquisa', year: '2020', file: `${import.meta.env.BASE_URL}certificados/Produtividade_Canavial.pdf` },
    { name: 'Orientação por Satélite', institution: 'Curso', year: '2020', file: `${import.meta.env.BASE_URL}certificados/Orientacao_Satelite.pdf` },
    { name: 'John Deere', institution: 'John Deere', year: '2021', file: `${import.meta.env.BASE_URL}certificados/Jonh_deere.pdf` },
    { name: 'Horus', institution: 'Plataforma / Curso', year: '2021', file: `${import.meta.env.BASE_URL}certificados/Horus.pdf` },
    { name: 'Eu Esri', institution: 'Esri', year: '2022', file: `${import.meta.env.BASE_URL}certificados/EuEsri.pdf` },
    { name: 'AgroHacka', institution: 'Hackathon', year: '2023', file: `${import.meta.env.BASE_URL}certificados/AgroHacka.pdf` },
    { name: 'AgroCAD', institution: 'Curso', year: '2021', file: `${import.meta.env.BASE_URL}certificados/AgroCad.pdf` },
    { name: 'Agricultura Orgânica', institution: 'Curso', year: '2022', file: `${import.meta.env.BASE_URL}certificados/AgriculturaOrganica.pdf` },
    { name: 'Agricultura Sustentável', institution: 'Curso', year: '2022', file: `${import.meta.env.BASE_URL}certificados/Agricultura_Sustentavel.pdf` },
  ];

  return (
    <section id="certificates" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeader title="Certificados" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}
              className="bg-card rounded-lg p-6 border border-border hover:border-primary/40 transition-all duration-300 group hover:shadow-agro flex flex-col">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <FileText size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-foreground leading-tight">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">{cert.institution}</p>
                </div>
              </div>
              <div className="mt-auto pt-4 border-t border-border flex justify-between items-center">
                <span className="text-xs text-muted-foreground">{cert.year}</span>
                <div className="flex space-x-2">
                  <button onClick={() => setSelectedPdf(cert)} className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-colors" title="Visualizar">
                    <Eye size={20} />
                  </button>
                  <a href={cert.file} download className="p-2 text-muted-foreground hover:text-accent hover:bg-accent/10 rounded-lg transition-colors" title="Baixar">
                    <Download size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedPdf && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm" onClick={() => setSelectedPdf(null)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card w-full max-w-4xl h-[80vh] rounded-xl shadow-2xl overflow-hidden flex flex-col border border-border" onClick={e => e.stopPropagation()}>
              <div className="p-4 border-b border-border flex justify-between items-center bg-secondary">
                <h3 className="text-lg font-display font-bold text-foreground">{selectedPdf.name}</h3>
                <button onClick={() => setSelectedPdf(null)} className="p-1 hover:bg-muted rounded-full transition-colors">
                  <X className="text-foreground" />
                </button>
              </div>
              <div className="flex-1 p-1 bg-secondary">
                <iframe src={selectedPdf.file} className="w-full h-full rounded" title={selectedPdf.name} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

/* =================== DIPLOMAS =================== */
const DiplomasSection = () => {
  const [selectedPdf, setSelectedPdf] = useState<{ name: string; file: string } | null>(null);
  const diplomas = [
    { name: 'MBA Data Science', institution: 'USP/Esalq', year: '2025', file: `${import.meta.env.BASE_URL}diplomas/data_science.pdf` },
    { name: 'Diploma de Engenharia Agronômica', institution: 'Unisalesiano', year: '2022', file: `${import.meta.env.BASE_URL}diplomas/Eng_Agronomica.pdf` },
    { name: 'Diploma de Técnico em Edificações', institution: 'Centro Paula Souza', year: '2017', file: `${import.meta.env.BASE_URL}diplomas/Edificacoes.pdf` },
    { name: 'Histórico Ensino Médio', institution: 'Elzira Garbino Pagani', year: '2017', file: `${import.meta.env.BASE_URL}diplomas/Historico_Ensino_Medio.pdf` },
  ];

  return (
    <section id="diplomas" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <SectionHeader title="Diplomas Acadêmicos" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diplomas.map((diploma, index) => (
            <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
              className="bg-card rounded-lg p-6 border border-border hover:border-accent/40 transition-all duration-300 group hover:shadow-agro flex flex-col">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-accent/10 rounded-lg text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-foreground leading-tight">{diploma.name}</h3>
                  <p className="text-sm text-muted-foreground">{diploma.institution}</p>
                </div>
              </div>
              <div className="mt-auto pt-4 border-t border-border flex justify-between items-center">
                <span className="text-xs text-muted-foreground">{diploma.year}</span>
                <div className="flex space-x-2">
                  <button onClick={() => setSelectedPdf(diploma)} className="p-2 text-muted-foreground hover:text-accent hover:bg-accent/10 rounded-lg transition-colors" title="Visualizar">
                    <Eye size={20} />
                  </button>
                  <a href={diploma.file} download className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-colors" title="Baixar">
                    <Download size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedPdf && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm" onClick={() => setSelectedPdf(null)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card w-full max-w-4xl h-[80vh] rounded-xl shadow-2xl overflow-hidden flex flex-col border border-border" onClick={e => e.stopPropagation()}>
              <div className="p-4 border-b border-border flex justify-between items-center bg-secondary">
                <h3 className="text-lg font-display font-bold text-foreground">{selectedPdf.name}</h3>
                <button onClick={() => setSelectedPdf(null)} className="p-1 hover:bg-muted rounded-full transition-colors">
                  <X className="text-foreground" />
                </button>
              </div>
              <div className="flex-1 p-1 bg-secondary">
                <iframe src={selectedPdf.file} className="w-full h-full rounded" title={selectedPdf.name} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

/* =================== FOOTER =================== */
const PortfolioFooter = () => (
  <footer className="border-t border-border py-12 bg-card">
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center space-y-6">
        <div className="flex space-x-6">
          {[
            { icon: Github, href: 'https://github.com/joaocarmopy/joaocarmopy', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/joaocarmopy', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:joaocarmo.py@gmail.com', label: 'Email' },
          ].map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer"
              className="p-3 bg-secondary rounded-lg border border-border hover:border-primary/40 transition-all duration-300 group">
              <social.icon className="text-muted-foreground group-hover:text-primary transition-colors" size={24} />
            </a>
          ))}
        </div>
        <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} João Carmo. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
);

/* =================== HEADER =================== */
const PortfolioHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = [
    { name: 'Sobre', id: 'about' },
    { name: 'Educação', id: 'education' },
    { name: 'Experiência', id: 'experience' },
    { name: 'Certificados', id: 'certificates' },
    { name: 'Diplomas', id: 'diplomas' },
  ];

  useState(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass shadow-lg' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <BackToHome />
            <span className="text-border">|</span>
            <button onClick={() => scrollTo('hero')} className="text-xl font-display font-bold text-gradient-agro hover:scale-105 transition-transform">
              JOÃO CARMO
            </button>
          </div>
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.li key={item.id} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                <button onClick={() => scrollTo(item.id)} className="text-muted-foreground hover:text-foreground transition-colors relative group text-sm">
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-agro-gradient group-hover:w-full transition-all duration-300" />
                </button>
              </motion.li>
            ))}
          </ul>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-foreground hover:text-primary transition-colors">
            {isMobileMenuOpen ? <X size={24} /> : <span className="text-2xl">☰</span>}
          </button>
        </div>
        {isMobileMenuOpen && (
          <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="md:hidden mt-4 space-y-4 bg-card rounded-lg p-4 border border-border">
            {navItems.map((item) => (
              <li key={item.id}>
                <button onClick={() => scrollTo(item.id)} className="text-muted-foreground hover:text-foreground transition-colors block w-full text-left">
                  {item.name}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </nav>
    </motion.header>
  );
};

/* =================== MAIN PAGE =================== */
const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <PortfolioHeader />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <CertificatesSection />
      <DiplomasSection />

      {/* Cross-link to pYdoAgro */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Link to="/pydoagro" className="block group max-w-3xl mx-auto">
              <div className="bg-card rounded-2xl p-8 border border-border hover:border-accent/40 transition-all duration-500 flex items-center justify-between hover:shadow-agro">
                <div className="flex items-center gap-5">
                  <img src={pydoagroLogo} alt="pYdoAgro" className="w-14 h-14 rounded-full" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Conheça também</p>
                    <h3 className="text-xl font-display font-bold text-foreground mb-1">pYdoAgro — Cursos de Tecnologia no Agro</h3>
                    <p className="text-sm text-muted-foreground">Python, IA, Sistematização e muito mais para o agronegócio.</p>
                  </div>
                </div>
                <ArrowRight className="text-accent group-hover:translate-x-2 transition-transform flex-shrink-0 ml-4" size={24} />
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      <PortfolioFooter />
    </div>
  );
};

export default Portfolio;
