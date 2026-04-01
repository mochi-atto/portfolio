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
      <div className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
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