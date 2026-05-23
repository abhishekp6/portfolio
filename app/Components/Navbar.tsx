'use client';

import { useState } from 'react';
import Link from "next/link";
import { NAV_ITEMS } from "../constants";
import { GithubIcon } from "./icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      setMenuOpen(false);
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="topnav" id="top">
        <div className="container">
          <a href="#" onClick={scrollTop} className="logo">
            <span className="logo-mark">{'</>'}</span>
            Abhishek
          </a>

          <nav className="menu">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="right">
            <a
              href="https://github.com/abhishekp6"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="nav-github"
              style={{ display: 'flex', alignItems: 'center', color: 'var(--body-text)', borderBottom: 'none', transition: 'color 120ms ease' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--ink)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--body-text)')}
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/abhishekp6"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary nav-connect"
            >
              Connect
            </a>
            <button
              className="hamburger"
              onClick={() => setMenuOpen(o => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span className={menuOpen ? 'bar-top-open' : ''} />
              <span className={menuOpen ? 'bar-mid-open' : ''} />
              <span className={menuOpen ? 'bar-bot-open' : ''} />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://www.linkedin.com/in/abhishekp6"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            Connect on LinkedIn ↗
          </a>
        </nav>
      )}
    </>
  );
};

export default Navbar;
