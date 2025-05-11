'use client';

import Link from "next/link";
import { NAV_ITEMS } from "../constants";
import { useTheme } from "../providers/ThemeProvider";

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            const element = document.querySelector(href);
            element?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return(
        <div className="h-16 px-4 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-sm flex items-center justify-center text-base text-slate-800 dark:text-slate-200 sticky top-0 z-10 shadow-sm">
            <div className="flex space-x-6 items-center">
                {NAV_ITEMS.map((item, index) => (
                    <div key={index} className="cursor-pointer group">
                        <Link 
                            href={item.href} 
                            target={item.external ? "_blank" : undefined} 
                            className="relative"
                            onClick={(e) => !item.external && handleClick(e, item.href)}
                        >
                            {item.label}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-800 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </div>
                ))}
                <div className="cursor-pointer flex items-center text-slate-800 dark:text-slate-200 hover:text-slate-600 dark:hover:text-slate-400 transition-transform duration-200 hover:scale-110">
                    <Link href="https://github.com/abhishekp6" target="_blank" className="flex items-center">
                        <svg viewBox="0 0 16 16" className="w-5 h-5" fill="currentColor" aria-hidden="true">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                        </svg>
                    </Link>
                </div>
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                >
                    {theme === 'light' ? (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                    ) : (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    )}
                </button>
            </div>
        </div>
    );
}

export default Navbar;