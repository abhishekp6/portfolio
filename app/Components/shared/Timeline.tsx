import Link from "next/link";
import { Checkpoint, TimelineProps } from "../../types";

const TitleSection = ({ checkpoint }: { checkpoint: Checkpoint }) => (
  <div className="flex flex-col space-y-1">
    <span className="text-base font-semibold text-slate-900 dark:text-slate-100 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">
      {checkpoint.company}
    </span>
    <span className="text-sm text-slate-600 dark:text-slate-300">{checkpoint.role}</span>
    <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{checkpoint.dateRange}</span>
  </div>
);

export const Timeline: React.FC<TimelineProps> = ({ checkpoints }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {checkpoints.map((checkpoint) => (
      <div key={checkpoint.id} className="p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
        <div className="mb-4">
          {checkpoint.companyUrl ? (
            <Link href={checkpoint.companyUrl} target="_blank">
              <div className="cursor-pointer group">
                <TitleSection checkpoint={checkpoint} />
              </div>
            </Link>
          ) : (
            <TitleSection checkpoint={checkpoint} />
          )}
        </div>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-sm space-y-2">
          {checkpoint.description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);
