import type { SkillGroup } from '@/types/resume';

interface SkillListProps {
  groups: SkillGroup[];
}

export default function SkillList({ groups }: SkillListProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {groups.map((group) => (
        <div
          key={group.category}
          className="rounded-xl border border-slate-200 p-5 dark:border-slate-800"
        >
          <h3 className="mb-4 text-xs font-bold tracking-widest text-slate-500 uppercase">
            {group.category}
          </h3>
          <ul className="flex flex-wrap gap-2">
            {group.skills.map(({ name, icon: Icon, color }) => (
              <li
                key={name}
                className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-2.5 py-1.5 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
              >
                {Icon && <Icon className="size-4 shrink-0" style={{ color }} aria-hidden />}
                {name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
