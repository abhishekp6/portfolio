interface IcoProps {
  className?: string;
  size?: number;
  color?: string;
  strokeWidth?: number;
}

function Ico({ name, size = 20, color = "currentColor", strokeWidth = 1.75 }: IcoProps & { name: string }) {
  const paths: Record<string, React.ReactNode> = {
    arrowRight:   <><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></>,
    arrowUpRight: <><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></>,
    chevronLeft:  <polyline points="15 18 9 12 15 6"/>,
    chevronRight: <polyline points="9 18 15 12 9 6"/>,
    chevronDown:  <polyline points="6 9 12 15 18 9"/>,
    check:        <polyline points="20 6 9 17 4 12"/>,
    globe:        <><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>,
    mail:         <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22 6 12 13 2 6"/></>,
    clock:        <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>,
    calendar:     <><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></>,
    download:     <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></>,
    github:       <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>,
    linkedin:     <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></>,
    twitter:      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>,
    moon:         <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>,
    sun:          <><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
}

export const GithubIcon   = ({ className }: { className?: string }) => <Ico name="github"   className={className} />;
export const LinkedInIcon = ({ className }: { className?: string }) => <Ico name="linkedin" className={className} />;
export const TwitterIcon  = ({ className }: { className?: string }) => <Ico name="twitter"  className={className} />;
export const SunIcon      = ({ className }: { className?: string }) => <Ico name="sun"      className={className} />;
export const MoonIcon     = ({ className }: { className?: string }) => <Ico name="moon"     className={className} />;
export const ArrowRightIcon    = ({ size = 16 }: { size?: number }) => <Ico name="arrowRight"   size={size} />;
export const ArrowUpRightIcon  = ({ size = 18 }: { size?: number }) => <Ico name="arrowUpRight" size={size} />;
export const ChevronDownIcon   = ({ size = 14 }: { size?: number }) => <Ico name="chevronDown"  size={size} />;
export const DownloadIcon      = ({ size = 14 }: { size?: number }) => <Ico name="download"     size={size} />;
export const GlobeIcon         = ({ size = 14 }: { size?: number }) => <Ico name="globe"        size={size} />;
export const MailIcon          = ({ size = 14 }: { size?: number }) => <Ico name="mail"         size={size} />;
