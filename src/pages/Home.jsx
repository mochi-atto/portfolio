import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronDown, FiChevronUp, FiMapPin, FiExternalLink } from 'react-icons/fi';
import { FaFlagUsa } from 'react-icons/fa';
import headshot from '../assets/images/headshot.png';
import './Home.css';
import experiences from '../data/experiences';

function formatDate(dateStr) {
  if (!dateStr) return 'Present';
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

function getYouTubeId(url) {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
  return match ? match[1] : null;
}

function renderDescriptionBlock(block, i) {
  if (typeof block === 'string') {
    return <p key={i}>{block}</p>;
  }
  if (block.type === 'video') {
    const id = getYouTubeId(block.url);
    if (!id) return null;
    return (
      <div key={i} className="exp-card__video-wrapper">
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title={`video ${i + 1}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }
  if (Array.isArray(block)) {
    return (
      <p key={i}>
        {block.map((node, j) =>
          typeof node === 'string' ? node : (
            <a key={j} href={node.url} target="_blank" rel="noopener noreferrer" className="exp-card__desc-link">
              {node.text}
            </a>
          )
        )}
      </p>
    );
  }
  return null;
}

function renderDescription(description) {
  if (typeof description === 'string') return <p>{description}</p>;
  return description.map((block, i) => renderDescriptionBlock(block, i));
}

const activeExperiences = experiences.filter(e => !e.endDate);
const pastExperiences = experiences.filter(e => e.endDate);

function ExperienceCard({ exp, openId, toggle, setOpenId }) {
  return (
    <div
      className={`exp-card ${!exp.endDate ? 'exp-card--ongoing' : ''} ${exp.description ? 'exp-card--expandable' : ''}`}
    >
      <div
        className="exp-card__header"
        onClick={() => exp.description && toggle(exp.id)}
      >
        <div className="exp-card__info">
          <span className="exp-card__title">{exp.title}</span>
          <span className="exp-card__org">
            {exp.org}
            {exp.link && (
              <a
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="exp-card__link"
                onClick={(e) => e.stopPropagation()}
              >
                <FiExternalLink />
              </a>
            )}
          </span>
        </div>
        <span className="exp-card__dates">
          {formatDate(exp.startDate)} — {formatDate(exp.endDate)}
        </span>
      </div>
      {openId === exp.id && exp.description && (
        <div className="exp-card__body">
          <div className="exp-card__desc">
            {renderDescription(exp.description)}
          </div>
          <button
            className="exp-card__collapse"
            onClick={() => setOpenId(null)}
            aria-label="Close description"
          >
            <FiChevronUp />
          </button>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const [openId, setOpenId] = useState(null);
  const [showPast, setShowPast] = useState(false);

  const toggle = (id) => setOpenId(prev => prev === id ? null : id);

  return (
    <>
      {/* ---- Full-viewport hero ---- */}
      <section className="hero">
        <div className="hero__content">
          <div className="hero__image">
            <img src={headshot} alt="Photo of Josie Chang" />
          </div>
          <div className="hero__text">
            <p className="hero__welcome">Nice to meet you!</p>
            <h1 className="hero__title">
              <span className="hero__name">Josie Chang</span>
            </h1>
            <p className="hero__tagline hero__accent">
              Computer Science @ Georgia Tech
            </p>
            <p className="hero__tagline">
              Interested in software engineering, user experience research, and technology governance
            </p>
            <div className="hero__details">
              <span className="hero__detail" alt = "Icon of a Map Pin">
                <FiMapPin />
                Atlanta, GA
              </span>
              <span className="hero__detail" alt = "Icon of the US Flag">
                <FaFlagUsa />
                U.S. Citizen
              </span>
            </div>
          </div>
        </div>
        <div className="hero__scroll-hint">
          <span>Explore</span>
          <FiChevronDown size={20} />
        </div>
      </section>

      {/* ---- Experiences ---- */}
      <section className="experiences">
        <h2 className="experiences__title">Experience</h2>
        <div className="experiences__list">
          {activeExperiences.map((exp) => (
            <ExperienceCard key={exp.id} exp={exp} openId={openId} toggle={toggle} setOpenId={setOpenId} />
          ))}

          {pastExperiences.length > 0 && (
            <>
              <button
                className="experiences__toggle"
                onClick={() => setShowPast(prev => !prev)}
              >
                {showPast ? 'Hide past experiences' : `Show ${pastExperiences.length} past experience${pastExperiences.length !== 1 ? 's' : ''}`}
                {showPast ? <FiChevronUp size={14} /> : <FiChevronDown size={14} />}
              </button>

              {showPast && pastExperiences.map((exp) => (
                <ExperienceCard key={exp.id} exp={exp} openId={openId} toggle={toggle} setOpenId={setOpenId} />
              ))}
            </>
          )}
        </div>
      </section>

      {/* ---- Navigation cards ---- */}
      <section className="nav-cards">
        <h2 className="nav__title">Navigation</h2>
        <div className="nav-cards__top">
          <Link to="/projects" className="nav-card">
            Projects
          </Link>
          <Link to="/hobbies" className="nav-card">
            Hobbies
          </Link>
        </div>
        <div className="nav-cards__top">
          <Link to="/resume" className="nav-card">
            Resume
          </Link>
          <Link to="/contact" className="nav-card">
            Contact
          </Link>
        </div>
      </section>
    </>
  );
}