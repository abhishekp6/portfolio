const Header = () => {
  return (
    <div id="header" className="h-96 flex flex-col justify-center items-center">
      <div className="text-4xl sm:text-4xl md:text-4xl font-bold text-center w-full md:w-auto p-4 text-slate-800 dark:text-slate-200 transform transition-all duration-300 hover:scale-105 cursor-default">
        Hi, I&apos;m Abhishek <span className="animate-wave inline-block">👋</span>
      </div>
      <div className="text-2xl mt-2 text-slate-600 dark:text-slate-400 text-center sm:ml-8 transform transition-all duration-300 hover:text-slate-800 dark:hover:text-slate-200 cursor-default">
        Software Engineer | Full Stack Developer
      </div>
    </div>
  );
};

export default Header;
