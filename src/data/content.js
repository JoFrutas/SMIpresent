export const VERSION = {
  label: "v0.3 mobile autónoma",
  updatedAt: "Maio 2026",
  note: "Conteúdo estático com documentos incorporados na aplicação. Não depende da intranet."
};

export const SERVICE = {
  title: "Serviço de Medicina Intensiva",
  shortTitle: "SMI ULSLO",
  organisation: "Unidade Local de Saúde de Lisboa Ocidental",
  tagline: "Doente crítico. Assistência. Formação. Governação clínica.",
  mission:
    "Identificação precoce e tratamento eficaz de doentes com falência de órgão estabelecida ou iminente, integrando assistência clínica, investigação, formação pré e pós-graduada, qualidade e segurança.",
  vision:
    "Serviço de referência no tratamento do doente crítico, com diferenciação técnica, foco em qualidade, humanização e continuidade de cuidados.",
  scope:
    "Integra quatro Unidades de Cuidados Intensivos/Intermédios distribuídas pelo HEM e HSFX, equipas de emergência intra-hospitalar, Circuito do Doente Crítico, consulta de follow-up, circuito do doente neurocrítico e consultadoria à UCI de Cirurgia Cardíaca.",
  leadership: [
    { label: "Direcção", value: "Dr. Pais Martins", note: "Assistente Graduado Sénior" },
    { label: "Administrador Hospitalar", value: "Dr. Sérgio Pedreiras" },
    { label: "Secretariado SMI", value: "Carla Leitão" },
    { label: "Email da Direcção", value: "ajpmartins@ulslo.min-saude.pt", type: "email" }
  ],
  stats: [
    { value: "4", label: "UCI", note: "HEM e HSFX" },
    { value: "36+6", label: "Camas", note: "nível 2/3 + intermédios" },
    { value: "3", label: "Hospitais", note: "HEM, HSFX, HSC" },
    { value: ">1M", label: "População", note: "eixo de referenciação" }
  ]
};

export const UNITS = [
  {
    id: "uci1",
    name: "UCI-1",
    hospital: "Hospital Egas Moniz",
    campus: "HEM",
    location: "5.º piso",
    type: "Unidade polivalente",
    coordinator: "Dra. Isabel Simões",
    capacity: "11 camas: 8 em open-space e 3 quartos de isolamento",
    focus: "Doentes pós-cirúrgicos e doentes médicos do HEM.",
    bullets: [
      "Recepção de doentes pós-cirúrgicos provenientes dos blocos operatórios do HEM.",
      "Recepção de doentes médicos oriundos das enfermarias do HEM.",
      "Responsabilidade na Emergência Intra-Hospitalar no HEM.",
      "Sem referência operacional actual a unidade de cuidados intermédios associada."
    ],
    tags: ["HEM", "Polivalente", "Pós-operatório", "EEMI"],
    sourceNote: "Capacidade baseada nos documentos institucionais; nota sobre intermédios actualizada por indicação operacional."
  },
  {
    id: "uci2",
    name: "UCI-2",
    hospital: "Hospital Egas Moniz",
    campus: "HEM",
    location: "Piso 3 do edifício do Internamento",
    type: "Doente neurocrítico",
    coordinator: "Dr. Pedro Freire",
    capacity: "8 camas de UCI, duas de isolamento; associada a 6 camas de cuidados intermédios de Neurocirurgia",
    focus: "Unidade vocacionada para o doente neurocrítico.",
    bullets: [
      "Proximidade com bloco operatório, Neurotraumatologia, Neurocirurgia e Neurologia.",
      "Internamento e estabilização de doentes neurocríticos.",
      "Articulação com 6 camas de cuidados intermédios de Neurocirurgia.",
      "Integração no circuito do doente neurocrítico UML/HEM."
    ],
    tags: ["HEM", "Neurocrítico", "Neurocirurgia", "Intermédios"],
    sourceNote: "Capacidade de intermédios actualizada por indicação operacional."
  },
  {
    id: "uci3",
    name: "UCI-3",
    hospital: "Hospital de São Francisco Xavier",
    campus: "HSFX",
    location: "Piso -1 do Edifício 1",
    type: "Unidade polivalente",
    coordinator: "Dra. Cláudia Martins",
    capacity: "9 camas: 7 em open-space e 2 quartos de isolamento",
    focus: "Unidade polivalente de Medicina Intensiva no HSFX.",
    bullets: [
      "Recebe doentes críticos médicos e cirúrgicos do HSFX.",
      "Recepção de doentes do Serviço de Urgência, enfermarias, bloco operatório e bloco de partos.",
      "Abordagem de doente politraumatizado quando aplicável.",
      "Corresponsabilidade com a UCI-4 na EEMI do HSFX e no Circuito do Doente Crítico."
    ],
    tags: ["HSFX", "Polivalente", "CDC", "EEMI"],
    sourceNote: "Coordenação actualizada por indicação operacional; descrição reformulada para não limitar a unidade ao doente cirúrgico."
  },
  {
    id: "uci4",
    name: "UCI-4",
    hospital: "Hospital de São Francisco Xavier",
    campus: "HSFX",
    location: "1.º piso do Edifício 1",
    type: "Unidade polivalente",
    coordinator: "Prof. Doutor Pedro Póvoa",
    capacity: "8 camas holopotenciárias, distribuídas por dois quartos com 4 camas cada",
    focus: "Unidade polivalente no HSFX.",
    bullets: [
      "Recebe doentes críticos médicos provenientes do SU e enfermarias do HSFX.",
      "Recebe também doentes cirúrgicos e politraumatizados quando aplicável.",
      "Corresponsabilidade com a UCI-3 na EEMI do HSFX.",
      "Corresponsabilidade com a UCI-3 no Circuito do Doente Crítico."
    ],
    tags: ["HSFX", "Polivalente", "CDC", "EEMI"]
  }
];

export const SERVICES = [
  {
    id: "cdc",
    title: "Circuito do Doente Crítico",
    short: "CDC",
    hospital: "HSFX",
    category: "Outreach / Urgência",
    summary:
      "Resposta estruturada para reconhecimento e abordagem precoce de doentes críticos admitidos no Serviço de Urgência do HSFX.",
    details: [
      "Integra actividade na Sala de Reanimação e consultoria a doentes no Serviço de Observação.",
      "A actividade é assegurada por médico sob coordenação do SMI, em presença física hospitalar.",
      "Inclui avaliação diagnóstica e terapêutica inicial, decisão de suporte de órgão, proposta de admissão, permanência no SU/SO ou encaminhamento.",
      "Inclui acompanhamento para meios complementares de diagnóstico ou bloco operatório quando adequado."
    ],
    chips: ["REA", "SO", "SU", "Admissão UCI", "Transporte"],
    quickCriteria: [
      "Via aérea ameaçada ou necessidade de via aérea avançada.",
      "Insuficiência respiratória com necessidade de suporte ventilatório.",
      "Instabilidade hemodinâmica refractária ou necessidade de vasopressores.",
      "Diminuição aguda do GCS, crise convulsiva prolongada ou repetida.",
      "Disfunção renal/metabólica grave com necessidade ou risco elevado de suporte invasivo."
    ]
  },
  {
    id: "eemi",
    title: "Equipa de Emergência Médica Intra-Hospitalar",
    short: "EEMI",
    hospital: "HEM e HSFX",
    category: "Emergência",
    summary:
      "Equipa composta por médico e enfermeiro do SMI, activável por profissionais de saúde através do número interno 2222.",
    details: [
      "A área de intervenção inclui HSFX e HEM, em áreas clínicas e não clínicas, com exclusões operacionais definidas.",
      "O médico exerce liderança de equipa em activaçōes da EEMI.",
      "A actividade inclui observação, estabilização, início de medidas diagnósticas e terapêuticas, articulação com especialidades e decisão sobre o destino do doente.",
      "As ocorrências, incidentes e complicações devem ser reportados à direcção do serviço."
    ],
    chips: ["2222", "HEM", "HSFX", "Team leader", "Suporte vital"],
    quickCriteria: [
      "Paragem cardiorrespiratória.",
      "Deterioração respiratória ou hemodinâmica súbita.",
      "Alteração neurológica aguda.",
      "Preocupação clínica significativa da equipa assistencial."
    ]
  },
  {
    id: "followup",
    title: "Consulta de Follow-up",
    short: "Follow-up",
    hospital: "HEM e HSFX",
    category: "Continuidade de cuidados",
    summary:
      "Consulta de seguimento do doente crítico após internamento em UCI, focada em sequelas, qualidade de vida e síndrome pós-internamento em cuidados intensivos.",
    details: [
      "Triagem de utentes admitidos em UCI com SPICI positivo na admissão ou à alta e internamento superior a 3 dias.",
      "Avaliação clínica, reconciliação terapêutica, relatórios clínicos e referenciação quando adequada.",
      "Aplicação de escalas de risco de stress pós-traumático em contexto pós-UCI.",
      "Articulação com médicos de família e outras consultas externas."
    ],
    chips: ["PICS", "SPICI", "Reabilitação", "Continuidade"],
    quickCriteria: [
      "Internamento prolongado em UCI.",
      "Sintomas físicos, cognitivos ou psicológicos após alta.",
      "Necessidade de articulação de cuidados e reabilitação."
    ]
  },
  {
    id: "neuro",
    title: "Circuito do Doente Neurocrítico",
    short: "Neurocrítico",
    hospital: "HEM",
    category: "Neurocrítico",
    summary:
      "Circuito funcional de abordagem do doente neurocrítico no HEM, em articulação com UCI-2, Neurocirurgia, Neurologia e Neurotraumatologia.",
    details: [
      "Orientado para avaliação, estabilização e encaminhamento do doente neurocrítico.",
      "Articulação estreita com UCI-2.",
      "Integração com recursos diagnósticos e terapêuticos do HEM.",
      "Apoio a decisões de nível de cuidados e monitorização."
    ],
    chips: ["HEM", "UCI-2", "Neurocirurgia", "Neurologia"],
    quickCriteria: ["HSA", "TCE", "alteração neurológica aguda", "risco de deterioração neurológica"]
  },
  {
    id: "cct",
    title: "Consultadoria à UCI da Cirurgia Cardíaca",
    short: "CCT",
    hospital: "HSC",
    category: "Consultadoria",
    summary:
      "Consultadoria do SMI à UCI da Cirurgia Cardíaca no Hospital de Santa Cruz.",
    details: [
      "Apoio especializado em Medicina Intensiva.",
      "Articulação assistencial com a UCI da Cirurgia Cardíaca.",
      "Partilha de práticas e suporte à decisão clínica em contexto cardiotorácico.",
      "Integração no perímetro assistencial da ULSLO."
    ],
    chips: ["HSC", "Cirurgia cardíaca", "Consultadoria"]
  },
  {
    id: "transporte",
    title: "Transporte Secundário do Doente Crítico",
    short: "Transporte",
    hospital: "ULSLO",
    category: "Transporte",
    summary:
      "Procedimento autónomo incorporado na app para consulta móvel sobre decisão, planeamento, equipa, equipamento, monitorização e registos no transporte secundário.",
    details: [
      "A decisão de transporte é acto médico e deve ponderar risco-benefício.",
      "O planeamento inclui destino, distância, nível de cuidados, equipa, monitorização, equipamento, transporte e documentação.",
      "A equipa deve ter experiência em urgência/emergência e/ou Medicina Intensiva, com formação em reanimação cardiopulmonar.",
      "A efectivação exige observação inicial, estabilização, revisão de história e exames, verificação de acessos/dispositivos e registo clínico."
    ],
    chips: ["Decisão", "Planeamento", "Equipa", "Monitorização", "Registos"],
    quickCriteria: [
      "Confirmar unidade de destino e nível de cuidados.",
      "Escolher tipo de ambulância e equipa adequada.",
      "Verificar monitor-desfibrilhador, ventilador, oxigénio, fármacos e bombas.",
      "Registar eventos e entregar cópia ao serviço de destino."
    ]
  }
];

export const PORTFOLIO = [
  {
    id: "assistencial",
    title: "Áreas assistenciais",
    items: [
      "Unidades de Internamento do Doente Crítico",
      "Unidade de Internamento do Doente Neurocrítico",
      "Consultoria Hospitalar e Outreach",
      "Circuito do Doente Crítico",
      "Consulta de Follow-up",
      "Suporte de dador de órgãos e doação",
      "Urgência e emergência"
    ]
  },
  {
    id: "resp",
    title: "Respiratório",
    items: [
      "Reanimação cardiorrespiratória avançada",
      "Manutenção da via aérea avançada",
      "Intubação oro/nasotraqueal",
      "Traqueotomia cirúrgica e percutânea",
      "Ventilação mecânica invasiva e não invasiva",
      "Oxigenoterapia de alto fluxo",
      "Monitorização oximétrica e gasimétrica",
      "Broncofibroscopia diagnóstica e terapêutica"
    ]
  },
  {
    id: "cardiorenal",
    title: "Cardiovascular e renal",
    items: [
      "Monitorização cardíaca contínua",
      "Monitorização invasiva e não invasiva da pressão arterial",
      "Cateter venoso central e linha arterial",
      "Monitorização hemodinâmica avançada",
      "Pacing cardíaco temporário",
      "Técnicas contínuas de depuração/substituição renal",
      "Plasmaferese e hemoperfusão"
    ]
  },
  {
    id: "neurodiag",
    title: "Neurológico, diagnóstico e outras técnicas",
    items: [
      "Punção e drenagem lombar",
      "Monitorização de pressão intracraniana quando aplicável",
      "Doppler transcraniano",
      "Monitorização de sedação por BIS",
      "Ecografia multissistémica",
      "Terapia da dor",
      "Monitorização farmacocinética",
      "Ecocardiografia transtorácica e transesofágica"
    ]
  },
  {
    id: "formacao",
    title: "Formação e educação",
    items: [
      "Formação pré-graduada de alunos de Medicina da NOVA Medical School",
      "Formação pré-graduada de estudantes de Enfermagem na área do doente crítico",
      "Formação pós-graduada de internos de vários serviços e hospitais",
      "Programa de Formação Via Clássica em Medicina Intensiva"
    ]
  }
];

export const MEDICAL_TEAM = [
  {
    id: "direcao",
    title: "Direcção",
    people: ["Pais Martins"]
  },
  {
    id: "graduados",
    title: "Assistentes Hospitalares Graduados",
    people: [
      "Pedro Póvoa",
      "Maria Eduarda Carmo",
      "Isabel Simões",
      "Joana Osório",
      "Cláudia Martins",
      "Bernardino Valério",
      "Vítor Mendes",
      "David Nora",
      "Ana Gabriela Almeida",
      "Tomás Lamas",
      "Marta Rebelo",
      "Pedro Freire",
      "Lia Lêdo",
      "Pedro Santos",
      "João Delgado",
      "Catarina Conceição",
      "Inês Antunes",
      "Ana Oliveira"
    ]
  },
  {
    id: "assistentes",
    title: "Assistentes Hospitalares",
    people: [
      "Patrícia Moniz",
      "Francisco Coelho",
      "João Torres",
      "Vasco Costa",
      "Ricardo Sousa",
      "Rita Ivo",
      "Ana Rita Barradas",
      "Diogo Santos",
      "Francisco Adragão",
      "Maria João Correia",
      "João Frutuoso",
      "Christopher Strong",
      "João Pedro Cidade",
      "Hugo Vilela",
      "Ivo Castro",
      "Rita Santos",
      "Hugo Moreira",
      "Pedro Fidalgo"
    ]
  },
  {
    id: "internos",
    title: "Internos de Formação Específica",
    people: [
      "Carolina Paulino",
      "Marta Maio Herculano",
      "Gonçalo Guerreiro",
      "Filipa Feliciano",
      "Maria Teresa Miranda",
      "Maria Rosário Cardoso",
      "Ricardo Carnevale",
      "David Sousa",
      "João Fustiga",
      "Michelle Tomazini",
      "Inês Medeiros",
      "Inês Gomes",
      "Eliane Silva",
      "Duarte Marques"
    ]
  }
];

export const FORMATION = [
  {
    title: "Elementos de referência para formação",
    items: [
      "UCI-1: Dra. Gabriela Almeida e Dra. Marta Rebelo",
      "UCI-2: Dra. Lia Lêdo",
      "UCI-3: Dra. Cláudia Carvalho",
      "UCI-4: Dr. Vítor Mendes"
    ]
  },
  {
    title: "Dia-a-dia na UCI",
    items: [
      "Chegada antes das 08:30 no primeiro dia.",
      "Passagem clínica curta de manhã e passagem mais detalhada à tarde.",
      "Observação por órgãos e sistemas, procedimentos, transporte a exames, registos, revisão terapêutica, altas e transferências.",
      "Registos em PatientCare ICU, com validação sénior dos procedimentos e terapêutica.",
      "APACHE II, SAPS III e SOFA devem ser realizados/actualizados conforme prática local."
    ]
  },
  {
    title: "Momentos formativos",
    items: [
      "Sessões clínicas de periodicidade variável.",
      "Journal Club com temas apresentados pelos internos.",
      "Sessões internas das várias unidades.",
      "Cursos organizados por núcleos do SMI, incluindo ecografia."
    ]
  }
];

export const GOVERNANCE = [
  {
    title: "Qualidade e segurança",
    items: [
      "Indicadores de produção/efectividade.",
      "Indicadores de cumprimento de NOC da DGS.",
      "Indicadores de processos assistenciais integrados.",
      "Auditoria ao processo clínico do doente.",
      "Indicadores de segurança e comunicação com o doente."
    ]
  },
  {
    title: "Auditorias e risco",
    items: [
      "Higiene das mãos.",
      "Feixe de prevenção da pneumonia associada à intubação.",
      "Feixe de prevenção de infecção relacionada com CVC.",
      "Precauções básicas de controlo de infecção.",
      "Identificação inequívoca do doente.",
      "Registo de eventos adversos."
    ]
  },
  {
    title: "Riscos prioritários no doente crítico",
    items: [
      "Erro de identificação.",
      "Erro de medicação.",
      "Perda de informação na passagem de doentes.",
      "Miopatia dos cuidados intensivos.",
      "Queda e úlcera de pressão.",
      "Tromboembolismo venoso.",
      "Infecção nosocomial e microrganismos multirresistentes.",
      "Delirium, sedação, analgesia e auto-extubação.",
      "Evento adverso no transporte intra-hospitalar.",
      "Carro de emergência inoperacional."
    ]
  }
];

export const DOCUMENTS = [
  {
    id: "governacao",
    title: "Manual de Governação Clínica",
    category: "Governação",
    file: "/docs/manual-governacao-clinica-smi-2024.pdf",
    date: "Novembro 2024",
    summary:
      "Documento central de organização do SMI: missão, estrutura, objectivos estratégicos, rede de referenciação, recursos humanos e físicos, gestão de risco, plano de auditorias, glossário e anexos."
  },
  {
    id: "carteira",
    title: "Carteira de Serviços",
    category: "Carteira",
    file: "/docs/carteira-servicos-smi-2024.pdf",
    date: "Outubro 2024",
    summary:
      "Descrição das áreas assistenciais e dos procedimentos/técnicas disponíveis no Serviço: unidades de internamento, neurocrítico, consultoria, CDC, follow-up, doação, urgência/emergência, suporte respiratório, cardiovascular, renal, neurológico, diagnóstico e outras técnicas."
  },
  {
    id: "guia",
    title: "Guia de Acolhimento do Interno",
    category: "Formação",
    file: "/docs/guia-acolhimento-interno-smi-2024.pdf",
    date: "2024",
    summary:
      "Guia prático para internos: missão, organização do serviço, unidades, CDC, EEMI, requisitos de estágio, dia-a-dia na UCI, registos clínicos, formação e objectivos."
  },
  {
    id: "cdc-doc",
    title: "Circuito do Doente Crítico",
    category: "Circuitos",
    file: "/docs/circuito-doente-critico-2023.pdf",
    date: "Abril 2023",
    summary:
      "Documento operacional do CDC: caracterização, actuação na Sala de Reanimação e Serviço de Observação, critérios de activação/consultoria, transporte e fluxogramas de decisão."
  },
  {
    id: "transporte",
    title: "Manual do Transporte Secundário do Doente Crítico",
    category: "Transporte",
    file: "/docs/manual-transporte-secundario-doente-critico-2026.pdf",
    date: "Março 2026",
    summary:
      "Manual de decisão, planeamento e execução do transporte secundário do doente crítico: equipa, formação, equipamento, monitorização, registos e sistema de transporte na ULSLO."
  },
  {
    id: "pagina",
    title: "Página institucional SMI",
    category: "Institucional",
    file: "/docs/pagina-institucional-smi-2026.pdf",
    date: "Fevereiro 2026",
    summary:
      "Export da página institucional com direcção, administrador hospitalar, secretariado e ligações rápidas."
  }
];

export const QUICK_LINKS = [
  { label: "Unidades", target: "units" },
  { label: "Valências", target: "services" },
  { label: "Documentos", target: "documents" },
  { label: "Equipa médica", target: "team" }
];
