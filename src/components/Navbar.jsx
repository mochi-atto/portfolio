import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

import logo from '../assets/images/logo/logo.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      {/* ---- Logo (left side) ---- */}
      <NavLink to="/" className="navbar__logo" onClick={closeMenu}>
        {logo ? (
          <img src={logo} alt="Logo" />
        ) : (
          <span>MyPortfolio</span>
        )}
      </NavLink>

      {/* ---- Hamburger button (only visible on mobile) ---- */}
      <button
        className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      {/* ---- Page links (right side) ---- */}
      <div className={`navbar__links max-sm:transition-all max-sm:duration-200 max-sm:ease-in-out ${
        menuOpen
          ? 'max-sm:opacity-100 max-sm:translate-y-0'
          : 'max-sm:opacity-0 max-sm:-translate-y-2 max-sm:pointer-events-none'
      }`}>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `navbar__link ${isActive ? 'navbar__link--active' : ''}`
          }
          onClick={closeMenu}
        >
          Home
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `navbar__link ${isActive ? 'navbar__link--active' : ''}`
          }
          onClick={closeMenu}
        >
          Projects
        </NavLink>
        <NavLink
          to="/hobbies"
          className={({ isActive }) =>
            `navbar__link ${isActive ? 'navbar__link--active' : ''}`
          }
          onClick={closeMenu}
        >
          Hobbies
        </NavLink>
        <NavLink
          to="/resume"
          className={({ isActive }) =>
            `navbar__link ${isActive ? 'navbar__link--active' : ''}`
          }
          onClick={closeMenu}
        >
          Resume
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `navbar__link ${isActive ? 'navbar__link--active' : ''}`
          }
          onClick={closeMenu}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}