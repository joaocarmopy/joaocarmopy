import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Youtube, Instagram, Github, ArrowRight, ArrowUpRight, Lock, Map, Code, Cpu, User,
} from 'lucide-react';
import { Shell, SectionHeader, CyanDiagonal, BG, SURFACE, ELEV, CYAN } from '@/components/pydoagro/Shell';
import { COURSES, STATS, AUDIENCE, MVV, URLS } from '@/lib/pydoagro-data';

/* ============== HERO ============== */
const Hero = () => {
  const [tab, setTab] = useState<keyof typeof MVV>('missao');
  const content = MVV[tab];

  return (
    <section className="relative overflow-hidden" style={{ background: BG }}>
      <CyanDiagonal strength={0.28} />
      <div className="absolute -bottom-40 -right-40 w-[500px] md:w-[700px] h-[500px] md:h-[700px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(6,212,240,0.18) 0%, transparent 60%)' }} />

      <div className="relative z-10 px-5 md:px-10 py-10 md:py-14">
        <div className="flex flex-wrap items-center justify-between mb-8 md:mb-10 font-mono text-[11px] md:text-xs gap-3">
          <div className="flex items-center gap-4 md:gap-6 text-slate-500 flex-wrap">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse" />
              <span className="text-cyan-300">SISTEMA ONLINE</span>
            </span>
            <span className="hidden sm:inline">● última sync 2026-05-14</span>
          </div>
          <div className="flex items-center gap-3 text-slate-500">
            <span>BR-SP</span>
            <span className="text-slate-700">|</span>
            <span>UTC-3</span>
          </div>
        </div>

        {/* Tabs minimal tech */}
        <div className="flex items-center mb-10 md:mb-12 border-b border-cyan-400/[0.1] overflow-x-auto">
          {(Object.entries(MVV) as Array<[keyof typeof MVV, typeof MVV[keyof typeof MVV]]>).map(([key, m]) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`relative px-4 py-2.5 font-mono text-xs uppercase tracking-[0.15em] whitespace-nowrap transition group ${tab === key ? 'text-cyan-300' : 'text-slate-500 hover:text-slate-200'}`}
            >
              <span className={tab === key ? 'text-cyan-400/80' : 'text-slate-700'}>/0{Object.keys(MVV).indexOf(key) + 1}</span>
              <span className="ml-2 lowercase tracking-normal">{m.label.toLowerCase()}</span>
              {tab === key && <span className="absolute left-0 right-0 -bottom-px h-px" style={{ background: CYAN }} />}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 lg:items-end">
          <div className="lg:col-span-9">
            <h1 className="font-grotesk font-bold text-white tracking-tight leading-[0.96] text-[44px] sm:text-6xl md:text-7xl lg:text-[104px]">
              {content.big}<br />
              <span style={{ background: `linear-gradient(135deg, #67e8f9 0%, ${CYAN} 50%, #0891b2 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {content.accent}
              </span>
            </h1>
          </div>
          <div className="lg:col-span-3 lg:pb-4">
            <div className="font-mono text-[10px] text-cyan-300 uppercase tracking-[0.3em] mb-3">[ {content.label.toLowerCase()} ]</div>
            <p className="text-slate-400 leading-relaxed text-sm">{content.sub}</p>
          </div>
        </div>

        <div className="mt-10 md:mt-12 flex flex-col sm:flex-row sm:justify-end items-stretch sm:items-center gap-3">
          <a href={URLS.IG} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-cyan-400 text-slate-950 font-bold text-sm hover:bg-cyan-300 transition">
            <Instagram size={16} />
            Instagram
            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition" />
          </a>
          <a href={URLS.YT} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg border border-cyan-400/20 text-slate-200 font-semibold text-sm hover:bg-white/[0.03] transition">
            <Youtube size={16} />
            Canal
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-12 md:mt-14">
          {STATS.map((s, i) => (
            <div key={s.k} className="relative p-4 md:p-5 rounded-xl border border-cyan-400/[0.1] overflow-hidden" style={{ background: SURFACE }}>
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${CYAN}, transparent)` }} />
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">[ {String(i + 1).padStart(2, '0')} ]</span>
                <span className="font-mono text-[10px] text-cyan-300/70">{s.k}</span>
              </div>
              <div className="font-grotesk font-bold text-white text-3xl md:text-4xl tracking-tight mb-1.5">{s.v}</div>
              <div className="text-xs text-slate-500">{s.sub}</div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full opacity-50" style={{ background: 'radial-gradient(circle, rgba(6,212,240,0.18) 0%, transparent 70%)' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============== TRIPÉ — 3 pilares sustentados por IA ============== */
const Tripe = () => {
  const [active, setActive] = useState<string | null>(null);

  const pillars = [
    { id: 'projetos', n: '/01', t: 'Projetos Agrícolas', d: 'Estruturação de projetos no campo — do briefing à execução em talhão.', tags: ['sistematização', 'linhas de plantio', 'manobras'], Icon: Map },
    { id: 'programacao', n: '/02', t: 'Programação p/ Agricultura', d: 'Linguagens que viram ferramenta no agro — script, automação e integração.', tags: ['javascript', 'python'], Icon: Code },
    { id: 'softwares', n: '/03', t: 'Softwares do Agro', d: 'As ferramentas que rodam no escritório e no monitor da máquina.', tags: ['qgis', '4gis', 'google earth'], Icon: Cpu },
  ];

  return (
    <section id="topicos" className="relative border-t border-cyan-400/[0.08] px-5 md:px-10 py-16 md:py-24 scroll-mt-20 overflow-hidden" style={{ background: BG }}>
      <CyanDiagonal strength={0.1} />

      <div className="relative">
        <div className="flex items-baseline gap-6 mb-10 md:mb-12">
          <span className="font-mono text-[11px] md:text-xs text-cyan-300 uppercase tracking-[0.3em]">[ módulo · 02 ]</span>
          <span className="font-mono text-xs text-slate-500 hidden md:inline">tripe.diagram</span>
          <div className="h-px flex-1 bg-cyan-400/[0.1]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 mb-10 md:mb-14 lg:items-end">
          <h2 className="lg:col-span-7 font-grotesk font-bold text-white text-4xl md:text-5xl leading-[1.05] tracking-tight">
            o tripé <span style={{ color: CYAN }}>técnico</span><br />
            do pYdoAgro.
          </h2>
          <p className="lg:col-span-5 text-slate-400 max-w-md text-sm leading-relaxed lg:pb-2">
            Três pilares de atuação — projetos no campo, código e softwares — sustentados por uma base única de <span className="text-cyan-300 font-semibold">Inteligência Artificial</span>. É a IA que conecta as três frentes e diferencia o pYdoAgro.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 relative z-10">
            {pillars.map(({ id, n, t, d, tags, Icon }) => {
              const isActive = active === id;
              return (
                <button
                  key={id}
                  onMouseEnter={() => setActive(id)}
                  onMouseLeave={() => setActive(null)}
                  onClick={() => setActive(isActive ? null : id)}
                  className={`group relative p-5 md:p-6 rounded-2xl border transition text-left overflow-hidden ${isActive ? 'border-cyan-400/50' : 'border-cyan-400/[0.12] hover:border-cyan-400/30'}`}
                  style={{ background: isActive ? `linear-gradient(135deg, ${SURFACE} 0%, rgba(6,212,240,0.08) 100%)` : SURFACE }}
                >
                  <div className="absolute top-0 left-0 w-16 h-px" style={{ background: CYAN }} />
                  <div className="flex items-start justify-between mb-5">
                    <span className="font-mono text-sm text-cyan-300">{n}</span>
                    <div className={`w-11 h-11 rounded-lg border flex items-center justify-center transition ${isActive ? 'bg-cyan-400 text-slate-950 border-cyan-400' : 'bg-cyan-400/10 text-cyan-300 border-cyan-400/20'}`}>
                      <Icon size={18} />
                    </div>
                  </div>
                  <div className="font-grotesk font-bold text-white text-xl md:text-[22px] tracking-tight mb-2 leading-tight">{t}</div>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">{d}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {tags.map(tg => (
                      <span key={tg} className="px-2.5 py-1 rounded font-mono text-[10px] text-cyan-300/80 border border-cyan-400/15 bg-cyan-400/[0.04]">{tg}</span>
                    ))}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Connectors — desktop */}
          <div className="hidden md:block relative h-20 -mt-2 -mb-2 pointer-events-none">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 80" preserveAspectRatio="none">
              <defs>
                <linearGradient id="connGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={CYAN} stopOpacity="0.05" />
                  <stop offset="100%" stopColor={CYAN} stopOpacity="0.5" />
                </linearGradient>
              </defs>
              <path d="M 200 0 Q 200 40, 600 80" stroke="url(#connGrad)" strokeWidth="1.5" fill="none" />
              <path d="M 600 0 L 600 80" stroke="url(#connGrad)" strokeWidth="1.5" fill="none" />
              <path d="M 1000 0 Q 1000 40, 600 80" stroke="url(#connGrad)" strokeWidth="1.5" fill="none" />
              {[
                { path: 'M 200 0 Q 200 40, 600 80', delay: 0 },
                { path: 'M 200 0 Q 200 40, 600 80', delay: 0.9 },
                { path: 'M 600 0 L 600 80', delay: 0.3 },
                { path: 'M 600 0 L 600 80', delay: 1.2 },
                { path: 'M 1000 0 Q 1000 40, 600 80', delay: 0.6 },
                { path: 'M 1000 0 Q 1000 40, 600 80', delay: 1.5 },
              ].map((d, i) => (
                <circle key={i} r="3" fill={CYAN}>
                  <animateMotion dur="2.4s" begin={`${d.delay}s`} repeatCount="indefinite" path={d.path} />
                  <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.85;1" dur="2.4s" begin={`${d.delay}s`} repeatCount="indefinite" />
                </circle>
              ))}
            </svg>
          </div>

          <div className="md:hidden h-6 flex items-center justify-center">
            <div className="w-px h-full bg-gradient-to-b from-transparent to-cyan-400/50" />
          </div>

          {/* IA base */}
          <button
            onMouseEnter={() => setActive('ia')}
            onMouseLeave={() => setActive(null)}
            className={`group relative w-full rounded-2xl border transition overflow-hidden text-left ${active === 'ia' ? 'border-cyan-400/60' : 'border-cyan-400/30'}`}
            style={{ background: `linear-gradient(135deg, ${SURFACE} 0%, rgba(6,212,240,0.12) 100%)` }}
          >
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${CYAN}, transparent)` }} />
            <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(6,212,240,0.18) 0%, transparent 60%)' }} />

            <div className="relative p-6 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
              <div className="md:col-span-7">
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <span className="font-mono text-[10px] text-cyan-300 uppercase tracking-[0.3em] px-2.5 py-1 rounded bg-cyan-400/10 border border-cyan-400/30">/ BASE · sustenta o tripé</span>
                  <span className="font-mono text-sm text-cyan-300/70">/00</span>
                </div>
                <div className="font-grotesk font-bold text-white text-3xl md:text-[44px] tracking-tight mb-4 leading-[1.02]">
                  Inteligência<br className="hidden md:inline" />
                  <span style={{ background: `linear-gradient(135deg, #67e8f9, ${CYAN}, #0891b2)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}> Artificial</span>
                </div>
                <p className="text-slate-300 leading-relaxed max-w-xl text-sm md:text-base">
                  Machine Learning, Visão Computacional e Deep Learning aplicados — a fundação que une projetos agrícolas, código e software num só fluxo. É a IA que torna tudo realmente útil no campo.
                </p>
              </div>

              <div className="md:col-span-5">
                <div className="grid grid-cols-2 gap-2">
                  {['Detecção de pragas', 'Classificação por drone', 'Segmentação de imagens', 'NDVI & multiespectral', 'Modelos customizados', 'Mapeamento por satélite'].map(l => (
                    <div key={l} className="flex items-center gap-2 px-3 py-2.5 rounded-lg border border-cyan-400/15" style={{ background: BG }}>
                      <span className="text-cyan-300 text-xs">◆</span>
                      <span className="font-mono text-[11px] text-slate-300 leading-tight">{l}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

/* ============== CURSOS ============== */
const Cursos = () => {
  const availableLink = COURSES.find(c => c.available)?.hotmart || '#';

  return (
    <section id="cursos" className="relative px-5 md:px-10 py-16 md:py-20 border-t border-cyan-400/[0.08] scroll-mt-20" style={{ background: BG }}>
      <SectionHeader file="catalogo.json" num="03" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:items-end mb-8 md:mb-10">
        <h2 className="lg:col-span-7 font-grotesk font-bold text-white text-4xl md:text-5xl leading-[1.05] tracking-tight">
          catálogo · <span style={{ color: CYAN }}>6 cursos</span>,<br />
          um único foco: <span className="text-slate-400">aplicar.</span>
        </h2>
        <div className="lg:col-span-5 flex items-center lg:justify-end gap-3 lg:pb-2 flex-wrap">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-md font-mono text-xs border border-cyan-400/30 bg-cyan-400/10 text-cyan-200">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-300" />
            1 feito
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-md font-mono text-xs border border-cyan-400/[0.1] bg-white/[0.02] text-slate-400">
            <Lock size={11} />
            5 em breve
          </div>
        </div>
      </div>

      <p className="text-sm text-slate-400 mb-6 max-w-2xl">
        Clique em qualquer linha pra acessar — cursos disponíveis vão direto pra Hotmart, os próximos abrem o aviso de lançamento.
      </p>

      {/* Desktop table */}
      <div className="hidden md:block rounded-xl border border-cyan-400/[0.1] overflow-hidden" style={{ background: SURFACE }}>
        <div className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-cyan-400/[0.08] font-mono text-[10px] text-slate-500 uppercase tracking-widest" style={{ background: ELEV }}>
          <div className="col-span-1">cód</div>
          <div className="col-span-5">curso</div>
          <div className="col-span-3">stack</div>
          <div className="col-span-2">nível</div>
          <div className="col-span-1 text-right">status</div>
        </div>
        {COURSES.map(c => (
          <a
            key={c.code}
            href={c.available ? c.hotmart : '#'}
            target={c.available ? '_blank' : '_self'}
            rel="noopener noreferrer"
            className="group grid grid-cols-12 gap-4 items-center px-6 py-5 border-b border-cyan-400/[0.05] last:border-b-0 hover:bg-cyan-400/[0.04] transition cursor-pointer"
          >
            <div className="col-span-1 font-mono text-xs text-cyan-300/80">{c.code}</div>
            <div className="col-span-5">
              <div className="font-grotesk font-bold text-white text-base mb-0.5 group-hover:text-cyan-200 transition flex items-center gap-2">
                {c.title}
                {c.available && <ArrowUpRight size={14} className="text-cyan-300 opacity-0 group-hover:opacity-100 transition" />}
              </div>
              <div className="text-xs text-slate-500 leading-snug">{c.desc.slice(0, 110)}…</div>
            </div>
            <div className="col-span-3 flex flex-wrap gap-1">
              {c.topics.map(t => (
                <span key={t} className="px-2 py-0.5 rounded font-mono text-[10px] text-cyan-300/80 border border-cyan-400/15 bg-cyan-400/[0.04]">{t}</span>
              ))}
            </div>
            <div className="col-span-2 text-xs text-slate-400 font-mono">{c.level}</div>
            <div className="col-span-1 flex justify-end">
              {c.available ? (
                <span className="px-2.5 py-1 rounded font-mono text-[10px] uppercase tracking-widest bg-cyan-400 text-slate-950 font-bold">feito</span>
              ) : (
                <span className="px-2.5 py-1 rounded font-mono text-[10px] uppercase tracking-widest border border-slate-700 text-slate-500">soon</span>
              )}
            </div>
          </a>
        ))}
      </div>

      {/* Mobile cards */}
      <div className="md:hidden flex flex-col gap-3">
        {COURSES.map(c => (
          <a
            key={c.code}
            href={c.available ? c.hotmart : '#'}
            target={c.available ? '_blank' : '_self'}
            rel="noopener noreferrer"
            className="group p-4 rounded-xl border border-cyan-400/[0.1] hover:border-cyan-400/30 transition relative"
            style={{ background: SURFACE }}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs text-cyan-300/80">{c.code}</span>
              {c.available ? (
                <span className="px-2 py-0.5 rounded font-mono text-[10px] uppercase tracking-widest bg-cyan-400 text-slate-950 font-bold">feito</span>
              ) : (
                <span className="px-2 py-0.5 rounded font-mono text-[10px] uppercase tracking-widest border border-slate-700 text-slate-500">soon</span>
              )}
            </div>
            <div className="font-grotesk font-bold text-white text-base mb-1.5 leading-tight">{c.title}</div>
            <div className="text-xs text-slate-500 leading-snug mb-3">{c.desc.slice(0, 100)}…</div>
            <div className="flex flex-wrap gap-1 mb-3">
              {c.topics.map(t => (
                <span key={t} className="px-2 py-0.5 rounded font-mono text-[10px] text-cyan-300/80 border border-cyan-400/15 bg-cyan-400/[0.04]">{t}</span>
              ))}
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-cyan-400/[0.06] font-mono text-[11px]">
              <span className="text-slate-500">{c.level}</span>
              {c.available && <span className="text-cyan-300 flex items-center gap-1">acessar <ArrowUpRight size={11} /></span>}
            </div>
          </a>
        ))}
      </div>

      <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-xs text-slate-500">
        <span>● 6 entradas · atualizado 2026-05</span>
        <a href={availableLink} target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 transition">
          ir pra Hotmart →
        </a>
      </div>
    </section>
  );
};

/* ============== AUDIÊNCIA ============== */
const Audiencia = () => (
  <section className="relative px-5 md:px-10 py-16 md:py-20 border-t border-cyan-400/[0.08]" style={{ background: BG }}>
    <SectionHeader file="público.csv" num="04" />

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8 md:mb-10 lg:items-end">
      <h2 className="lg:col-span-7 font-grotesk font-bold text-white text-4xl md:text-5xl leading-[1.05] tracking-tight">
        feito pra<br />quem <span style={{ color: CYAN }}>aplica</span>.
      </h2>
      <p className="lg:col-span-5 text-slate-400 max-w-md text-sm leading-relaxed">
        Conteúdo cru — sem teoria de sala de aula. Pra quem precisa que funcione no monitor da máquina e no laptop do escritório.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {AUDIENCE.map(a => (
        <div key={a.tag} className="group p-5 md:p-6 rounded-xl border border-cyan-400/[0.08] hover:border-cyan-400/30 transition relative overflow-hidden" style={{ background: SURFACE }}>
          <div className="flex items-center justify-between mb-5 md:mb-6">
            <span className="font-mono text-xs text-cyan-300">[ {a.tag} ]</span>
            <User size={16} className="text-slate-600 group-hover:text-cyan-300 transition" />
          </div>
          <div className="font-grotesk font-bold text-white text-lg md:text-xl mb-2 tracking-tight">{a.title}</div>
          <p className="text-sm text-slate-400 leading-relaxed">{a.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

/* ============== CTA ============== */
const CTA = () => (
  <section className="relative px-5 md:px-10 py-16 md:py-24 border-t border-cyan-400/[0.08] overflow-hidden" style={{ background: BG }}>
    <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 80% 100%, rgba(6,212,240,0.2) 0%, transparent 50%)' }} />
    <div className="relative rounded-2xl md:rounded-3xl border border-cyan-400/20 p-6 md:p-14 overflow-hidden" style={{ background: SURFACE }}>
      <CyanDiagonal strength={0.18} />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:items-center">
        <div className="lg:col-span-7">
          <div className="font-mono text-xs text-cyan-300 uppercase tracking-[0.3em] mb-4 md:mb-5 flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse" />
            próximo deploy
          </div>
          <h2 className="font-grotesk font-bold text-white text-3xl md:text-5xl leading-[1.05] tracking-tight mb-4 md:mb-5">
            init pYdoAgro<br />
            <span style={{ background: `linear-gradient(135deg, #67e8f9, ${CYAN}, #0891b2)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>—help</span>
          </h2>
          <p className="text-slate-400 max-w-xl text-sm md:text-base">
            Inscreve no canal, segue no Instagram e bota o curso de QGIS no carrinho. Tudo construído pra você aplicar amanhã.
          </p>
        </div>
        <div className="lg:col-span-5 space-y-3">
          <a href={URLS.IG} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-4 md:p-5 rounded-xl bg-cyan-400 text-slate-950 font-bold hover:bg-cyan-300 transition">
            <span className="flex items-center gap-3"><Instagram size={18} />Seguir no Instagram</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
          </a>
          <a href={URLS.YT} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-4 md:p-5 rounded-xl border border-cyan-400/30 text-cyan-200 font-semibold hover:bg-cyan-400/10 transition">
            <span className="flex items-center gap-3"><Youtube size={18} />Canal no YouTube</span>
            <ArrowUpRight size={18} />
          </a>
          <a href={URLS.GH} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-4 md:p-5 rounded-xl border border-cyan-400/15 text-slate-300 hover:border-cyan-400/30 hover:text-white transition">
            <span className="flex items-center gap-3"><Github size={18} />GitHub @joaocarmopy</span>
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </div>
  </section>
);

/* ============== FOOTER ============== */
const Footer = () => (
  <footer className="relative border-t border-cyan-400/[0.08] px-5 md:px-10 py-10" style={{ background: SURFACE }}>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 mb-8">
      <div className="lg:col-span-5">
        <div className="flex items-center gap-3 mb-3">
          <img src="/fotos/pydoagro.png" alt="pYdoAgro" className="w-10 h-10 rounded-lg" onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
          <div className="font-grotesk font-bold text-white text-lg">pYdoAgro</div>
        </div>
        <p className="text-sm text-slate-400 max-w-sm">Tecnologia, Python e IA aplicados ao agro. Construído por João Carmo.</p>
      </div>
      <div className="lg:col-span-2">
        <div className="font-mono text-[10px] text-cyan-300/70 uppercase tracking-widest mb-3">Site</div>
        <ul className="flex flex-col gap-2 text-sm text-slate-400">
          <li><a href="#cursos" className="hover:text-cyan-200 transition">Cursos</a></li>
          <li><a href="#topicos" className="hover:text-cyan-200 transition">O que aprende</a></li>
          <li><Link to="/sobre" className="hover:text-cyan-200 transition">Sobre o criador</Link></li>
        </ul>
      </div>
      <div className="lg:col-span-2">
        <div className="font-mono text-[10px] text-cyan-300/70 uppercase tracking-widest mb-3">Canais</div>
        <ul className="flex flex-col gap-2 text-sm text-slate-400">
          <li><a href={URLS.YT} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-200 transition">YouTube</a></li>
          <li><a href={URLS.IG} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-200 transition">Instagram</a></li>
          <li><a href={URLS.GH} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-200 transition">GitHub</a></li>
          <li><a href={URLS.LI} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-200 transition">LinkedIn</a></li>
        </ul>
      </div>
      <div className="lg:col-span-3">
        <div className="font-mono text-[10px] text-cyan-300/70 uppercase tracking-widest mb-3">Contato</div>
        <ul className="flex flex-col gap-2 text-sm text-slate-400">
          <li><a href={URLS.MAIL} className="hover:text-cyan-200 transition break-all">joaocarmo.py@gmail.com</a></li>
          <li><a href={URLS.TEL} className="hover:text-cyan-200 transition">+55 14 99659-9962</a></li>
          <li>Ribeirão Preto, SP</li>
        </ul>
      </div>
    </div>
    <div className="pt-6 border-t border-cyan-400/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 font-mono text-xs text-slate-500">
      <div>© 2026 pYdoAgro</div>
      <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> v.2026.05 · cyan</div>
    </div>
  </footer>
);

/* ============== PÁGINA ============== */
const Index = () => (
  <Shell active="home">
    <Hero />
    <Tripe />
    <Cursos />
    <Audiencia />
    <CTA />
    <Footer />
  </Shell>
);

export default Index;
