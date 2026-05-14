import { Link } from 'react-router-dom';
import {
  Mail, Phone, MapPin, Linkedin, Github, Youtube, Instagram, ArrowRight, ArrowUpRight, Eye, Download,
  GraduationCap, Award, Brain, BarChart3, Sprout,
} from 'lucide-react';
import { Shell, SectionHeader, CyanDiagonal, BG, SURFACE, ELEV, CYAN } from '@/components/pydoagro/Shell';
import { EDUCATION, EXPERIENCE, CERTIFICATES, DIPLOMAS, URLS } from '@/lib/pydoagro-data';
import joaocarmo from '@/assets/joaocarmo.jpeg';

/* ============== HERO ============== */
const SobreHero = () => (
  <section className="relative overflow-hidden" style={{ background: BG }}>
    <CyanDiagonal strength={0.22} />
    <div className="absolute -bottom-32 -right-32 w-[400px] md:w-[500px] h-[400px] md:h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(6,212,240,0.2) 0%, transparent 60%)' }} />

    <div className="relative z-10 px-5 md:px-10 py-10 md:py-14">
      <div className="font-mono text-[11px] md:text-xs text-cyan-300 uppercase tracking-[0.3em] mb-6 md:mb-8 flex items-center gap-3 flex-wrap">
        <span>// profile · /criador</span>
        <span className="h-px w-12 bg-cyan-400/40" />
        <span className="text-slate-500 hidden sm:inline">read-only</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 md:items-end">
        <div className="md:col-span-8">
          <h1 className="font-grotesk font-bold text-white tracking-tight leading-[0.92] text-[44px] sm:text-6xl md:text-7xl lg:text-[96px]">
            João Paulo<br />
            Cardoso<br />
            <span style={{ background: `linear-gradient(135deg, #67e8f9, ${CYAN}, #0891b2)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>do Carmo.</span>
          </h1>
        </div>
        <div className="md:col-span-4">
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-cyan-400/15 max-w-[300px] md:max-w-none">
            <img src={joaocarmo} alt="João Carmo" className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(6,212,240,0.2) 0%, transparent 60%)' }} />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[10px]">
              <span className="px-2 py-1 rounded bg-slate-950/70 border border-cyan-400/30 text-cyan-300">● ATIVO</span>
              <span className="px-2 py-1 rounded bg-slate-950/70 text-white">@joaocarmopy</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl">
        {[
          { Icon: Brain, t: 'Desenvolvedor IA', s: 'Sigma Geotec · atual' },
          { Icon: BarChart3, t: 'Cientista de Dados', s: 'MBA USP/Esalq' },
          { Icon: Sprout, t: 'Eng. Agrônomo', s: 'Unisalesiano' },
        ].map(({ Icon, t, s }) => (
          <div key={t} className="p-4 rounded-xl border border-cyan-400/15 flex items-center gap-3" style={{ background: SURFACE }}>
            <div className="w-10 h-10 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300 flex-shrink-0">
              <Icon size={18} />
            </div>
            <div className="min-w-0">
              <div className="font-grotesk font-bold text-white text-sm truncate">{t}</div>
              <div className="font-mono text-[10px] text-slate-500 truncate">{s}</div>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-6 md:mt-8 text-base md:text-lg text-slate-300 max-w-3xl leading-relaxed">
        Atualmente Desenvolvedor de IA na Sigma Geotecnologias. Antes, 2 anos em P&amp;D de IA na Bemagro. O pYdoAgro nasceu desse cruzamento entre campo, dados e código.
      </p>
    </div>
  </section>
);

/* ============== CONTATO ============== */
const SobreContato = () => {
  const items = [
    { Icon: Mail, l: 'EMAIL', v: 'joaocarmo.py@gmail.com', href: URLS.MAIL },
    { Icon: Phone, l: 'TEL', v: '+55 14 99659-9962', href: URLS.TEL },
    { Icon: MapPin, l: 'LOC', v: 'Ribeirão Preto, SP', href: null as string | null },
    { Icon: Linkedin, l: 'LINKEDIN', v: 'linkedin.com/in/joaocarmopy', href: URLS.LI },
    { Icon: Github, l: 'GITHUB', v: 'github.com/joaocarmopy', href: URLS.GH },
    { Icon: Youtube, l: 'CANAL', v: 'youtube.com/@pYdoAgro', href: URLS.YT },
  ];

  return (
    <section className="relative px-5 md:px-10 py-12 md:py-16 border-t border-cyan-400/[0.08]" style={{ background: BG }}>
      <SectionHeader file="contato.endpoints" num="01" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {items.map(({ Icon, l, v, href }) => {
          const isExternal = !!href && href.startsWith('http');
          return (
            <a key={l} href={href || undefined} target={isExternal ? '_blank' : undefined} rel="noopener noreferrer" className={`group p-4 md:p-5 rounded-xl border border-cyan-400/[0.1] hover:border-cyan-400/30 transition flex items-center gap-4 ${!href ? 'cursor-default' : ''}`} style={{ background: SURFACE }}>
              <div className="w-10 h-10 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300 group-hover:bg-cyan-400 group-hover:text-slate-950 transition flex-shrink-0">
                <Icon size={16} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-mono text-[10px] text-cyan-300/70 uppercase tracking-widest mb-1">{l}</div>
                <div className="text-white font-medium text-sm truncate">{v}</div>
              </div>
              {href && <ArrowUpRight size={14} className="text-slate-600 group-hover:text-cyan-300 transition flex-shrink-0" />}
            </a>
          );
        })}
      </div>
    </section>
  );
};

/* ============== EXPERIÊNCIA ============== */
const SobreExperiencia = () => (
  <section className="relative px-5 md:px-10 py-16 md:py-20 border-t border-cyan-400/[0.08]" style={{ background: BG }}>
    <SectionHeader file="trajetoria.log" num="02" />

    <h2 className="font-grotesk font-bold text-white text-3xl md:text-4xl leading-[1.05] tracking-tight mb-10 md:mb-12">
      sete anos · do campo<br />
      ao <span style={{ color: CYAN }}>terminal</span>.
    </h2>

    <div className="rounded-xl border border-cyan-400/[0.1] overflow-hidden font-mono text-sm" style={{ background: SURFACE }}>
      <div className="px-4 md:px-6 py-3 border-b border-cyan-400/[0.08] flex items-center gap-3 text-xs text-slate-500" style={{ background: ELEV }}>
        <span className="w-2 h-2 rounded-full bg-rose-400/60" />
        <span className="w-2 h-2 rounded-full bg-amber-400/60" />
        <span className="w-2 h-2 rounded-full bg-cyan-400/60" />
        <span className="ml-3 truncate">git log --pretty=trajetoria</span>
      </div>
      <div className="divide-y divide-cyan-400/[0.06]">
        {EXPERIENCE.map((e, i, arr) => (
          <div key={i} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 px-4 md:px-6 py-5 md:py-7 hover:bg-white/[0.015] transition group">
            <div className="md:col-span-2">
              <div className="text-xs text-cyan-300/80">commit · {String(arr.length - i).padStart(2, '0')}</div>
              <div className="text-[11px] text-slate-500 mt-1">{e.period}</div>
              <div className="text-[11px] text-slate-600">{e.location}</div>
            </div>
            <div className="md:col-span-7">
              <div className="font-grotesk text-white font-bold text-lg md:text-xl tracking-tight mb-0.5">{e.title}</div>
              <div className="text-cyan-300 text-sm mb-3">@ {e.company}</div>
              <div className="text-slate-400 leading-relaxed text-[13.5px] max-w-2xl">{e.desc}</div>
            </div>
            <div className="md:col-span-3 flex flex-wrap gap-1 content-start">
              {e.techs.map(t => (
                <span key={t} className="px-2 py-0.5 rounded text-[10px] text-cyan-300/80 border border-cyan-400/15 bg-cyan-400/[0.04] h-fit">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ============== FORMAÇÃO ============== */
const SobreFormacao = () => (
  <section className="relative px-5 md:px-10 py-16 md:py-20 border-t border-cyan-400/[0.08]" style={{ background: SURFACE }}>
    <SectionHeader file="formacao.edu" num="03" />

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10 md:mb-12 lg:items-end">
      <h2 className="lg:col-span-7 font-grotesk font-bold text-white text-3xl md:text-4xl leading-[1.05] tracking-tight">
        três <span style={{ color: CYAN }}>fundações</span><br />
        técnicas que sustentam tudo.
      </h2>
      <div className="lg:col-span-5 lg:pb-1 font-mono text-xs text-slate-400">
        agro · dados · construção
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {EDUCATION.map((e, i) => (
        <div key={i} className="group p-5 md:p-6 rounded-xl border border-cyan-400/[0.1] hover:border-cyan-400/30 transition relative overflow-hidden" style={{ background: BG }}>
          <div className="absolute top-0 left-0 w-12 h-px" style={{ background: CYAN }} />
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <span className="font-mono text-xs text-cyan-300/80">[ ed · {String(i + 1).padStart(2, '0')} ]</span>
            <GraduationCap size={18} className="text-slate-600 group-hover:text-cyan-300 transition" />
          </div>
          <div className="font-grotesk font-bold text-white text-lg mb-2 leading-tight tracking-tight">{e.degree}</div>
          <div className="text-sm text-cyan-300 font-medium">{e.institution}</div>
          <div className="font-mono text-[11px] text-slate-500 mb-1">{e.period}</div>
          <div className="font-mono text-[11px] text-slate-600 mb-5">{e.location}</div>
          <div className="flex flex-wrap gap-1">
            {e.tags.map(t => (
              <span key={t} className="px-2 py-0.5 rounded font-mono text-[10px] text-cyan-300/80 border border-cyan-400/15 bg-cyan-400/[0.04]">{t}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

/* ============== CREDENCIAIS ============== */
const SobreCredenciais = () => (
  <section className="relative px-5 md:px-10 py-16 md:py-20 border-t border-cyan-400/[0.08]" style={{ background: BG }}>
    <SectionHeader file="credenciais.idx" num="04" />

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
      {[
        { v: CERTIFICATES.length, l: 'certificações', s: 'cursos · eventos · parcerias' },
        { v: DIPLOMAS.length, l: 'diplomas oficiais', s: 'técnico · superior · pós' },
        { v: '7+', l: 'anos formação', s: 'contínua desde 2017' },
      ].map(s => (
        <div key={s.l} className="p-5 rounded-xl border border-cyan-400/[0.1] relative overflow-hidden" style={{ background: SURFACE }}>
          <div className="font-grotesk font-bold text-white text-3xl md:text-4xl tracking-tight mb-1">{s.v}</div>
          <div className="font-mono text-[10px] text-cyan-300 uppercase tracking-widest mb-1">{s.l}</div>
          <div className="text-xs text-slate-500">{s.s}</div>
        </div>
      ))}
    </div>

    {/* Diplomas */}
    <div className="mb-8 md:mb-10">
      <div className="font-mono text-xs text-cyan-300/70 uppercase tracking-widest mb-4">/ diplomas oficiais</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {DIPLOMAS.map(d => (
          <div key={d.name} className="p-5 rounded-xl border border-cyan-400/25 relative overflow-hidden group hover:border-cyan-400/50 transition flex flex-col" style={{ background: `linear-gradient(135deg, ${SURFACE} 0%, rgba(6,212,240,0.04) 100%)` }}>
            <div className="absolute top-0 right-0 w-20 h-20 rounded-full -mr-10 -mt-10" style={{ background: 'radial-gradient(circle, rgba(6,212,240,0.12) 0%, transparent 70%)' }} />
            <Award size={20} className="text-cyan-300 mb-4 relative" />
            <div className="font-grotesk font-bold text-white text-sm leading-tight mb-1 relative">{d.name}</div>
            <div className="text-xs text-slate-400 mb-2 relative">{d.inst}</div>
            <div className="font-mono text-[10px] text-cyan-300/80 mb-4 relative">{d.year}</div>
            <div className="mt-auto pt-3 border-t border-cyan-400/[0.1] flex items-center justify-end gap-1 relative">
              <a href={d.file} target="_blank" rel="noopener noreferrer" title="Visualizar" className="w-7 h-7 rounded-md text-slate-400 hover:text-cyan-300 hover:bg-cyan-400/10 transition flex items-center justify-center"><Eye size={13} /></a>
              <a href={d.file} download title="Baixar" className="w-7 h-7 rounded-md text-slate-400 hover:text-cyan-300 hover:bg-cyan-400/10 transition flex items-center justify-center"><Download size={13} /></a>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Certs */}
    <div>
      <div className="font-mono text-xs text-cyan-300/70 uppercase tracking-widest mb-4">/ certificações ({CERTIFICATES.length})</div>

      <div className="hidden md:block rounded-xl border border-cyan-400/[0.1] overflow-hidden" style={{ background: SURFACE }}>
        <div className="grid grid-cols-12 gap-4 px-5 py-2.5 border-b border-cyan-400/[0.08] font-mono text-[10px] text-slate-500 uppercase tracking-widest" style={{ background: ELEV }}>
          <div className="col-span-1">#</div>
          <div className="col-span-6">nome</div>
          <div className="col-span-3">instituição</div>
          <div className="col-span-1">ano</div>
          <div className="col-span-1 text-right">ações</div>
        </div>
        {CERTIFICATES.map((c, i) => (
          <div key={c.name} className="grid grid-cols-12 gap-4 items-center px-5 py-3 border-b border-cyan-400/[0.04] last:border-b-0 hover:bg-white/[0.02] transition group">
            <div className="col-span-1 font-mono text-xs text-cyan-300/70">{String(i + 1).padStart(2, '0')}</div>
            <div className="col-span-6 font-grotesk text-white text-sm font-semibold">{c.name}</div>
            <div className="col-span-3 text-xs text-slate-400">{c.inst}</div>
            <div className="col-span-1 font-mono text-xs text-slate-400">{c.year}</div>
            <div className="col-span-1 flex justify-end gap-1">
              <a href={c.file} target="_blank" rel="noopener noreferrer" title="Visualizar" className="w-7 h-7 rounded-md text-slate-500 hover:text-cyan-300 hover:bg-cyan-400/10 transition flex items-center justify-center"><Eye size={13} /></a>
              <a href={c.file} download title="Baixar" className="w-7 h-7 rounded-md text-slate-500 hover:text-cyan-300 hover:bg-cyan-400/10 transition flex items-center justify-center"><Download size={13} /></a>
            </div>
          </div>
        ))}
      </div>

      <div className="md:hidden flex flex-col gap-2">
        {CERTIFICATES.map((c, i) => (
          <div key={c.name} className="flex items-center gap-3 p-3 rounded-xl border border-cyan-400/[0.1]" style={{ background: SURFACE }}>
            <div className="font-mono text-xs text-cyan-300/70 w-6">{String(i + 1).padStart(2, '0')}</div>
            <div className="flex-1 min-w-0">
              <div className="font-grotesk text-white text-sm font-semibold truncate">{c.name}</div>
              <div className="text-[11px] text-slate-400 truncate">{c.inst} · {c.year}</div>
            </div>
            <div className="flex gap-1 flex-shrink-0">
              <a href={c.file} target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-md text-slate-500 hover:text-cyan-300 hover:bg-cyan-400/10 transition flex items-center justify-center"><Eye size={13} /></a>
              <a href={c.file} download className="w-7 h-7 rounded-md text-slate-500 hover:text-cyan-300 hover:bg-cyan-400/10 transition flex items-center justify-center"><Download size={13} /></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ============== VOLTAR PRA HOME ============== */
const SobreBackToHome = () => (
  <section className="relative px-5 md:px-10 py-16 md:py-20 border-t border-cyan-400/[0.08] overflow-hidden" style={{ background: SURFACE }}>
    <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 20% 100%, rgba(6,212,240,0.18) 0%, transparent 50%)' }} />
    <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:items-center">
      <div className="lg:col-span-7">
        <div className="font-mono text-xs text-cyan-300 uppercase tracking-[0.3em] mb-4">→ cd ../home</div>
        <h2 className="font-grotesk font-bold text-white text-3xl md:text-4xl leading-[1.05] tracking-tight mb-4">
          aprenda comigo<br />no <span style={{ color: CYAN }}>pYdoAgro</span>.
        </h2>
        <p className="text-slate-400 max-w-xl text-sm md:text-base">
          Cursos, aulas no canal e conteúdo gratuito — construídos com o que aplico nos meus projetos.
        </p>
      </div>
      <div className="lg:col-span-5 space-y-2">
        <Link to="/#cursos" className="w-full group flex items-center justify-between p-5 rounded-xl bg-cyan-400 text-slate-950 font-bold hover:bg-cyan-300 transition text-left">
          <span>Ver cursos →</span>
          <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
        </Link>
        <a href={URLS.YT} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-5 rounded-xl border border-cyan-400/30 text-cyan-200 font-semibold hover:bg-cyan-400/10 transition">
          <span>Canal YouTube</span>
          <ArrowUpRight size={18} />
        </a>
      </div>
    </div>
  </section>
);

/* ============== FOOTER (mesma versão da home) ============== */
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
          <li><Link to="/#cursos" className="hover:text-cyan-200 transition">Cursos</Link></li>
          <li><Link to="/#topicos" className="hover:text-cyan-200 transition">O que aprende</Link></li>
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
const Sobre = () => (
  <Shell active="sobre">
    <SobreHero />
    <SobreContato />
    <SobreExperiencia />
    <SobreFormacao />
    <SobreCredenciais />
    <SobreBackToHome />
    <Footer />
  </Shell>
);

export default Sobre;
