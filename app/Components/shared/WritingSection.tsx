import Link from 'next/link';
import { Article } from '../../types';
import { ArrowUpRightIcon, ArrowRightIcon } from '../icons';

interface WritingSectionProps {
  articles: Article[];
}

export function WritingSection({ articles }: WritingSectionProps) {
  return (
    <section className="section writing-band" id="writing">
      <div className="container">
        <div className="writing-head">
          <div>
            <h2>Writing</h2>
            <p className="head-sub">Engineering posts on things I learn, spanning frontend, backend, and infrastructure.</p>
          </div>
          <Link
            href="https://medium.com/@abhishekp6"
            target="_blank"
            rel="noopener noreferrer"
            className="head-cta"
          >
            All posts <ArrowRightIcon size={14} />
          </Link>
        </div>

        <div className="writing-list">
          {articles.map((article, i) => (
            <Link
              key={i}
              href={article.href}
              target="_blank"
              rel="noopener noreferrer"
              className="article"
            >
              <div className="article-meta">
                <span className="article-date">{article.date}</span>
                <span className="article-read">{article.readTime} read</span>
              </div>
              <div className="article-main">
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <div className="article-tags">
                  {article.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
              <span className="article-arrow">
                <ArrowUpRightIcon size={18} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
