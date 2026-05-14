// Dados estáticos do pYdoAgro — usados pelas páginas e seções.

export type Course = {
  code: string;
  title: string;
  tagline: string;
  desc: string;
  topics: string[];
  level: string;
  available: boolean;
  hotmart?: string;
};

export const COURSES: Course[] = [
  {
    code: 'QGIS-01',
    title: 'QGIS Aplicado à Agricultura de Precisão',
    tagline: 'Do zero ao expert',
    desc: 'Domine o QGIS, do básico ao avançado. Mapas, geoprocessamento e fluxos para agricultura de precisão.',
    topics: ['QGIS', 'Mapas', 'Algoritmos'],
    level: 'Iniciante → Avançado',
    available: true,
    hotmart: 'https://go.hotmart.com/I104677939F?dp=1',
  },
  {
    code: 'PY-02',
    title: 'Python Aplicado à Agricultura de Precisão',
    tagline: 'Do zero ao expert',
    desc: 'Aprenda Python com foco no agro. Automação de planilhas, análise de dados de campo e relatórios.',
    topics: ['Python', 'Geopandas', 'Automação'],
    level: 'Iniciante',
    available: false,
  },
  {
    code: 'IA-03',
    title: 'Inteligência Artificial no Agro',
    tagline: 'ML & Visão Computacional',
    desc: 'Machine Learning e Deep Learning aplicados à agricultura. Detecção de pragas e segmentação de imagens.',
    topics: ['ML', 'Visão Comp.', 'Deep Learning'],
    level: 'Intermediário',
    available: false,
  },
  {
    code: 'SLP-04',
    title: 'Sistematização e Linhas de Plantio',
    tagline: 'Planejamento avançado',
    desc: 'Sistematização de áreas e planejamento de linhas de plantio com softwares especializados.',
    topics: ['Linhas', 'Sistematização', 'Importação'],
    level: 'Intermediário',
    available: false,
  },
  {
    code: 'ARQ-05',
    title: 'Arquivos em Maquinários',
    tagline: 'GPS & piloto automático',
    desc: 'Geração e gestão de arquivos para maquinários. Integração com GPS e monitores embarcados.',
    topics: ['GPS', 'Monitores', 'Prática'],
    level: 'Intermediário',
    available: false,
  },
  {
    code: 'DR-06',
    title: 'Drones na Agricultura',
    tagline: 'Coleta & análise',
    desc: 'Planejamento de voo, processamento de imagens RGB/multiespectrais e geração de mapas.',
    topics: ['Drones', 'Ortomosaico', 'NDVI'],
    level: 'Intermediário',
    available: false,
  },
];

export const EDUCATION = [
  { degree: 'MBA Data Science and Analytics', institution: 'USP / Esalq', period: '2023 — 2025', location: 'EAD', tags: ['ML', 'Big Data', 'BI'] },
  { degree: 'Engenharia Agronômica', institution: 'Unisalesiano', period: '2018 — 2022', location: 'Lins, SP', tags: ['Bacharelado', 'AgTech'] },
  { degree: 'Técnico em Edificações', institution: 'Centro Paula Souza', period: '2016 — 2017', location: 'Lins, SP', tags: ['Técnico'] },
];

export const EXPERIENCE = [
  {
    title: 'Desenvolvedor IA',
    company: 'Sigma Geotecnologias',
    period: 'set 2025 — atual',
    location: 'Ribeirão Preto, SP',
    desc: 'Desenvolvimento de soluções de IA, modelos de machine learning e automação inteligente em geotecnologias.',
    techs: ['Python', 'IA', 'Machine Learning', 'Geotec'],
  },
  {
    title: 'P&D em IA',
    company: 'Bemagro',
    period: 'jan 2023 — ago 2025',
    location: 'Ribeirão Preto, SP',
    desc: 'Pesquisa e desenvolvimento de inteligência artificial aplicada ao agronegócio.',
    techs: ['P&D', 'Deep Learning', 'AgTech'],
  },
  {
    title: 'Analista de Controle de Dados',
    company: 'Lins Agroindustrial',
    period: 'out 2019 — jan 2023',
    location: 'Lins, SP',
    desc: 'Controle de qualidade de dados, validação de sistemas e relatórios automatizados.',
    techs: ['AutoCAD', 'AgroCAD', 'QGIS', 'Dados'],
  },
  {
    title: 'Jovem Aprendiz',
    company: 'CAMDA',
    period: 'abr 2018 — out 2019',
    location: 'Lins, SP',
    desc: 'Início da carreira aprendendo processos de negócios e gestão administrativa de dados.',
    techs: ['Office', 'Gestão'],
  },
];

const BASE_PUBLIC = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const CERTIFICATES = [
  { name: 'Semana de Agronomia', inst: 'Evento Acadêmico', year: '2021', file: BASE_PUBLIC('certificados/Semana_Agronomia.pdf') },
  { name: 'Python Avançado', inst: 'Curso', year: '2022', file: BASE_PUBLIC('certificados/Python_Avancado.pdf') },
  { name: 'Produtividade em Canavial', inst: 'Pesquisa', year: '2020', file: BASE_PUBLIC('certificados/Produtividade_Canavial.pdf') },
  { name: 'Orientação por Satélite', inst: 'Curso', year: '2020', file: BASE_PUBLIC('certificados/Orientacao_Satelite.pdf') },
  { name: 'John Deere', inst: 'John Deere', year: '2021', file: BASE_PUBLIC('certificados/Jonh_deere.pdf') },
  { name: 'Horus', inst: 'Plataforma', year: '2021', file: BASE_PUBLIC('certificados/Horus.pdf') },
  { name: 'Eu Esri', inst: 'Esri', year: '2022', file: BASE_PUBLIC('certificados/EuEsri.pdf') },
  { name: 'AgroHacka', inst: 'Hackathon', year: '2023', file: BASE_PUBLIC('certificados/AgroHacka.pdf') },
  { name: 'AgroCAD', inst: 'Curso', year: '2021', file: BASE_PUBLIC('certificados/AgroCad.pdf') },
  { name: 'Agricultura Orgânica', inst: 'Curso', year: '2022', file: BASE_PUBLIC('certificados/AgriculturaOrganica.pdf') },
  { name: 'Agricultura Sustentável', inst: 'Curso', year: '2022', file: BASE_PUBLIC('certificados/Agricultura_Sustentavel.pdf') },
];

export const DIPLOMAS = [
  { name: 'MBA Data Science', inst: 'USP/Esalq', year: '2025', file: BASE_PUBLIC('diplomas/data_science.pdf') },
  { name: 'Engenharia Agronômica', inst: 'Unisalesiano', year: '2022', file: BASE_PUBLIC('diplomas/Eng_Agronomica.pdf') },
  { name: 'Técnico em Edificações', inst: 'Centro Paula Souza', year: '2017', file: BASE_PUBLIC('diplomas/Edificacoes.pdf') },
  { name: 'Histórico Ensino Médio', inst: 'Elzira Garbino Pagani', year: '2017', file: BASE_PUBLIC('diplomas/Historico_Ensino_Medio.pdf') },
];

export const AUDIENCE = [
  { tag: '01', title: 'Engenheiros Agrônomos', desc: 'Que querem somar programação e dados ao arsenal.' },
  { tag: '02', title: 'Operadores de Máquinas', desc: 'Que precisam entender arquivos, GPS e piloto automático.' },
  { tag: '03', title: 'Analistas de Dados', desc: 'Que querem se especializar no setor agrícola.' },
  { tag: '04', title: 'Estudantes', desc: 'De agronomia, engenharia ou TI que querem se diferenciar.' },
  { tag: '05', title: 'Gestores Rurais', desc: 'Que buscam decisões baseadas em dados, não em achismo.' },
  { tag: '06', title: 'Entusiastas de IA', desc: 'Que querem aplicar IA em problemas reais e impactantes.' },
];

export const STATS = [
  { k: 'YouTube', v: 'Semanal', sub: 'Conteúdo gratuito' },
  { k: 'Cursos', v: '6', sub: '1 disponível · 5 em breve' },
  { k: 'Foco', v: '100%', sub: 'Agro × Tech' },
  { k: 'Comunidade', v: 'Crescendo', sub: 'Agrônomos & devs' },
];

export const URLS = {
  YT: 'https://www.youtube.com/@pYdoAgro/',
  IG: 'https://www.instagram.com/pydoagro/',
  GH: 'https://github.com/joaocarmopy/joaocarmopy',
  LI: 'https://www.linkedin.com/in/joaocarmopy',
  MAIL: 'mailto:joaocarmo.py@gmail.com',
  TEL: 'tel:+5514996599962',
};

export const MVV = {
  missao: {
    label: 'Missão',
    big: 'Unir Tecnologia',
    accent: 'com agricultura.',
    sub: 'Cursos, tutoriais e ferramentas pra você levar Python, IA e geoprocessamento direto pro talhão. Conteúdo de quem trabalha com isso todos os dias.',
  },
  visao: {
    label: 'Visão',
    big: 'Ser referência',
    accent: 'nacional e internacional de tecnologia na agricultura.',
    sub: 'Construir uma comunidade que conecta o agro brasileiro às melhores práticas globais de dados, IA e geoprocessamento.',
  },
  valores: {
    label: 'Valores',
    big: 'Tecnologia,',
    accent: 'Inovação e Acessibilidade.',
    sub: 'Conteúdo aplicado, atualizado e ao alcance de quem está no campo — sem teoria solta e sem barreira de entrada.',
  },
} as const;
