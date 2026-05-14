import { useState, type ReactNode } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  LayoutGrid, Sparkles, BookOpen, User, Youtube, Instagram, Github, Linkedin, Menu,
} from 'lucide-react';
import pydoagroLogo from '@/assets/pydoagro-logo.png';
import { URLS } from '@/lib/pydoagro-data';

// Paleta cyan (espelha CSS vars)
export const BG = '#0a131c';
export const SURFACE = '#0e1924';
export const ELEV = '#142231';
export const CYAN = '#06d4f0';

type ShellProps = {
  children: ReactNode;
  active: 'home' | 'sobre';
};

/**
 * Layout principal do pYdoAgro: sidebar fixa no desktop, drawer no mobile.
 * Navegação combina rotas (home /, sobre /sobre) e scroll para seções dentro da home.
 */
export const Shell = ({ children, active }: ShellProps) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const handleNavItem = (id: string) => {
    setDrawerOpen(false);
    if (id === 'home') {
      if (location.pathname !== '/') navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (id === 'sobre') {
      if (location.pathname !== '/sobre') navigate('/sobre');
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    } else {
      // section anchor within home
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => scrollToSection(id), 50);
      } else {
        scrollToSection(id);
      }
    }
  };

  const navItems: [string, string, typeof LayoutGrid][] = [
    ['home', 'Home', LayoutGrid],
    ['topicos', 'O que aprende', Sparkles],
    ['cursos', 'Cursos', BookOpen],
    ['sobre', 'Sobre o criador', User],
  ];

  const channels: [string, typeof Youtube, string][] = [
    [URLS.YT, Youtube, 'YouTube'],
    [URLS.IG, Instagram, 'Instagram'],
    [URLS.GH, Github, 'GitHub'],
    [URLS.LI, Linkedin, 'LinkedIn'],
  ];

  return (
    <div className="flex font-grotesk antialiased text-slate-100 min-h-screen relative" style={{ background: BG }}>
      {drawerOpen && (
        <div onClick={() => setDrawerOpen(false)} className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden" />
      )}

      <aside
        className={`fixed md:sticky top-0 left-0 z-50 md:z-10 w-[280px] md:w-[260px] flex-shrink-0 border-r border-cyan-400/[0.08] self-start h-screen overflow-y-auto transition-transform duration-300 md:translate-x-0 ${drawerOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
        style={{ background: SURFACE }}
      >
        <button onClick={() => handleNavItem('home')} className="w-full text-left p-6 border-b border-cyan-400/[0.08] hover:bg-white/[0.02] transition">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img src={pydoagroLogo} alt="pYdoAgro" className="w-10 h-10 rounded-lg" />
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2" style={{ background: CYAN, borderColor: SURFACE }} />
            </div>
            <div className="leading-tight">
              <div className="font-grotesk font-bold text-white text-base">pYdoAgro</div>
              <div className="font-mono text-[10px] text-cyan-300/70 uppercase tracking-widest mt-0.5">studio · 2026</div>
            </div>
          </div>
        </button>

        <div className="p-4">
          <div className="font-mono text-[10px] text-slate-500 uppercase tracking-widest px-3 mb-3">Navegação</div>
          <nav className="flex flex-col gap-1">
            {navItems.map(([id, label, Icon]) => {
              const isActive = active === id;
              return (
                <button
                  key={id}
                  onClick={() => handleNavItem(id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition text-left ${
                    isActive
                      ? 'bg-cyan-400/10 text-cyan-200 border border-cyan-400/20'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.03] border border-transparent'
                  }`}
                >
                  <Icon size={15} />
                  {label}
                  {isActive && <span className="ml-auto w-1 h-4 rounded-full" style={{ background: CYAN }} />}
                </button>
              );
            })}
          </nav>

          <div className="font-mono text-[10px] text-slate-500 uppercase tracking-widest px-3 mt-8 mb-3">Canais</div>
          <nav className="flex flex-col gap-1">
            {channels.map(([href, Icon, label]) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-white/[0.03] transition group">
                <Icon size={14} />
                <span className="flex-1">{label}</span>
                <span className="font-mono text-[10px] text-slate-600 group-hover:text-cyan-300">↗</span>
              </a>
            ))}
          </nav>
        </div>
      </aside>

      <main className="flex-1 min-w-0">
        <div className="sticky top-0 z-30 flex items-center justify-between px-4 md:px-8 py-3 md:py-4 border-b border-cyan-400/[0.08] backdrop-blur-md" style={{ background: 'rgba(10,19,28,0.85)' }}>
          <div className="flex items-center gap-3">
            <button onClick={() => setDrawerOpen(true)} className="md:hidden w-9 h-9 rounded-lg border border-cyan-400/20 flex items-center justify-center text-cyan-300 hover:bg-cyan-400/10 transition" aria-label="Abrir menu">
              <Menu size={18} />
            </button>
            <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
              <button onClick={() => handleNavItem('home')} className="text-slate-500 hover:text-cyan-300 transition hidden sm:inline">~</button>
              <span className="hidden sm:inline">pYdoAgro</span>
              <span className="text-slate-600 hidden sm:inline">/</span>
              <span className="text-cyan-300">{active === 'sobre' ? 'sobre-o-criador' : 'home'}</span>
            </div>
          </div>
          <a href={URLS.YT} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg bg-cyan-400 text-slate-950 font-bold text-xs md:text-sm hover:bg-cyan-300 transition">
            <Youtube size={14} />
            <span className="hidden sm:inline">Inscrever-se</span>
            <span className="sm:hidden">YT</span>
          </a>
        </div>

        {children}
      </main>
    </div>
  );
};

// ============== Helpers shared by sections ==============

export const SectionHeader = ({ file, num }: { file: string; num: string }) => (
  <div className="flex items-baseline gap-4 md:gap-6 mb-10 md:mb-12">
    <span className="font-mono text-[11px] md:text-xs text-cyan-300 uppercase tracking-[0.3em]">[ módulo · {num} ]</span>
    <span className="font-mono text-xs text-slate-500 hidden md:inline">{file}</span>
    <div className="h-px flex-1 bg-cyan-400/[0.1]" />
  </div>
);

/** Linear cyan diagonal — usado como wash de seções */
export const CyanDiagonal = ({ strength = 0.18 }: { strength?: number }) => (
  <div className="absolute inset-0 pointer-events-none" style={{
    background: `linear-gradient(135deg, rgba(6,212,240,0) 0%, rgba(6,212,240,0) 40%, rgba(6,212,240,${strength}) 100%)`,
  }} />
);
