import { Link } from 'react-router-dom';
import { FiChevronDown, FiMapPin, FiExternalLink } from 'react-icons/fi';
import { FaFlagUsa } from 'react-icons/fa';
import headshot from '../assets/images/headshot.png';
import './Home.css';
import experiences from '../data/experiences';

function formatDate(dateStr) {
  if (!dateStr) return 'Present';
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

export default function Home() {
  return (
    <>
      {/* ---- Full-viewport hero ---- */}
      <section className="hero">
        <div className="hero__content">
          <div className="hero__image">
            <img src={headshot} alt="Photo of [Your Name]" />
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
              Interested in software engineering, solutions architecture, and user experience research
            </p>
            <div className="hero__details">
              <span className="hero__detail">
                <FiMapPin />
                Atlanta, GA
              </span>
              <span className="hero__detail">
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
          {experiences.map((exp) => (
            <div
              className={`exp-card ${!exp.endDate ? 'exp-card--ongoing' : ''}`}
              key={exp.id}
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
          ))}
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
        <div className="nav-cards__bottom">
          <Link to="/contact" className="nav-card nav-card--small">
            Contact
          </Link>
        </div>
      </section>
    </>
  );
}