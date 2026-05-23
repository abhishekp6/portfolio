'use client';

import { GithubIcon, LinkedInIcon, TwitterIcon, ArrowRightIcon } from './icons';

const scrollToTop = (e: React.MouseEvent) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const FOOTER_COLS = [
  {
    head: "Work",
    links: [
      ["Projects", "#work"],
      ["Experience", "#experience"],
      ["Writing", "#writing"],
    ],
  },
  {
    head: "Connect",
    links: [
      ["LinkedIn", "https://www.linkedin.com/in/abhishekp6"],
      ["GitHub", "https://github.com/abhishekp6"],
      ["Medium", "https://medium.com/@abhishekp6"],
    ],
  },
  {
    head: "More",
    links: [
      ["Email me", "mailto:abhishek.cse.edu@gmail.com"],
      ["Back to top ↑", "#top"],
    ],
  },
];

function CtaBand() {
  return (
    <section className="section" style={{ background: 'var(--canvas)' }}>
      <div className="container">
        <div className="cta-band">
          <h2>Have something in mind?</h2>
          <p>I&apos;m always open to interesting problems and collaborations. Drop me a line.</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a className="btn btn-primary" href="mailto:abhishek.cse.edu@gmail.com">
              Say hello <ArrowRightIcon size={16} />
            </a>
            <a
              className="btn btn-secondary"
              href="https://www.linkedin.com/in/abhishekp6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const Footer = () => {
  return (
    <>
      <CtaBand />
      <footer className="footer">
        <div className="container">
          <div className="top">
            <div className="brand">
              <a href="#" onClick={scrollToTop} className="logo" style={{ color: '#fff' }}>
                <span className="logo-mark" style={{ background: '#fff', color: 'var(--primary)' }}>{'</>'}</span>
                Abhishek
              </a>
              <p>Software engineer based in India. Currently building gamification at Nykaa.</p>
              <div className="footer-socials">
                <a href="https://github.com/abhishekp6" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a href="https://www.linkedin.com/in/abhishekp6" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <LinkedInIcon className="w-4 h-4" />
                </a>
                <a href="https://x.com/Abhlshek_" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <TwitterIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {FOOTER_COLS.map(col => (
              <div key={col.head}>
                <h5>{col.head}</h5>
                <ul>
                  {col.links.map(([label, href]) => (
                    <li key={label}>
                      {href === '#top' ? (
                        <a href="#" onClick={scrollToTop}>{label}</a>
                      ) : (
                        <a
                          href={href}
                          target={href.startsWith('http') ? '_blank' : undefined}
                          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bottom">
            <div>© 2026 Abhishek Pandey.</div>
            <div className="bottom-meta">
              <span>v2026.05</span>
              <span className="divider">·</span>
              <a href="#" onClick={scrollToTop}>Back to top ↑</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
