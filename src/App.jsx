import { useMemo, useState } from "react";
import {
  DOCUMENTS,
  FORMATION,
  MEDICAL_TEAM,
  PORTFOLIO,
  QUICK_LINKS,
  SERVICE,
  SERVICES,
  UNITS,
  VERSION
} from "./data/content.js";

const NAV = [
  { id: "home", label: "Início" },
  { id: "units", label: "UCI" },
  { id: "services", label: "Serviços" },
  { id: "documents", label: "Docs" },
  { id: "team", label: "Equipa" }
];

function normalise(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function Badge({ children }) {
  return <span className="badge">{children}</span>;
}

function SectionTitle({ eyebrow, title, children }) {
  return (
    <div className="section-title">
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2>{title}</h2>
      {children ? <p>{children}</p> : null}
    </div>
  );
}

function MiniStat({ stat }) {
  return (
    <div className="mini-stat">
      <strong>{stat.value}</strong>
      <span>{stat.label}</span>
      <small>{stat.note}</small>
    </div>
  );
}

function OfflineStatus() {
  const [online, setOnline] = useState(typeof navigator === "undefined" ? true : navigator.onLine);

  useState(() => {
    const setOn = () => setOnline(true);
    const setOff = () => setOnline(false);
    window.addEventListener("online", setOn);
    window.addEventListener("offline", setOff);
    return () => {
      window.removeEventListener("online", setOn);
      window.removeEventListener("offline", setOff);
    };
  }, []);

  return (
    <div className={`offline-pill ${online ? "is-online" : "is-offline"}`}>
      {online ? "Online" : "Offline"}
    </div>
  );
}

function Home({ goTo }) {
  return (
    <section className="screen home-screen">
      <div className="hero-card">
        <div className="brand-row">
          <div className="logo-mark" aria-hidden="true">
            <span>SMI</span>
          </div>
          <div>
            <p className="kicker">ULS Lisboa Ocidental</p>
            <h1>{SERVICE.title}</h1>
          </div>
        </div>

        <p className="hero-tagline">{SERVICE.tagline}</p>
        <p className="hero-text">{SERVICE.mission}</p>

        <div className="quick-actions">
          {QUICK_LINKS.map((link) => (
            <button key={link.target} className="quick-button" type="button" onClick={() => goTo(link.target)}>
              {link.label}
            </button>
          ))}
        </div>
      </div>

      <div className="stats-grid">
        {SERVICE.stats.map((stat) => (
          <MiniStat key={stat.label} stat={stat} />
        ))}
      </div>

      <article className="content-card">
        <SectionTitle eyebrow="Enquadramento" title="Estrutura do Serviço">
          {SERVICE.scope}
        </SectionTitle>
        <div className="leadership-grid">
          {SERVICE.leadership.map((item) => (
            <div className="leadership-item" key={item.label}>
              <span>{item.label}</span>
              {item.type === "email" ? (
                <a href={`mailto:${item.value}`}>{item.value}</a>
              ) : (
                <strong>{item.value}</strong>
              )}
              {item.note ? <small>{item.note}</small> : null}
            </div>
          ))}
        </div>
      </article>

    </section>
  );
}

function Units({ openDetail }) {
  const [filter, setFilter] = useState("Todos");
  const filtered = filter === "Todos" ? UNITS : UNITS.filter((unit) => unit.campus === filter);

  return (
    <section className="screen">
      <SectionTitle eyebrow="Unidades" title="UCI e camas">
        Informação resumida para consulta móvel. Toca numa unidade para ver o detalhe.
      </SectionTitle>

      <div className="segmented">
        {["Todos", "HEM", "HSFX"].map((item) => (
          <button key={item} className={filter === item ? "active" : ""} onClick={() => setFilter(item)} type="button">
            {item}
          </button>
        ))}
      </div>

      <div className="unit-list">
        {filtered.map((unit) => (
          <button className="unit-card" key={unit.id} type="button" onClick={() => openDetail("unit", unit)}>
            <div className="unit-main">
              <span className="unit-code">{unit.name}</span>
              <h3>{unit.type}</h3>
              <p>{unit.hospital}</p>
            </div>

            <div className="unit-facts">
              <span>{unit.location}</span>
              <strong>{unit.capacity}</strong>
              <small>{unit.coordinator}</small>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

function ServicesScreen({ openDetail }) {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = normalise(query);
    if (!q) return SERVICES;
    return SERVICES.filter((service) =>
      normalise([service.title, service.short, service.hospital, service.category, service.summary, ...(service.chips || [])].join(" ")).includes(q)
    );
  }, [query]);

  return (
    <section className="screen">
      <SectionTitle eyebrow="Valências" title="Circuitos e serviços transversais">
        CDC, EEMI, follow-up, neurocrítico, CCT e transporte secundário.
      </SectionTitle>

      <label className="search-box">
        <span>Pesquisar</span>
        <input
          type="search"
          value={query}
          placeholder="Ex.: transporte, 2222, neurocrítico"
          onChange={(event) => setQuery(event.target.value)}
        />
      </label>

      <div className="service-list">
        {filtered.map((service) => (
          <button className="service-card" key={service.id} onClick={() => openDetail("service", service)} type="button">
            <div>
              <Badge>{service.short}</Badge>
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
            </div>
            <small>{service.hospital}</small>
          </button>
        ))}
      </div>
    </section>
  );
}

function PortfolioScreen() {
  const [active, setActive] = useState(PORTFOLIO[0].id);
  const current = PORTFOLIO.find((item) => item.id === active);

  return (
    <article className="content-card">
      <SectionTitle eyebrow="Carteira de Serviços" title="Áreas assistenciais e técnicas" />
      <div className="horizontal-tabs">
        {PORTFOLIO.map((section) => (
          <button key={section.id} className={active === section.id ? "active" : ""} type="button" onClick={() => setActive(section.id)}>
            {section.title}
          </button>
        ))}
      </div>
      <ul className="clean-list">
        {current.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

function Documents() {
  const [selectedId, setSelectedId] = useState(DOCUMENTS[0].id);
  const selected = DOCUMENTS.find((doc) => doc.id === selectedId);

  return (
    <section className="screen">
      <SectionTitle eyebrow="Documentos" title="Biblioteca autónoma">
        Estes PDFs estão dentro da app. Não apontam para a intranet.
      </SectionTitle>

      <div className="doc-list">
        {DOCUMENTS.map((doc) => (
          <button
            key={doc.id}
            className={`doc-row ${selectedId === doc.id ? "active" : ""}`}
            type="button"
            onClick={() => setSelectedId(doc.id)}
          >
            <span>{doc.category}</span>
            <strong>{doc.title}</strong>
            <small>{doc.date}</small>
          </button>
        ))}
      </div>

      <article className="doc-detail">
        <Badge>{selected.category}</Badge>
        <h3>{selected.title}</h3>
        <p>{selected.summary}</p>
        <div className="doc-actions">
          <a href={selected.file} target="_blank" rel="noreferrer">Abrir PDF local</a>
          <a href={selected.file} download>Guardar PDF</a>
        </div>
      </article>

      <PortfolioScreen />
    </section>
  );
}

function Team() {
  const [open, setOpen] = useState("graduados");

  return (
    <section className="screen">
      <SectionTitle eyebrow="Equipa médica" title="Médicos do SMI">
        Lista médica documental. Não inclui enfermagem, TAS, fisioterapia ou secretariado para reduzir ruído e risco de desactualização.
      </SectionTitle>

      <div className="accordion">
        {MEDICAL_TEAM.map((group) => (
          <article key={group.id} className="accordion-item">
            <button type="button" onClick={() => setOpen(open === group.id ? "" : group.id)}>
              <span>{group.title}</span>
              <strong>{group.people.length}</strong>
            </button>
            {open === group.id ? (
              <div className="people-grid">
                {group.people.map((person) => (
                  <span key={person}>{person}</span>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>

      <article className="content-card">
        <SectionTitle eyebrow="Formação" title="Internos e acolhimento" />
        {FORMATION.map((block) => (
          <div className="info-block" key={block.title}>
            <h3>{block.title}</h3>
            <ul className="clean-list">
              {block.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </article>
    </section>
  );
}


function Detail({ item, type, onBack }) {
  const isUnit = type === "unit";

  return (
    <section className="screen detail-screen">
      <button className="back-button" type="button" onClick={onBack}>Voltar</button>

      <article className="detail-hero">
        <Badge>{isUnit ? item.hospital : item.category}</Badge>
        <h2>{isUnit ? item.name : item.title}</h2>
        <p>{isUnit ? item.focus : item.summary}</p>
      </article>

      {isUnit ? (
        <>
          <div className="detail-grid">
            <div className="fact-card">
              <span>Localização</span>
              <strong>{item.location}</strong>
            </div>
            <div className="fact-card">
              <span>Capacidade</span>
              <strong>{item.capacity}</strong>
            </div>
            <div className="fact-card">
              <span>Coordenação</span>
              <strong>{item.coordinator}</strong>
            </div>
          </div>

          <article className="content-card">
            <h3>Perfil e responsabilidades</h3>
            <ul className="clean-list">
              {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
            </ul>
            <div className="chip-row">
              {item.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}
            </div>
            {item.sourceNote ? <p className="source-note">{item.sourceNote}</p> : null}
          </article>
        </>
      ) : (
        <>
          <article className="content-card">
            <h3>Resumo operacional</h3>
            <ul className="clean-list">
              {item.details.map((detail) => <li key={detail}>{detail}</li>)}
            </ul>
            <div className="chip-row">
              {(item.chips || []).map((chip) => <Badge key={chip}>{chip}</Badge>)}
            </div>
          </article>

          {item.quickCriteria ? (
            <article className="content-card priority-card">
              <h3>Consulta rápida</h3>
              <ul className="clean-list">
                {item.quickCriteria.map((criterion) => <li key={criterion}>{criterion}</li>)}
              </ul>
            </article>
          ) : null}
        </>
      )}
    </section>
  );
}

export default function App() {
  const [screen, setScreen] = useState("home");
  const [detail, setDetail] = useState(null);

  const goTo = (target) => {
    setDetail(null);
    setScreen(target);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openDetail = (type, item) => {
    setDetail({ type, item });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="app-shell">
      <header className="top-bar">
        <button className="brand-button" type="button" onClick={() => goTo("home")}>
          <span className="brand-icon">SMI</span>
          <span>
            <strong>{SERVICE.shortTitle}</strong>
            <small>{VERSION.label}</small>
          </span>
        </button>
        <OfflineStatus />
      </header>

      <div className="content">
        {detail ? (
          <Detail item={detail.item} type={detail.type} onBack={() => setDetail(null)} />
        ) : (
          <>
            {screen === "home" ? <Home goTo={goTo} /> : null}
            {screen === "units" ? <Units openDetail={openDetail} /> : null}
            {screen === "services" ? <ServicesScreen openDetail={openDetail} /> : null}
            {screen === "documents" ? <Documents /> : null}
            {screen === "team" ? <Team /> : null}
          </>
        )}
      </div>

      <nav className="bottom-nav" aria-label="Navegação principal">
        {NAV.map((item) => (
          <button
            key={item.id}
            type="button"
            className={!detail && screen === item.id ? "active" : ""}
            onClick={() => goTo(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </main>
  );
}
