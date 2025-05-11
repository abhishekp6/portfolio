import { useFadeInOnScroll } from "../../hooks/useFadeInOnScroll";
import { SectionProps } from "../../types";

export const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  const ref = useFadeInOnScroll();
  return (
    <div id={id} ref={ref} className="mt-24 opacity-0 translate-y-10 transition-all duration-[1200ms]">
      <div className="text-2xl font-bold text-center text-slate-800 dark:text-slate-200">{title}</div>
      <div className="mt-6">{children}</div>
    </div>
  );
};
